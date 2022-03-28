import Link from '@docusaurus/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';

import styles from './component.module.css';
import Info from './Info';
import AppliesTo from './AppliesTo';

const Parameter = (props) => {
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12}><Divider className={ styles.divider } style={{ marginBottom: '12px' }}/></Grid>
        <Grid item xs={props.xs}>
          <Grid container>
            <Grid item xs={props.xs>4?1:4}>
              <Typography>
                <code>{props.alias}</code> :
              </Typography>
            </Grid>
            { /* <Grid item xs={2}>
              <Typography>typed</Typography>
            </Grid>
             */ }
            <Grid item xs={props.xs>4?11:8}>
              <Typography> { (props.withLink !== undefined && !props.withLink) ? (
                <code>{props.type}</code>
              ) : (
                <Link to={'/docs/reference/types#'+props.type}><code>{props.type}</code></Link>
              )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12-props.xs}>
          <Typography style={{
            fontFamily: 'IBM Plex Sans'
          }}>
            {props.desc}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

const Returns = (props) => {
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12}><Divider className={ styles.divider } style={{ marginBottom: '12px' }}/></Grid>
        <Grid item xs={12} style={{ marginBottom: '6px' }}>
          <Typography>
            { (props.withLink !== undefined && !props.withLink) ? (
              <code>{props.type}</code>
            ) : (
              <Link to={'/docs/reference/types#'+props.type}><code>{props.type}</code></Link>
            )}
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography style={{
            fontFamily: 'IBM Plex Sans'
          }}>
            {props.desc}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

const fold = (reducer, init, xs) => {
  let acc = init;
  for (const x of xs) {
      acc = reducer(acc, x);
  }
  return acc;
};

const maximum = xs => fold((acc, x) => (acc >= x) ? acc : x, -Infinity, xs);

const getParameterXS = (params) => {
  const max = maximum(params.map(p => p.type.length));
  if (max > 30) {
    return 6
  } else if (max > 20) {
    return 5
  } else if (max > 10) {
    return 3
  }
  return 2
}

export default function Builtin(props) {
  const paramXS = (props.data.parameters !== undefined) ? getParameterXS(props.data.parameters) : 0;
  return (
    <StyledEngineProvider injectFirst>
    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} style={{ marginBottom: '60px' }}>
      <Grid item xs={12} >
        <Typography style={{
          fontFamily: 'IBM Plex Sans',
        }}>
          {props.data.desc}
        </Typography>
      </Grid>
      {(props.data.appliesto !== undefined) ? (
          <AppliesTo data={props.data.appliesto} />
        ) : (<div />)
      }
      {(props.data.parameters !== undefined && props.data.parameters.length > 0) ? (
        <Grid item>
          <h4 style={{ marginBottom: '0px', marginTop: '12px', color: 'grey', fontWeight: 'normal' }}>{ (props.data.parameters.length > 1) ? 'Parameters' : 'Parameter'}</h4>
        </Grid>
        ) : (<div />)
      }
      {(props.data.parameters !== undefined && props.data.parameters.length > 0) ? (
        props.data.parameters.map((p,i) => {
          return <Parameter key={"bp"+i} alias={p.alias} type={p.type} desc={p.desc} xs={paramXS} withLink={p.withLink}/>
        })
        ) : (<div />)
      }
      <Grid item style={{ marginTop: '12px', color: 'grey' }}>
        <h4 style={{ marginTop: '12px', marginBottom: '0px', fontWeight: 'normal' }}>Returns</h4>
      </Grid>
      <Returns type={props.data.returns.type} withLink={props.data.returns.withLink} desc={props.data.returns.desc} />
      <Grid item xs={12}>
        <Info fails={props.data.fails} michelson={props.data.michelson} michelson_ref_url={props.data.michelson_ref_url} related={props.data.related} />
      </Grid>
    </Grid>
    </StyledEngineProvider>
  )
}