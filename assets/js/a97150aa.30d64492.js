"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[250],{1519:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(3366),r=n(7462),i=n(7294),o=n(6010),l=n(7192),s=n(1796),d=n(2110),p=n(1539),c=n(8979);function m(e){return(0,c.Z)("MuiDivider",e)}(0,n(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var h=n(5893);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],k=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),u=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})));var N=i.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:s,className:d,component:c=(s?"div":"hr"),flexItem:N=!1,light:y=!1,orientation:g="horizontal",role:v=("hr"!==c?"separator":void 0),textAlign:b="center",variant:w="fullWidth"}=n,x=(0,a.Z)(n,f),C=(0,r.Z)({},n,{absolute:i,component:c,flexItem:N,light:y,orientation:g,role:v,textAlign:b,variant:w}),T=(e=>{const{absolute:t,children:n,classes:a,flexItem:r,light:i,orientation:o,textAlign:s,variant:d}=e,p={root:["root",t&&"absolute",d,i&&"light","vertical"===o&&"vertical",r&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(p,m,a)})(C);return(0,h.jsx)(k,(0,r.Z)({as:c,className:(0,o.Z)(T.root,d),role:v,ref:t,ownerState:C},x,{children:s?(0,h.jsx)(u,{className:T.wrapper,ownerState:C,children:s}):null}))}))},4810:function(e,t,n){n.d(t,{Z:function(){return l}});n(7294);var a=n(4880),r=n(8357),i=n(5893);const o=(0,r.Z)({key:"css",prepend:!0});function l(e){const{injectFirst:t,children:n}=e;return t?(0,i.jsx)(a.C,{value:o,children:n}):n}},2156:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(1519),i=n(4810),o=n(2321);function l(){return a.createElement(i.Z,{injectFirst:!0},a.createElement(r.Z,{className:o.Z.divider}))}},5442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(6886),l=n(2156),s=["components"],d={sidebar_position:5},p="Entrypoint",c={unversionedId:"reference/declarations/entrypoint",id:"reference/declarations/entrypoint",title:"Entrypoint",description:"The contract code is structured as a set of entrypoints. The execution of an entrypoint may change the contract storage and/or generate blockchain operations (a transfer of tez to a contract or account, or a call to another contract's entrypoint).",source:"@site/docs/reference/declarations/entrypoint.md",sourceDirName:"reference/declarations",slug:"/reference/declarations/entrypoint",permalink:"/docs/reference/declarations/entrypoint",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/reference/declarations/entrypoint.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Inlined",permalink:"/docs/reference/declarations/inlined"},next:{title:"Function",permalink:"/docs/reference/declarations/function"}},m={},h=[{value:"Entry",id:"entry",level:2},{value:"Transition",id:"transition",level:2},{value:"<code>from</code>",id:"from",level:3},{value:"<code>to</code>",id:"to",level:3},{value:"Getter",id:"getter",level:2},{value:"Sections",id:"sections",level:2},{value:"<code>no transfer</code>",id:"no-transfer",level:3},{value:"<code>sourced by</code>",id:"sourced-by",level:3},{value:"<code>called by</code>",id:"called-by",level:3},{value:"<code>state is</code>",id:"state-is",level:3},{value:"<code>constant</code>",id:"constant",level:3},{value:"<code>require</code>",id:"require",level:3},{value:"<code>fail if</code>",id:"fail-if",level:3},{value:"<code>effect</code>",id:"effect",level:3}],f={toc:h};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entrypoint"},"Entrypoint"),(0,i.kt)("p",null,"The contract code is structured as a set of entrypoints. The execution of an entrypoint may change the contract storage and/or generate blockchain operations (a transfer of tez to a contract or account, or a call to another contract's entrypoint)."),(0,i.kt)("h2",{id:"entry"},"Entry"),(0,i.kt)("p",null,"An entrypoint is declared with the ",(0,i.kt)("inlineCode",{parentName:"p"},"entry")," keyword followed by the entrypoint ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/declarations/identifier"},"identifier")," and the list of parameters; a parameter is defined by an ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/declarations/identifier"},"identifier")," and a type (",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types"},"basic")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/language-basics/composite"},"composite"),")."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"entry %transfer(%from : address, %to: adress, amount : nat) {\n  /* ... body ... */\n}\n")),(0,i.kt)("p",null,"The body of an entrypoint is composed of ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint#sections"},(0,i.kt)("em",{parentName:"a"},"sections"))," presented below."),(0,i.kt)("h2",{id:"transition"},"Transition"),(0,i.kt)("p",null,"A transition is an entrypoint that changes the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/expressions/constants#state"},"state")," of the contract desgined as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/statemachine"},"state machine"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"transition")," keyword declares a transition, followed by the entrypoint ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/declarations/identifier"},"identifier")," and the list of parameters."),(0,i.kt)("p",null,"The body of the transaction is made of the following ",(0,i.kt)("em",{parentName:"p"},"sections"),":"),(0,i.kt)("h3",{id:"from"},(0,i.kt)("inlineCode",{parentName:"h3"},"from")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," section, followed by a state value, specifies the required state of the contract to transition from. It fails with ",(0,i.kt)("inlineCode",{parentName:"p"},'"INVALID_STATE"')," if the transition is called while the contract is in another state."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"transition accept() {\n  from Shipped\n  /* ... */\n}\n")),(0,i.kt)("h3",{id:"to"},(0,i.kt)("inlineCode",{parentName:"h3"},"to")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"to")," section, followed by a state value, specifies the state to transition to. It is optionally followed by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"when")," and a ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/types#bool"},"boolean")," expression to specify a guard condition"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"with effect")," to specify an effect (on storage and/or operations)")),(0,i.kt)("p",null,"For example, the following entrypoint transitions from ",(0,i.kt)("inlineCode",{parentName:"p"},"Shipped")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Accepted"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"transition accept() {\n  from Shipped\n  to   Accepted\n}\n")),(0,i.kt)("p",null,"A transition may have an effect, like for example transfering the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/expressions/constants#balance"},(0,i.kt)("inlineCode",{parentName:"a"},"balance"))," of the contract to the ",(0,i.kt)("inlineCode",{parentName:"p"},"seller")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types#address"},"address"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"transition accept() {\n  from Shipped\n  to   Accepted\n  with effect {\n    transfer balance to seller\n  }\n}\n")),(0,i.kt)("p",null,"It is possible to transition to different states according to ",(0,i.kt)("em",{parentName:"p"},"guard conditions"),"; it transitions to the first state whose guard condition is verified."),(0,i.kt)("p",null,"For example, the following transitions from ",(0,i.kt)("inlineCode",{parentName:"p"},"Shipped")," state to ",(0,i.kt)("inlineCode",{parentName:"p"},"Accepted")," when ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", and to ",(0,i.kt)("inlineCode",{parentName:"p"},"Canceled")," otherwise:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"transition accept(success : bool) {\n  from Shipped\n  to Accepted when { success } with effect {\n    transfer balance to seller\n  }\n  to Canceled /* when success is false */\n}\n")),(0,i.kt)("p",null,"Any ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint#sections"},"section")," (except ",(0,i.kt)("inlineCode",{parentName:"p"},"state is"),") may also be added to the body of a transaction."),(0,i.kt)("p",null,"For example the following transition may only be called by the ",(0,i.kt)("inlineCode",{parentName:"p"},"transporter")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types#address"},"address")," and it sets the storage variable ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"transition accept(success : bool, msg : string) {\n  called by transporter\n  from Shipped\n  to Accepted when { success } with effect {\n    transfer balance to seller\n  }\n  to Canceled /* when success is false */\n  effect {\n    message := msg\n  }\n}\n")),(0,i.kt)("h2",{id:"getter"},"Getter"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"getter")," is the entrypoint type dedicated to the ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-4/tzip-4.md"},"TZIP-4 view"),' pattern: it takes an argument, and "',(0,i.kt)("em",{parentName:"p"},"returns"),'" a value; the return mechanism is implemented in the form of an argument callback whose argument is the returned value, and called by the getter.'),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"getter")," syntax hides the callback argument and uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," keyword to specify the value to pass to the callback."),(0,i.kt)("p",null,"For example, the following declares a storage ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/declarations/storage#variable"},"variable")," ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"getBar")," getter that returns this value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'variable bar : nat = 0\nvariable msg : string = ""\n\ngetter getBar(s : string) : nat {\n  msg := s;\n  return (bar + length(s))\n}\n')),(0,i.kt)("p",null,"Note that the returned value's ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types"},"type")," (here ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types#nat"},(0,i.kt)("inlineCode",{parentName:"a"},"nat")),")is specified after the list of arguments (after a semicolon)."),(0,i.kt)("p",null,"This is syntactic sugar for the following equivalent code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'variable bar : nat = 0\nvariable msg : string = ""\n\nentry getBar(s : string, callback : contract<nat>) {\n  msg := s;\n  transfer transferred to entry callback(bar + length(s))\n}\n')),(0,i.kt)("p",null,"(see ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/instructions/operation#transfer"},(0,i.kt)("inlineCode",{parentName:"a"},"transfer"))," instruction for more information)"),(0,i.kt)("p",null,"The following illustrates how the ",(0,i.kt)("inlineCode",{parentName:"p"},"getBar")," getter would be called:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable foo : nat = 0\n\nentry setFoo(v : nat) {\n  foo := v\n}\n\nentry getFoo(getter_addr : address) {\n  transfer 0tz to getter_addr call getBar<contract<nat>>(self.setFoo)\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getFoo")," entrypoint calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"getBar")," entry of contract at address ",(0,i.kt)("inlineCode",{parentName:"p"},"ca"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The TZIP-4 standard is officially deprecated as it is replaced by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/declarations/view"},(0,i.kt)("inlineCode",{parentName:"a"},"view"))," feature (available since Ithaca protocol)."),(0,i.kt)("p",{parentName:"div"},"The benefit of the ",(0,i.kt)("inlineCode",{parentName:"p"},"view")," feature is that it does not require to split the execution flow in two entries (as in ",(0,i.kt)("inlineCode",{parentName:"p"},"getFoo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"setFoo")," example above). Hence a view is to be preferred whenever the getter's contract storage is not modified."))),(0,i.kt)("h2",{id:"sections"},"Sections"),(0,i.kt)("p",null,"The body of an entrypoint ('entry', 'transition', 'getter') is made of the following ",(0,i.kt)("em",{parentName:"p"},"sections"),". Each section is optional and appears in the order of presentation below."),(0,i.kt)(o.ZP,{container:!0,mdxType:"Grid"},(0,i.kt)(o.ZP,{xs:12,sm:12,md:2.5,mdxType:"Grid"},(0,i.kt)("h3",{id:"no-transfer"},(0,i.kt)("inlineCode",{parentName:"h3"},"no transfer"))),(0,i.kt)(o.ZP,{xs:12,sm:12,md:9.5,mdxType:"Grid"},(0,i.kt)("p",null,"Fails with ",(0,i.kt)("inlineCode",{parentName:"p"},'"NO_TRANSFER"')," if the value of ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/expressions/constants#transferred"},(0,i.kt)("inlineCode",{parentName:"a"},"transferred"))," is different from ",(0,i.kt)("inlineCode",{parentName:"p"},"0tz")),(0,i.kt)("p",null,"A specific error message can be specified with the ",(0,i.kt)("inlineCode",{parentName:"p"},"otherwise")," keyword:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'entry exec() {\n  no transfer otherwise "NO_FUND_EXPECTED"\n  /* ... */\n}\n')))),(0,i.kt)(l.Z,{mdxType:"ThemedDivider"}),(0,i.kt)(o.ZP,{container:!0,style:{marginTop:"18px"},mdxType:"Grid"},(0,i.kt)(o.ZP,{xs:12,sm:12,md:2.5,mdxType:"Grid"},(0,i.kt)("h3",{id:"sourced-by"},(0,i.kt)("inlineCode",{parentName:"h3"},"sourced by"))),(0,i.kt)(o.ZP,{xs:12,sm:12,md:9.5,mdxType:"Grid"},(0,i.kt)("p",null,"Fails with ",(0,i.kt)("inlineCode",{parentName:"p"},'"INVALID_SOURCE"')," if the value of ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/expressions/constants#source"},(0,i.kt)("inlineCode",{parentName:"a"},"source"))," is different from the argument address."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"set_owner_candidate")," entry point fails if not called by ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"entry set_owner_candidate(oc : address) {\n  sourced by owner\n  /* ... other sections ... */\n}\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("inlineCode",{parentName:"p"},"called by")," section below for more information."),(0,i.kt)("p",null,"A specific error message can be specified with the ",(0,i.kt)("inlineCode",{parentName:"p"},"otherwise")," keyword."))),(0,i.kt)(l.Z,{mdxType:"ThemedDivider"}),(0,i.kt)(o.ZP,{container:!0,style:{marginTop:"18px"},mdxType:"Grid"},(0,i.kt)(o.ZP,{xs:12,sm:12,md:2.5,mdxType:"Grid"},(0,i.kt)("h3",{id:"called-by"},(0,i.kt)("inlineCode",{parentName:"h3"},"called by"))),(0,i.kt)(o.ZP,{xs:12,sm:12,md:9.5,mdxType:"Grid"},(0,i.kt)("p",null,"Fails with ",(0,i.kt)("inlineCode",{parentName:"p"},'"INVALID_CALLER"')," if the value of ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/expressions/constants#caller"},(0,i.kt)("inlineCode",{parentName:"a"},"caller"))," is different from the argument address."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"set_owner_candidate")," entry point fails if not called by ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"entry set_owner_candidate(oc : address) {\n  called by owner\n  /* ... other sections ... */\n}\n")),(0,i.kt)("p",null,"The argument of the section may also be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a list of addresses separated by the ",(0,i.kt)("inlineCode",{parentName:"li"},"or")," keyword"),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("a",{parentName:"li",href:"/docs/asset"},"asset")," identified by an ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/types#address"},(0,i.kt)("inlineCode",{parentName:"a"},"address"))," typed field"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("a",{parentName:"li",href:"/docs/language-basics/container"},"set")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/language-basics/container"},"list")," of addresses")),(0,i.kt)("p",null,"(this also applies to ",(0,i.kt)("inlineCode",{parentName:"p"},"source by")," section above)"),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'entry set_owner_candidate(oc : address) {\n  called by owner or admin otherwise "EXPECTS_OWNER_OR_ADMIN"\n  /* ... other sections ... */\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"vote")," entry below fails if ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/expressions/constants#caller"},(0,i.kt)("inlineCode",{parentName:"a"},"caller"))," is not a ",(0,i.kt)("inlineCode",{parentName:"p"},"voter")," (that is if ",(0,i.kt)("inlineCode",{parentName:"p"},"voter.contains(caller)")," evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"asset voter {\n  id       : address;\n  nb_votes : nat = 0;\n}\n\nentry vote(proposal : nat) {\n  called by voter\n  /* ... other sections ... */\n}\n")))),(0,i.kt)(l.Z,{mdxType:"ThemedDivider"}),(0,i.kt)(o.ZP,{container:!0,style:{marginTop:"18px"},mdxType:"Grid"},(0,i.kt)(o.ZP,{xs:12,sm:12,md:2.5,mdxType:"Grid"},(0,i.kt)("h3",{id:"state-is"},(0,i.kt)("inlineCode",{parentName:"h3"},"state is"))),(0,i.kt)(o.ZP,{xs:12,sm:12,md:9.5,mdxType:"Grid"},(0,i.kt)("p",null,"Fails with ",(0,i.kt)("inlineCode",{parentName:"p"},'"INVALID_STATE"')," if the value of ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/expressions/constants#state"},(0,i.kt)("inlineCode",{parentName:"a"},"state"))," is different from the argument state."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"redeem")," entry point below fails if the contract's state is not ",(0,i.kt)("inlineCode",{parentName:"p"},"Canceled"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"entry redeem() {\n  state is Canceled\n  /* ... other sections ... */\n}\n")),(0,i.kt)("p",null,"A specific error message can be specified with the ",(0,i.kt)("inlineCode",{parentName:"p"},"otherwise")," keyword."))),(0,i.kt)(l.Z,{mdxType:"ThemedDivider"}),(0,i.kt)(o.ZP,{container:!0,style:{marginTop:"18px"},mdxType:"Grid"},(0,i.kt)(o.ZP,{xs:12,sm:12,md:2.5,mdxType:"Grid"},(0,i.kt)("h3",{id:"constant"},(0,i.kt)("inlineCode",{parentName:"h3"},"constant"))),(0,i.kt)(o.ZP,{xs:12,sm:12,md:9.5,mdxType:"Grid"},(0,i.kt)("p",null,"Declaration section of local ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/instructions/localvariable#const"},"constants")," to be used in following sections."),(0,i.kt)("p",null,"A constant is declared by an identifier followed by keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"is")," and value. Declarations are separated by ",(0,i.kt)("inlineCode",{parentName:"p"},";"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"entry consume(data: bytes) {\n  called by consumer\n  constant {\n    hashed_data is blake2b(data);\n    value       is get_value(hashed_data);\n  }\n  /* ... */\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hashed_data")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," are now declared and available in following sections (",(0,i.kt)("inlineCode",{parentName:"p"},"require"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"effect"),", ...). As constants, their value cannot be modified."),(0,i.kt)("p",null,"It is possible to extract the ",(0,i.kt)("inlineCode",{parentName:"p"},"some")," value of an ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types#option%3CT%3E"},(0,i.kt)("inlineCode",{parentName:"a"},"option")),", and fail if it is ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),"."),(0,i.kt)("p",null,"For example, say the ",(0,i.kt)("inlineCode",{parentName:"p"},"get_value")," function returns an option of ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types#int"},(0,i.kt)("inlineCode",{parentName:"a"},"int")),"; the following declares a constant named ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," and typed ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", and fails with ",(0,i.kt)("inlineCode",{parentName:"p"},'"NOT_FOUND"')," if ",(0,i.kt)("inlineCode",{parentName:"p"},"get_value")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'entry consume(data: bytes) {\n  called by consumer\n  constant {\n    hashed_data  is blake2b(data);\n    value       ?is get_value(hashed_data) : "NOT_FOUND";\n  }\n  /* ... */\n}\n')))),(0,i.kt)(l.Z,{mdxType:"ThemedDivider"}),(0,i.kt)(o.ZP,{container:!0,style:{marginTop:"18px"},mdxType:"Grid"},(0,i.kt)(o.ZP,{xs:12,sm:12,md:2.5,mdxType:"Grid"},(0,i.kt)("h3",{id:"require"},(0,i.kt)("inlineCode",{parentName:"h3"},"require"))),(0,i.kt)(o.ZP,{xs:12,sm:12,md:9.5,mdxType:"Grid"},(0,i.kt)("p",null,"Fails if at least one of the requirements is ",(0,i.kt)("strong",{parentName:"p"},"not")," true. A requirement is defined by a unique identifier, a ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types#bool"},(0,i.kt)("inlineCode",{parentName:"a"},"bool"))," typed expression and an optional error value (introduced by the ",(0,i.kt)("inlineCode",{parentName:"p"},"otherwise")," keyword)."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"pay")," entry point fails with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'(Pair "r1" "INVALID_CONDITION")')," when ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/expressions/constants#transferred"},(0,i.kt)("inlineCode",{parentName:"a"},"transferred"))," is not high enough"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"PAYMENT_PERIOD_IS_OVER"')," when ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/expressions/constants#now"},(0,i.kt)("inlineCode",{parentName:"a"},"now"))," is beyond ",(0,i.kt)("inlineCode",{parentName:"li"},"deadline")," date")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'entry pay() {\n  require {\n    r1: transferred > amount;\n    r2: now < deadline otherwise "PAYMENT_PERIOD_IS_OVER"\n  }\n  /* ... other sections ... */\n}\n')))),(0,i.kt)(l.Z,{mdxType:"ThemedDivider"}),(0,i.kt)(o.ZP,{container:!0,style:{marginTop:"18px"},mdxType:"Grid"},(0,i.kt)(o.ZP,{xs:12,sm:12,md:2.5,mdxType:"Grid"},(0,i.kt)("h3",{id:"fail-if"},(0,i.kt)("inlineCode",{parentName:"h3"},"fail if"))),(0,i.kt)(o.ZP,{xs:12,sm:12,md:9.5,mdxType:"Grid"},(0,i.kt)("p",null,"Fails if at least one of the failing conditions ",(0,i.kt)("strong",{parentName:"p"},"is")," true. A failing condition is defined by a unique identifier, a ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types#bool"},(0,i.kt)("inlineCode",{parentName:"a"},"bool"))," typed expression and an optional message value (introduced by the ",(0,i.kt)("inlineCode",{parentName:"p"},"with")," keyword)."),(0,i.kt)("p",null,"For example, the code below is equivalent to the code in the above section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'entry pay() {\n  fail if {\n    f1: transferred <= amount;\n    f2: now >= deadline with "PAYMENT_PERIOD_IS_OVER"\n  }\n  /* ... other sections ... */\n}\n')))),(0,i.kt)(l.Z,{mdxType:"ThemedDivider"}),(0,i.kt)(o.ZP,{container:!0,style:{marginTop:"18px"},mdxType:"Grid"},(0,i.kt)(o.ZP,{xs:12,sm:12,md:2.5,mdxType:"Grid"},(0,i.kt)("h3",{id:"effect"},(0,i.kt)("inlineCode",{parentName:"h3"},"effect"))),(0,i.kt)(o.ZP,{xs:12,sm:12,md:9.5,mdxType:"Grid"},(0,i.kt)("p",null,"This section contains the code (a list of ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference#instructions"},"instructions"),") to modify the contract's storage and to generate ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/instructions/operation"},"operations"),"."),(0,i.kt)("p",null,"For example, the entry point below sets the storage variable ",(0,i.kt)("inlineCode",{parentName:"p"},"owner_candidate"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable owner_candidate : option<address> = none\n\nentry set_owner_candidate(oc : address) {\n  called by owner\n  effect {\n    owner_candidate := some(oc)\n  }\n}\n")),(0,i.kt)("p",null,"If the effect section is the only section in entry point body, the ",(0,i.kt)("inlineCode",{parentName:"p"},"effect")," keyword may be omitted and the code put straightforwardly in top brackets; for example the above entry may be written as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'entry set_owner_candidate(oc : address) {\n  if caller <> owner then fail("INVALID_CALLER");\n  owner_candidate := some(oc)\n}\n')))))}k.isMDXComponent=!0},2321:function(e,t){t.Z={divider:"divider_LuCZ",gradient:"gradient_kJ7D"}}}]);