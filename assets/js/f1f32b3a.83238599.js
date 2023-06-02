"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[1528],{1519:(e,t,a)=>{a.d(t,{Z:()=>y});var i=a(3366),r=a(7462),n=a(7294),l=a(6010),s=a(7192),o=a(1796),c=a(2110),p=a(1539),d=a(8979);function h(e){return(0,d.Z)("MuiDivider",e)}(0,a(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var g=a(5893);const m=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],u=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,o.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),b=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),y=n.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiDivider"}),{absolute:n=!1,children:o,className:c,component:d=(o?"div":"hr"),flexItem:y=!1,light:k=!1,orientation:f="horizontal",role:v=("hr"!==d?"separator":void 0),textAlign:x="center",variant:w="fullWidth"}=a,Z=(0,i.Z)(a,m),_=(0,r.Z)({},a,{absolute:n,component:d,flexItem:y,light:k,orientation:f,role:v,textAlign:x,variant:w}),T=(e=>{const{absolute:t,children:a,classes:i,flexItem:r,light:n,orientation:l,textAlign:o,variant:c}=e,p={root:["root",t&&"absolute",c,n&&"light","vertical"===l&&"vertical",r&&"flexItem",a&&"withChildren",a&&"vertical"===l&&"withChildrenVertical","right"===o&&"vertical"!==l&&"textAlignRight","left"===o&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]};return(0,s.Z)(p,h,i)})(_);return(0,g.jsx)(u,(0,r.Z)({as:d,className:(0,l.Z)(T.root,c),role:v,ref:t,ownerState:_},Z,{children:o?(0,g.jsx)(b,{className:T.wrapper,ownerState:_,children:o}):null}))}))},5861:(e,t,a)=>{a.d(t,{Z:()=>f});var i=a(3366),r=a(7462),n=a(7294),l=a(6010),s=a(9707),o=a(7192),c=a(2110),p=a(1539),d=a(8216),h=a(8979);function g(e){return(0,h.Z)("MuiTypography",e)}(0,a(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=a(5893);const u=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,d.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=n.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiTypography"}),n=(e=>k[e]||e)(a.color),c=(0,s.Z)((0,r.Z)({},a,{color:n})),{align:h="inherit",className:f,component:v,gutterBottom:x=!1,noWrap:w=!1,paragraph:Z=!1,variant:_="body1",variantMapping:T=y}=c,A=(0,i.Z)(c,u),S=(0,r.Z)({},c,{align:h,color:n,className:f,component:v,gutterBottom:x,noWrap:w,paragraph:Z,variant:_,variantMapping:T}),B=v||(Z?"p":T[_]||y[_])||"span",N=(e=>{const{align:t,gutterBottom:a,noWrap:i,paragraph:r,variant:n,classes:l}=e,s={root:["root",n,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,a&&"gutterBottom",i&&"noWrap",r&&"paragraph"]};return(0,o.Z)(s,g,l)})(S);return(0,m.jsx)(b,(0,r.Z)({as:B,ref:t,ownerState:S,className:(0,l.Z)(N.root,f)},A))}))},8216:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a(601).Z},4810:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var i=a(4880),r=a(8357),n=a(5893);const l=(0,r.Z)({key:"css",prepend:!0});function s(e){const{injectFirst:t,children:a}=e;return t?(0,n.jsx)(i.C,{value:l,children:a}):a}},6457:(e,t,a)=>{a.d(t,{Z:()=>d});var i=a(7294),r=a(9960),n=a(6886),l=a(1519),s=a(5861),o=a(4810),c=a(2321);const p=e=>i.createElement(n.ZP,{item:!0,container:!0,xs:12},1==e.divider?i.createElement(n.ZP,{item:!0,xs:12},i.createElement(l.Z,{className:c.Z.divider,style:{marginBottom:"8px",marginTop:"4px"}})):i.createElement("div",null),i.createElement(n.ZP,{item:!0,xs:12,sm:e.xs,md:e.xs,style:{paddingLeft:"8px"}},null==e.data.link?i.createElement("code",null,e.data.label):i.createElement(r.Z,{to:e.data.link},i.createElement("code",null,e.data.label))),i.createElement(n.ZP,{item:!0,xs:12,sm:12-e.xs,md:12-e.xs,style:{paddingLeft:"8px",marginBottom:"8px"}},i.createElement(s.Z,{style:{fontFamily:"IBM Plex Sans"}},e.data.desc)));function d(e){const t=null==e.xs?3:e.xs;return i.createElement(o.Z,{injectFirst:!0},i.createElement(n.ZP,{container:!0},i.createElement(n.ZP,{item:!0,style:{paddingLeft:"8px"}},i.createElement(s.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},e.title)),e.data.map(((a,r)=>i.createElement(p,{divider:r>0||0==r&&e.title.length>0,data:a,xs:t})))))}},1750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>y,frontMatter:()=>d,metadata:()=>g,toc:()=>u});var i=a(7462),r=(a(7294),a(3905));const n={types:[{label:"bls12_381_fr",link:"/docs/reference/types#bls12_381_fr",desc:"Multiplicative scalar for g1 and g2"},{label:"bls12_381_g1",link:"/docs/reference/types#bls12_381_g1",desc:"Point on g1"},{label:"bls12_381_g2",link:"/docs/reference/types#bls12_381_g2",desc:"Point on g2"}],builtins:[{label:"pairing_check",link:"/docs/reference/expressions/builtins#pairing_check(l%20:%20list<bls12_381_g1%20*%20bls12_381_g2>)",desc:"Checks pairing of pairs of BLS values"}]},l=[{label:"blake2b",link:"/docs/reference/expressions/builtins#blake2b(b%20:%20bytes)",desc:"Hashes bytes value with blake2b algorithm"},{label:"keccak",link:"/docs/reference/expressions/builtins#keccak(b%20:%20bytes)",desc:"Hashes bytes value with keccak algorithm"},{label:"sha256",link:"/docs/reference/expressions/builtins#sha256(b%20:%20bytes)",desc:"Hashes bytes value with sha256 algorithm"},{label:"sha3",link:"/docs/reference/expressions/builtins#sha3(b%20:%20bytes)",desc:"Hashes bytes value with sha3 algorithm"},{label:"sha512",link:"/docs/reference/expressions/builtins#sha512(b%20:%20bytes)",desc:"Hashes bytes value with sha512 algorithm"}],s={types:[{label:"sapling_state",link:"/docs/reference/types#sapling_state(n)",desc:"Sapling state"},{label:"sapling_transaction",link:"/docs/reference/types#sapling_transaction(n)",desc:"Sapling transaction"}],builtins:[{label:"sapling_empty_state",link:"/docs/reference/expressions/builtins#sapling_empty_state(k%20:%20key_hash)",desc:"Creates sapling state"},{label:"sapling_verify_update",link:"/docs/reference/expressions/builtins#sapling_verify_update(s,%20t)",desc:"Applies sapling transaction"}]},o={types:[{label:"signature",link:"/docs/reference/types#signature",desc:"Cryptographic signature"}],builtins:[{label:"check_signature",link:"/docs/reference/expressions/builtins#check_signature(k%20:%20key,%20s%20:%20signature,%20b%20:%20bytes)",desc:"Checks if signature and data matches"}]},c={types:[{label:"chest",link:"/docs/reference/types#chest",desc:"Timelock encrypted data"},{label:"chest_key",link:"/docs/reference/types#chest_key",desc:"Key for chest"}],builtins:[{label:"open_chest",link:"/docs/reference/expressions/builtins#open_chest(k%20:%20chest_key,%20c%20:%20chest,%20t%20:%20nat)",desc:"Decrypt chest data"}]};var p=a(6457);const d={sidebar_position:14},h="Cryptography",g={unversionedId:"language-basics/crypto",id:"language-basics/crypto",title:"Cryptography",description:"Hash",source:"@site/docs/language-basics/crypto.md",sourceDirName:"language-basics",slug:"/language-basics/crypto",permalink:"/docs/language-basics/crypto",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/language-basics/crypto.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"docs",previous:{title:"Basic containers",permalink:"/docs/language-basics/container"},next:{title:"Asset",permalink:"/docs/asset"}},m={},u=[{value:"Hash",id:"hash",level:2},{value:"Signature",id:"signature",level:2},{value:"Timelock",id:"timelock",level:2},{value:"Sapling",id:"sapling",level:2},{value:"Elliptic curves",id:"elliptic-curves",level:2}],b={toc:u};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cryptography"},"Cryptography"),(0,r.kt)("h2",{id:"hash"},"Hash"),(0,r.kt)("p",null,"A hash ",(0,r.kt)("em",{parentName:"p"},"function")," maps an ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/types#bytes"},(0,r.kt)("inlineCode",{parentName:"a"},"bytes"))," value of arbitrary length to a fixed-length ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/types#bytes"},(0,r.kt)("inlineCode",{parentName:"a"},"bytes"))," value, such that it is not possible to compute the input from a hashed value."),(0,r.kt)(p.Z,{title:"Builtins",data:l,mdxType:"Api"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"signature"},"Signature"),(0,r.kt)("p",null,"An ",(0,r.kt)("em",{parentName:"p"},"asymetric")," signature pattern allows the ",(0,r.kt)("em",{parentName:"p"},"off-chain")," signing of some data with the the secret key, and check ",(0,r.kt)("em",{parentName:"p"},"on-chain")," the identity of the signer with its public ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/types#key"},"key"),"."),(0,r.kt)(p.Z,{title:"Types",data:o.types,mdxType:"Api"}),(0,r.kt)("br",null),(0,r.kt)(p.Z,{title:"Builtins",data:o.builtins,mdxType:"Api"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"timelock"},"Timelock"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"timelocked")," value is encrypted strongly enough so that it will take more than a certain amount of time to crack it with a powerful computer, but weakly enough so that given some more time, this computer will manage to crack it. That is to say that, beyond a certain amount of time, a timelocked value may be considered public."),(0,r.kt)("p",null,"Learn more with this contract ",(0,r.kt)("a",{parentName:"p",href:"https://opentezos.com/archetype/raffle-example/raffle-contract"},"example"),"."),(0,r.kt)(p.Z,{title:"Types",data:c.types,mdxType:"Api"}),(0,r.kt)("br",null),(0,r.kt)(p.Z,{title:"Builtins",data:c.builtins,mdxType:"Api"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"sapling"},"Sapling"),(0,r.kt)("p",null,"Sapling allows ",(0,r.kt)("em",{parentName:"p"},"anonymity")," when transacting with fungible tokens."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sapling requires a set of additional keys, similar to the public and private keys of your Tezos blockchain wallet. There is the viewing key and sending key. The viewing key is similar to the public key, where it allows you to see private transactions sent in and out. ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://medium.com/tezos-israel/sapling-and-shielded-transactions-on-tezos-35b9d53103da"},"more"))," ...")),(0,r.kt)(p.Z,{title:"Types",data:s.types,mdxType:"Api"}),(0,r.kt)("br",null),(0,r.kt)(p.Z,{title:"Builtins",data:s.builtins,mdxType:"Api"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"elliptic-curves"},"Elliptic curves"),(0,r.kt)("p",null,"Elliptic curves provide a fast and efficient asymetric encryption pattern."),(0,r.kt)(p.Z,{title:"Types",data:n.types,mdxType:"Api"}),(0,r.kt)("br",null),(0,r.kt)(p.Z,{title:"Builtins",data:n.builtins,mdxType:"Api"}),(0,r.kt)("br",null))}y.isMDXComponent=!0},2321:(e,t,a)=>{a.d(t,{Z:()=>i});const i={divider:"divider_LuCZ",gradient:"gradient_kJ7D"}}}]);