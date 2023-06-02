"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[7580],{4048:(e,t,n)=>{var a=n(4836);t.Z=void 0;var r=a(n(4938)),i=n(5893),l=(0,r.default)((0,i.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew");t.Z=l},1519:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(3366),r=n(7462),i=n(7294),l=n(6010),o=n(7192),s=n(1796),c=n(2110),d=n(1539),m=n(8979);function p(e){return(0,m.Z)("MuiDivider",e)}(0,n(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var h=n(5893);const u=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],v=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),f=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),k=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:s,className:c,component:m=(s?"div":"hr"),flexItem:k=!1,light:y=!1,orientation:g="horizontal",role:_=("hr"!==m?"separator":void 0),textAlign:x="center",variant:b="fullWidth"}=n,w=(0,a.Z)(n,u),Z=(0,r.Z)({},n,{absolute:i,component:m,flexItem:k,light:y,orientation:g,role:_,textAlign:x,variant:b}),E=(e=>{const{absolute:t,children:n,classes:a,flexItem:r,light:i,orientation:l,textAlign:s,variant:c}=e,d={root:["root",t&&"absolute",c,i&&"light","vertical"===l&&"vertical",r&&"flexItem",n&&"withChildren",n&&"vertical"===l&&"withChildrenVertical","right"===s&&"vertical"!==l&&"textAlignRight","left"===s&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]};return(0,o.Z)(d,p,a)})(Z);return(0,h.jsx)(v,(0,r.Z)({as:m,className:(0,l.Z)(E.root,c),role:_,ref:t,ownerState:Z},w,{children:s?(0,h.jsx)(f,{className:E.wrapper,ownerState:Z,children:s}):null}))}))},6912:(e,t,n)=>{n.d(t,{_:()=>h});var a=n(7294),r=n(7462),i=n(3905);const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Number of tez held by the contract."),(0,i.kt)("p",null,"It is indeed possible to send tez to a contract, either with a buitlin ",(0,i.kt)("em",{parentName:"p"},"tansfer")," command (tezos-client, wallets, ...) or when calling an entrypoint."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Note however that it is ",(0,i.kt)("strong",{parentName:"p"},"not")," possible to transfer the balance of a contract unless it is ",(0,i.kt)("strong",{parentName:"p"},"explicitely")," made possible by entrypoints.")),(0,i.kt)("p",null,"If a contract is receiving tez, it is recommended to add the following ",(0,i.kt)("inlineCode",{parentName:"p"},"collect")," entrypoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"entry collect(collector : address) {\n  called by owner\n  effect {\n    transfer balance to collector\n  }\n}\n")))}o.isMDXComponent=!0;var s=n(6886),c=n(2156);const d={toc:[]};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Chain unique identifier."),(0,i.kt)("p",null,"It is typically used in ",(0,i.kt)("em",{parentName:"p"},"signed")," permits data to be ",(0,i.kt)("em",{parentName:"p"},"verified")," on chain, in order to avoid replay attacks from testnet to mainnet (so that a permit from testnet cannot be used on mainnet)."),(0,i.kt)("p",null,"The table below shows the chain id of the main networks:"),(0,i.kt)(s.ZP,{container:!0,mdxType:"Grid"},(0,i.kt)(s.ZP,{xs:12,sm:12,md:2.5,mdxType:"Grid"},"Mainnet"),(0,i.kt)(s.ZP,{xs:12,sm:12,md:9.5,mdxType:"Grid"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"NetXdQprcVkpaWU"'))),(0,i.kt)(s.ZP,{xs:12,mdxType:"Grid"},(0,i.kt)(c.Z,{mdxType:"ThemedDivider"})),(0,i.kt)(s.ZP,{xs:12,sm:12,md:2.5,style:{marginTop:"18px"},mdxType:"Grid"},"Testnet (Ithacanet)"),(0,i.kt)(s.ZP,{xs:12,sm:12,md:9.5,style:{marginTop:"18px"},mdxType:"Grid"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"NetXnHfVqm9iesp"')))),(0,i.kt)("p",null,"The chain id is provided by the tezos node at:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<node url>/chains/main/chain_id\n")))}m.isMDXComponent=!0;const p="https://tezos.gitlab.io/michelson-reference",h={minblocktime:{desc:a.createElement("div",null,"Current minimal block time (between two blocks) in seconds."),type:"nat",michelson:"MIN_BLOCK_TIME",michelson_ref_url:p+"/#instr-MIN_BLOCK_TIME",related:[]},balance:{desc:a.createElement(o,null),type:"tez",michelson:"BALANCE",michelson_ref_url:p+"/#instr-BALANCE",related:[]},self_chain_id:{desc:a.createElement(m,null),type:"chain_id",michelson:"CHAIN_ID",michelson_ref_url:p+"/#instr-CHAIN_ID",related:[]},caller:{desc:"Address calling the contract. It may be an account or another smart contract.",type:"address",michelson:"SENDER",michelson_ref_base_url:p+"/#SENDER",related:[{keyword:"source",link:"/docs/reference/expressions/constants#source"},{keyword:"called by",link:"/docs/reference/declarations/entrypoint#called-by"}]},level:{desc:a.createElement("div",null,"Current block level."),type:"nat",michelson:"LEVEL",michelson_ref_url:p+"/#instr-LEVEL",related:[]},now:{desc:a.createElement("div",null,"Block date. It is constant throughout endpoint execution."),type:"date",michelson:"NOW",michelson_ref_url:p+"/#instr-NOW",related:[]},self_address:{desc:a.createElement("div",null,"Address of current contract."),type:"address",michelson:"SELF_ADDRESS",michelson_ref_url:p+"/#instr-SELF_ADDRESS",related:[{keyword:"caller",link:"/docs/reference/expressions/constants#caller"},{keyword:"sourced by",link:"/docs/reference/declarations/entrypoint#sourced-by"}]},source:{desc:"Address of the account at the origin of the call to the entrypoint. If Alice calls contract A, which calls contract B, then source in contract B is Alice (and caller in contract B is contract A).",type:"address",michelson:"SOURCE",michelson_ref_url:p+"/#instr-SOURCE",related:[{keyword:"caller",link:"/docs/reference/expressions/constants#caller"},{keyword:"sourced by",link:"/docs/reference/declarations/entrypoint#sourced-by"}]},state:{desc:a.createElement("div",null,"State of the contract when designed as a state machine. It is changed with ",a.createElement("code",null,"transition")," entrypoints, not assignment instructions.",a.createElement("p",null),"The Michelson representation is a ",a.createElement("code",null,"nat")," storage variable named ",a.createElement("code",null,"_state"),"."),related:[{keyword:"State Machine",link:"/docs/statemachine"},{keyword:"States declaration",link:"/docs/reference/declarations/compositetypes#states"},{keyword:"Transition",link:"/docs/reference/declarations/compositetypes#transition"},{keyword:"Assignment",link:"/docs/reference/instructions/assignment"}]},transferred:{desc:a.createElement("div",null,"Amount of tez sent to current entrypoint execution."),type:"tez",michelson:"AMOUNT",michelson_ref_url:p+"/#instr-AMOUNT",related:[{keyword:"tez",link:"/docs/reference/types#tez"},{keyword:"balance",link:"/docs/reference/expressions/constants#balance"}]},total_voting_power:{desc:"Total voting power of all contracts.",type:"nat",michelson:"TOTAL_VOTING_POWER",michelson_ref_url:p+"/#instr-TOTAL_VOTING_POWER",related:[{keyword:"voting_power",link:"/docs/reference/expressions/builtins#voting_power(k%20:%20key_hash)"}]}}},6029:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),r=n(6886),i=n(5861),l=n(1519),o=n(6292),s=n(9960),c=n(4048),d=n(2321),m=n(4810),p=n(563);function h(e){return a.createElement(m.Z,{injectFirst:!0},a.createElement(r.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",spacing:1,style:{marginBottom:"60px"}},a.createElement(r.ZP,{item:!0,xs:12,style:{marginBottom:"18px"}},a.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans"}},e.data.desc)),void 0!==e.data.type?a.createElement(r.ZP,{item:!0,xs:3,sm:2,md:2},a.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Type")):a.createElement("div",null),void 0!==e.data.type?a.createElement(r.ZP,{item:!0,xs:9,sm:10,md:10},a.createElement(s.Z,{to:"/docs/reference/types#"+(void 0!==e.data.typeUrl?e.data.typeUrl:e.data.type)},a.createElement("code",null,e.data.type))):a.createElement("div",null),void 0!==e.data.michelson?a.createElement(r.ZP,{item:!0,xs:12},a.createElement(l.Z,{className:d.Z.divider})):a.createElement("div",null),void 0!==e.data.michelson?a.createElement(r.ZP,{item:!0,xs:3,sm:2,md:2},a.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Michelson")):a.createElement("div",null),void 0!==e.data.michelson?a.createElement(r.ZP,{item:!0,xs:9,sm:10,md:10},a.createElement(s.Z,{to:e.data.michelson_ref_url},a.createElement(o.Z,{style:{fontFamily:"Roboto Mono",color:"var(--ifm-color-primary)"},size:"small",disableRipple:!0,endIcon:a.createElement(c.Z,{fontSize:"small"})},e.data.michelson))):a.createElement("div",null),void 0!==e.data.related&&e.data.related.length>0?a.createElement(r.ZP,{item:!0,xs:12},a.createElement(l.Z,{className:d.Z.divider})):a.createElement("div",null),void 0!==e.data.related&&e.data.related.length>0?a.createElement(r.ZP,{item:!0,xs:3,sm:2,md:2},a.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Related")):a.createElement("div",null),void 0!==e.data.related&&e.data.related.length>0?a.createElement(r.ZP,{item:!0,xs:9,sm:10,md:10},a.createElement(r.ZP,{container:!0,direction:"row",spacing:3},e.data.related.map(((e,t)=>a.createElement(p.n,{key:"rel"+t,value:e.keyword,link:e.link}))))):a.createElement("div",null)))}},2156:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(1519),i=n(4810),l=n(2321);function o(){return a.createElement(i.Z,{injectFirst:!0},a.createElement(r.Z,{className:l.Z.divider}))}},563:(e,t,n)=>{n.d(t,{n:()=>o});var a=n(9960),r=n(6886),i=n(5861),l=n(7294);const o=e=>l.createElement(r.ZP,{item:!0},l.createElement(a.Z,{to:e.link},l.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans"}},null!=e.code&&!1===e.code?e.value:l.createElement("code",null,e.value))))},2772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(6029),l=n(6912);const o={sidebar_position:3},s="Constants",c={unversionedId:"reference/expressions/constants",id:"reference/expressions/constants",title:"Constants",description:"balance",source:"@site/docs/reference/expressions/constants.md",sourceDirName:"reference/expressions",slug:"/reference/expressions/constants",permalink:"/docs/reference/expressions/constants",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/reference/expressions/constants.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Operation",permalink:"/docs/reference/instructions/operation"},next:{title:"Variables",permalink:"/docs/reference/expressions/variables"}},d={},m=[{value:"<code>balance</code>",id:"balance",level:3},{value:"<code>caller</code>",id:"caller",level:3},{value:"<code>level</code>",id:"level",level:3},{value:"<code>now</code>",id:"now",level:3},{value:"<code>min_block_time</code>",id:"min_block_time",level:3},{value:"<code>self_address</code>",id:"self_address",level:3},{value:"<code>self_chain_id</code>",id:"self_chain_id",level:3},{value:"<code>source</code>",id:"source",level:3},{value:"<code>state</code>",id:"state",level:3},{value:"<code>transferred</code>",id:"transferred",level:3},{value:"<code>total_voting_power</code>",id:"total_voting_power",level:3}],p={toc:m};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"constants"},"Constants"),(0,r.kt)("h3",{id:"balance"},(0,r.kt)("inlineCode",{parentName:"h3"},"balance")),(0,r.kt)(i.Z,{data:l._.balance,mdxType:"Constant"}),(0,r.kt)("h3",{id:"caller"},(0,r.kt)("inlineCode",{parentName:"h3"},"caller")),(0,r.kt)(i.Z,{data:l._.caller,mdxType:"Constant"}),(0,r.kt)("h3",{id:"level"},(0,r.kt)("inlineCode",{parentName:"h3"},"level")),(0,r.kt)(i.Z,{data:l._.level,mdxType:"Constant"}),(0,r.kt)("h3",{id:"now"},(0,r.kt)("inlineCode",{parentName:"h3"},"now")),(0,r.kt)(i.Z,{data:l._.now,mdxType:"Constant"}),(0,r.kt)("h3",{id:"min_block_time"},(0,r.kt)("inlineCode",{parentName:"h3"},"min_block_time")),(0,r.kt)(i.Z,{data:l._.minblocktime,mdxType:"Constant"}),(0,r.kt)("h3",{id:"self_address"},(0,r.kt)("inlineCode",{parentName:"h3"},"self_address")),(0,r.kt)(i.Z,{data:l._.self_address,mdxType:"Constant"}),(0,r.kt)("h3",{id:"self_chain_id"},(0,r.kt)("inlineCode",{parentName:"h3"},"self_chain_id")),(0,r.kt)(i.Z,{data:l._.self_chain_id,mdxType:"Constant"}),(0,r.kt)("h3",{id:"source"},(0,r.kt)("inlineCode",{parentName:"h3"},"source")),(0,r.kt)(i.Z,{data:l._.source,mdxType:"Constant"}),(0,r.kt)("h3",{id:"state"},(0,r.kt)("inlineCode",{parentName:"h3"},"state")),(0,r.kt)(i.Z,{data:l._.state,mdxType:"Constant"}),(0,r.kt)("h3",{id:"transferred"},(0,r.kt)("inlineCode",{parentName:"h3"},"transferred")),(0,r.kt)(i.Z,{data:l._.transferred,mdxType:"Constant"}),(0,r.kt)("h3",{id:"total_voting_power"},(0,r.kt)("inlineCode",{parentName:"h3"},"total_voting_power")),(0,r.kt)(i.Z,{data:l._.total_voting_power,mdxType:"Constant"}))}h.isMDXComponent=!0},2321:(e,t,n)=>{n.d(t,{Z:()=>a});const a={divider:"divider_LuCZ",gradient:"gradient_kJ7D"}}}]);