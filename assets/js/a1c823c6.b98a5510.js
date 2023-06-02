"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[1993],{1519:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(3366),r=a(7462),l=a(7294),i=a(6010),s=a(7192),o=a(1796),p=a(2110),c=a(1539),m=a(8979);function d(e){return(0,m.Z)("MuiDivider",e)}(0,a(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var h=a(5893);const u=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,p.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,o.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),k=(0,p.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),y=l.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiDivider"}),{absolute:l=!1,children:o,className:p,component:m=(o?"div":"hr"),flexItem:y=!1,light:f=!1,orientation:v="horizontal",role:b=("hr"!==m?"separator":void 0),textAlign:N="center",variant:w="fullWidth"}=a,_=(0,n.Z)(a,u),x=(0,r.Z)({},a,{absolute:l,component:m,flexItem:y,light:f,orientation:v,role:b,textAlign:N,variant:w}),C=(e=>{const{absolute:t,children:a,classes:n,flexItem:r,light:l,orientation:i,textAlign:o,variant:p}=e,c={root:["root",t&&"absolute",p,l&&"light","vertical"===i&&"vertical",r&&"flexItem",a&&"withChildren",a&&"vertical"===i&&"withChildrenVertical","right"===o&&"vertical"!==i&&"textAlignRight","left"===o&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,s.Z)(c,d,n)})(x);return(0,h.jsx)(g,(0,r.Z)({as:m,className:(0,i.Z)(C.root,p),role:b,ref:t,ownerState:x},_,{children:o?(0,h.jsx)(k,{className:C.wrapper,ownerState:x,children:o}):null}))}))},5861:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(3366),r=a(7462),l=a(7294),i=a(6010),s=a(9707),o=a(7192),p=a(2110),c=a(1539),m=a(8216),d=a(8979);function h(e){return(0,d.Z)("MuiTypography",e)}(0,a(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var u=a(5893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],k=(0,p.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,m.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=l.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTypography"}),l=(e=>f[e]||e)(a.color),p=(0,s.Z)((0,r.Z)({},a,{color:l})),{align:d="inherit",className:v,component:b,gutterBottom:N=!1,noWrap:w=!1,paragraph:_=!1,variant:x="body1",variantMapping:C=y}=p,T=(0,n.Z)(p,g),E=(0,r.Z)({},p,{align:d,color:l,className:v,component:b,gutterBottom:N,noWrap:w,paragraph:_,variant:x,variantMapping:C}),A=b||(_?"p":C[x]||y[x])||"span",Z=(e=>{const{align:t,gutterBottom:a,noWrap:n,paragraph:r,variant:l,classes:i}=e,s={root:["root",l,"inherit"!==e.align&&`align${(0,m.Z)(t)}`,a&&"gutterBottom",n&&"noWrap",r&&"paragraph"]};return(0,o.Z)(s,h,i)})(E);return(0,u.jsx)(k,(0,r.Z)({as:A,ref:t,ownerState:E,className:(0,i.Z)(Z.root,v)},T))}))},8216:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a(601).Z},4810:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var n=a(4880),r=a(8357),l=a(5893);const i=(0,r.Z)({key:"css",prepend:!0});function s(e){const{injectFirst:t,children:a}=e;return t?(0,l.jsx)(n.C,{value:i,children:a}):a}},6719:(e,t,a)=>{a.d(t,{RP:()=>r,V5:()=>p,w8:()=>s,zO:()=>i});var n=a(7294);const r=[{link:"address",archetype:"address",michelson:"address",ts:"Address"},{link:"asset_container<A>",archetype:"asset",ts:"Array",ts:"Array",native:!0},{link:"big_map<K,%20V>",archetype:"big_map",michelson:"big_map",ts:"Array",native:!0},{link:"bls12_381_fr",archetype:"bls12_381_fr",michelson:"bls12_381_fr",ts:"Bls12_381_fr"},{link:"bls12_381_g1",archetype:"bls12_381_g1",michelson:"bls12_381_g1",ts:"Bls12_381_g1"},{link:"bls12_381_g2",archetype:"bls12_381_g2",michelson:"bls12_381_g2",ts:"Bls12_381_g2"},{link:"bool",archetype:"bool",michelson:"bool",ts:"boolean",native:!0},{link:"bytes",archetype:"bytes",michelson:"bytes",ts:"Bytes"},{link:"chain_id",archetype:"chain_id",michelson:"chain_id",ts:"Chain_id"},{link:"chest",archetype:"chest",michelson:"chest",ts:"Chest"},{link:"chest_key",archetype:"chest_key",michelson:"chest_key",ts:"Chest_key"},{link:"contract<T>",archetype:"contract",michelson:"contract",ts:"Entrypoint"},{link:"date",archetype:"date",michelson:"timestamp",ts:"date",native:!0},{link:"duration",archetype:"duration",ts:"Duration"},{link:"enum",archetype:"enum",ts:"class",native:!0},{link:"event",archetype:"event",ts:"Event"},{link:"int",archetype:"int",michelson:"int",ts:"Int"},{link:"iterable_big_map<K,%20V>",archetype:"iterable_big_map",ts:"Array",native:!0},{link:"key",archetype:"key",michelson:"key",ts:"Key"},{link:"key_hash",archetype:"key_hash",michelson:"key_hash",ts:"Key_hash"},{link:"lambda<T,%20R>",archetype:"lambda",michelson:"lambda",ts:"Micheline"},{link:"list<T>",archetype:"list",michelson:"list",ts:"Array",native:!0},{link:"map<K,%20V>",archetype:"map",michelson:"map",ts:"Array",native:!0},{link:"nat",archetype:"nat",michelson:"nat",ts:"Nat"},{link:"option<T>",archetype:"option",michelson:"option",ts:"Option"},{link:"or<T1,%20T2>",archetype:"or",michelson:"or",ts:"Or"},{link:"rational",archetype:"rational",ts:"Rational"},{link:"record",archetype:"record",ts:"class",native:!0},{link:"sapling_state(n)",archetype:"sapling_state",michelson:"sapling_state",ts:"Sapling_state"},{link:"sapling_transaction(n)",archetype:"sapling_transaction",michelson:"sapling_transaction",ts:"Sapling_transaction"},{link:"set<T>",archetype:"set",michelson:"set",ts:"Array",native:!0},{link:"signature",archetype:"signature",michelson:"signature",ts:"Signature"},{link:"string",archetype:"string",michelson:"string",ts:"string",native:!0},{link:"tez",archetype:"tez",michelson:"mutez",ts:"Tez"},{link:"ticket<T>",archetype:"ticket",michelson:"ticket",ts:"Ticket"},{link:"tuple",archetype:"tuple",michelson:"pair",ts:"Array",native:!0},{link:"unit",archetype:"unit",michelson:"unit",ts:"Unit"}],l="/docs/tests/apis/experiment#",i=[{label:"set_mockup_now",link:l+"set_mockup_nowd",desc:n.createElement("div",null,"Sets mockup now value.")},{label:"delay_mockup_now_by_day",link:l+"delay_mockup_now_by_dayv",desc:n.createElement("div",null,"Delays mockup now value by a number of days.")},{label:"delay_mockup_now_by_minute",link:l+"delay_mockup_now_by_minutev",desc:n.createElement("div",null,"Delays mockup now by a number of minutes.")},{label:"delay_mockup_now_by_hour",link:l+"delay_mockup_now_by_hourv",desc:n.createElement("div",null,"Delays mockup now by a number of hours.")},{label:"delay_mockup_now_by_second",link:l+"delay_mockup_now_by_secondv",desc:n.createElement("div",null,"Delays mockup now by a number of seconds.")},{label:"delay_mockup_now_by_week",link:l+"delay_mockup_now_by_weekv",desc:n.createElement("div",null,"Delays mockup now by a number of weeks.")},{label:"get_mockup_now",link:l+"get_mockup_now",desc:n.createElement("div",null,"Gets mockup now value.")}],s=[{label:"blake2b",link:l+"blake2bb",desc:n.createElement("div",null,"Hashes bytes data accourding to blake2b algorithm.")},{label:"sign",link:l+"signb-a",desc:n.createElement("div",null,"Signs packed data.")},{label:"pack",link:l+"packo-t",desc:n.createElement("div",null,"Packs bytes data.")},{label:"transfer",link:l+"transferf-t-a",desc:n.createElement("div",null,"Transfers tez from one account to another.")}],o="/docs/tests/apis/types#",p=[{label:"date_cmp",link:o+"cmp_datea-b",desc:n.createElement("div",null,"Compares javascript dates at second precision (as Tezos dates are).")},{label:"is_left",link:o+"is_leftv",desc:n.createElement("div",null,"Tests whether a Micheline ",n.createElement("code",null,"or")," value is ",n.createElement("code",null,"left"),".")},{label:"is_right",link:o+"is_rightv",desc:n.createElement("div",null,"Tests whether a Micheline ",n.createElement("code",null,"or")," value is ",n.createElement("code",null,"right"),".")}]},2156:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(1519),l=a(4810),i=a(2321);function s(){return n.createElement(l.Z,{injectFirst:!0},n.createElement(r.Z,{className:i.Z.divider}))}},7992:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>v,frontMatter:()=>h,metadata:()=>g,toc:()=>y});var n=a(7462),r=a(7294),l=a(3905),i=a(5861),s=a(6886),o=a(9960),p=a(2156);const c=()=>r.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Not Available");function m(e){return r.createElement(s.ZP,{container:!0},r.createElement(s.ZP,{container:!0,item:!0,xs:12,style:{marginBottom:"32px"}},r.createElement(s.ZP,{item:!0,md:4,xs:12,sm:12},r.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Archetype")),r.createElement(s.ZP,{item:!0,md:4,xs:12,sm:12},r.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Michelson")),r.createElement(s.ZP,{item:!0,md:4,xs:12,sm:12},r.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Typescript"))),e.data.map(((t,a)=>r.createElement(r.Fragment,null,r.createElement(s.ZP,{item:!0,md:4,xs:12,sm:12},r.createElement(o.Z,{to:"/docs/reference/types/#"+t.link},r.createElement("code",null,t.archetype))),r.createElement(s.ZP,{item:!0,md:4,xs:12,sm:12},t.michelson?r.createElement("code",null,t.michelson):r.createElement(c,null)),r.createElement(s.ZP,{item:!0,md:4,xs:12,sm:12},t.ts?t.native?r.createElement("code",null,t.ts):r.createElement(o.Z,{to:"/docs/tests/apis/types/#"+t.ts.toLowerCase()},r.createElement("code",null,t.ts)):r.createElement(c,null)),a<e.data.length-1?r.createElement(s.ZP,{item:!0,xs:12,style:{marginBottom:"6px",marginTop:"6px"}},r.createElement(p.Z,null)):r.createElement("div",null)))))}var d=a(6719);const h={sidebar_position:4,sidebar_label:"Binding"},u="Binding",g={unversionedId:"tests/binding",id:"tests/binding",title:"Binding",description:"This section presents the API of the automatically generated contract binding.",source:"@site/docs/tests/binding.md",sourceDirName:"tests",slug:"/tests/binding",permalink:"/docs/tests/binding",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/tests/binding.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Binding"},sidebar:"tests",previous:{title:"Writing Tests",permalink:"/docs/tests/writingtests"},next:{title:"APIs",permalink:"/docs/tests/apis/"}},k={},y=[{value:"Deploy",id:"deploy",level:2},{value:"Storage getters",id:"storage-getters",level:2},{value:"Big Map",id:"big-map",level:3},{value:"Entry points",id:"entry-points",level:2},{value:"Getters",id:"getters",level:3},{value:"Entry points&#39; parameters",id:"entry-points-parameters",level:2},{value:"Views",id:"views",level:2},{value:"Errors",id:"errors",level:2},{value:"Events",id:"events",level:2},{value:"Type bindings",id:"type-bindings",level:2},{value:"Tuple",id:"tuple",level:3},{value:"Map",id:"map",level:3},{value:"Record",id:"record",level:3},{value:"Asset",id:"asset",level:3},{value:"Enum",id:"enum",level:3},{value:"Lambda",id:"lambda",level:3}],f={toc:y};function v(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"binding"},"Binding"),(0,l.kt)("p",null,"This section presents the API of the automatically generated ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/framework#contract-binding"},"contract binding"),"."),(0,l.kt)("p",null,"The Completium CLI command to generate a contract binding from the contract ",(0,l.kt)("inlineCode",{parentName:"p"},"contract.tz")," is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli generate binding-ts contract.tz\n")),(0,l.kt)("p",null,"When using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/writingtests#create-project"},(0,l.kt)("inlineCode",{parentName:"a"},"create project"))," command, binding generation is done with the following command (see ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/writingtests#generate-binding"},"here")," for more information):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-completium"},"npm run gen-binding\n")),(0,l.kt)("h2",{id:"deploy"},"Deploy"),(0,l.kt)("p",null,"The binding class provides the ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," method to create a new instance of the contract on the configured network (see ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/framework#michelson-execution"},"here")," for network configuration)."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," method takes as many arguments as the number of ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/declarations/contract#parameters"},"contract parameters"),", plus a ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/apis/types#parameters"},(0,l.kt)("inlineCode",{parentName:"a"},"Parameters"))," object to set the originator account and optionally the initial value of contract ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/expressions/constants#balance"},"balance"),"."),(0,l.kt)("p",null,"For example, consider the following contract :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},'archetype example(owner : address)\n\nvariable s : string = "Hello binding"\n\nentry set(v : string) { s := v }\n')),(0,l.kt)("p",null,"The following example illustrates how to deploy it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { example } from `./binding/example.ts`\n\nconst alice = get_account('alice')\n\nawait example.deploy(alice.get_address(), { as : alice })\n// display newly deployed contract:\nconsole.log(await example.get_address())\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The method is named ",(0,l.kt)("inlineCode",{parentName:"p"},"originate")," when binding is generated from a Michelson contract.")),(0,l.kt)("h2",{id:"storage-getters"},"Storage getters"),(0,l.kt)("p",null,"A getter method is generated for each storage element. Its name is made of prefix ",(0,l.kt)("inlineCode",{parentName:"p"},"get_")," followed by the storage element name. It does not take any argument, and the method is asynchronous (must be called with ",(0,l.kt)("inlineCode",{parentName:"p"},"await")," keyword)."),(0,l.kt)("p",null,"It returns the storage value. Its type is the type mapped from the Archetype (or Michelson) one as presented in this ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/binding#simple-types"},"table"),"."),(0,l.kt)("p",null,"For example, consider the following elementary Michelson contract ",(0,l.kt)("inlineCode",{parentName:"p"},"example.tz")," whose storage is made of a string value ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," and a nat value ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  storage (pair (string %s) (nat %n));\n  parameter unit;\n  code { CDR;\n         NIL operation;\n         PAIR };\n}\n")),(0,l.kt)("p",null,"The generated contract binding class in ",(0,l.kt)("inlineCode",{parentName:"p"},"example.ts")," provides with two getter methods ",(0,l.kt)("inlineCode",{parentName:"p"},"get_s")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"get_n"),". They are used for example as follow:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { example } from `./binding/example.ts`\n\n// ... deploy contract\n\n// read storage\nconst s = await example.get_s() // s is typed string\nconst n = await example.get_n() // n is typed Nat\n")),(0,l.kt)("h3",{id:"big-map"},"Big Map"),(0,l.kt)("p",null,"Big map storage elements (either ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/types#big_map%3CK,%20V%3E"},(0,l.kt)("inlineCode",{parentName:"a"},"big_map")),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/types#iterable_big_map%3CK,%20V%3E"},(0,l.kt)("inlineCode",{parentName:"a"},"iterable_big_map"))," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/declarations/storage#big-map"},(0,l.kt)("inlineCode",{parentName:"a"},"asset to big_map")),") are an exception to the rule above. For each big map storage element, two functions are generated:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a function that checks whether a big map has a given key value. It name is ",(0,l.kt)("inlineCode",{parentName:"li"},"has_")," followed by the storage element name and ",(0,l.kt)("inlineCode",{parentName:"li"},"_value"),". Its argument is the key value. It returns a boolean value."),(0,l.kt)("li",{parentName:"ul"},"a function that retrieves the value associated to a key. It name is ",(0,l.kt)("inlineCode",{parentName:"li"},"get_")," followed by the storage element name and ",(0,l.kt)("inlineCode",{parentName:"li"},"_value"),". Its argument is the key value. It returns the value associated to the key, or ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," if not found.")),(0,l.kt)("p",null,"For example, consider the following ",(0,l.kt)("inlineCode",{parentName:"p"},"loan")," asset declaration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"asset loan identified by id to big_map {\n  id         : string;\n  subscriber : address;\n  principal  : tez;\n  interest   : rational = 2%;\n  creation   : date     = now;\n}\n")),(0,l.kt)("p",null,"The following two functions are generated:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"async has_loan_value(key: string): Promise<boolean>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"async get_loan_value(key: string): Promise<loan_value | undefined>"))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"loan_value")," corresponds to the ",(0,l.kt)("inlineCode",{parentName:"p"},"asset_value<loan>")," archetype type. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/binding#asset"},"below")," for more information."),(0,l.kt)("h2",{id:"entry-points"},"Entry points"),(0,l.kt)("p",null,"An asynchronous call method is generated for each entry point. Its name is the same as the contract's. It takes the same arguments as the contract's, plus a ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/apis/types#parameters"},(0,l.kt)("inlineCode",{parentName:"a"},"Parameters"))," object to set the caller account and optionally the amount of tez sent. It returns a ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/apis/types#callresult"},(0,l.kt)("inlineCode",{parentName:"a"},"CallResult"))," value."),(0,l.kt)("p",null,"For example, consider the following contract:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},'archetype example(owner : address)\n\nvariable s : string = "Hello binding"\n\nentry set(v : string) { s := v }\n')),(0,l.kt)("p",null,"The code below illustrates how to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," entry point:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { example } from `./binding/example.ts`\n\n// ... deploy ...\n\nawait example.set("Hello Documentation!", { as : alice })\n')),(0,l.kt)("h3",{id:"getters"},"Getters"),(0,l.kt)("p",null,"A special treatment is operated for ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint#getter"},"getter")," entry points. The difference with the call to entry point described above is the return value: it returns the callback value returned by the getter."),(0,l.kt)("p",null,"For example, consider the following getter entry point:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"archetype example\n\ngetter getBar(s : string) : nat {\n  return length(s)\n}\n")),(0,l.kt)("p",null,"The following code calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"getBar")," entry point:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const l = await example.getBar("Hello getter", { as : alice })\nassert(l.equals(new Nat(12)))\n')),(0,l.kt)("h2",{id:"entry-points-parameters"},"Entry points' parameters"),(0,l.kt)("p",null,"An asynchronous method is generated for each entry point to get the transaction parameter corresponding to the call to the entry point. Its name is made of the prefix ",(0,l.kt)("inlineCode",{parentName:"p"},"get_"),", followed by the entry point name and suffixed by ",(0,l.kt)("inlineCode",{parentName:"p"},"_param"),". It takes the same arguments as the contract's entry point."),(0,l.kt)("p",null,"The transaction parameter is then used as an argument of ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/apis/experiment#exec_batchcps-p"},(0,l.kt)("inlineCode",{parentName:"a"},"exec_batch"))," for batch execution of several entry points."),(0,l.kt)("p",null,"With the same example as above, consider the following contract:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},'archetype example(owner : address)\n\nvariable s : string = "Hello!"\n\nentry set(v : string) { s := v }\n')),(0,l.kt)("p",null,"The code below illustrates how to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," entry point:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5,6}","{5,6}":!0},'import { example } from `./binding/example.ts`\n\nawait example.deploy({ as : alice })\n\nconst set_param1 = await example.get_set_param("Hello Documentation!", { as : alice })\nconst set_param2 = await example.get_set_param("Hello Binding!", { as : alice })\n// exec batch\nawait exec_batch([set_param1, set_param2], { as : alice })\n\nconst s = await example.get_s()\nassert(s == "Hello Binding!")\n')),(0,l.kt)("h2",{id:"views"},"Views"),(0,l.kt)("p",null,"An asynchronous method is generated for each contract's view. Its name is prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"view_"),", followed by the name of the view. It takes the same arguments as the contract's view, plus a ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/apis/types#parameters"},(0,l.kt)("inlineCode",{parentName:"a"},"Parameters"))," object to set the caller account and optionally the amount of tez sent."),(0,l.kt)("p",null,"It returns a promise of the view's returned value."),(0,l.kt)("p",null,"For example, consider the following contract:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},'archetype example(owner : address)\n\nvariable s : string = "Hello!"\n\nview get_s() { return s }\n')),(0,l.kt)("p",null,"The code below illustrates how to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_s")," view:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { example } from `./binding/example.ts`\n\nawait example.deploy({ as : alice })\n\nconst s = await example.view_get_s()\n\nassert(s == "Hello!")\n')),(0,l.kt)("h2",{id:"errors"},"Errors"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/apis/experiment#expect_to_failf-e"},(0,l.kt)("inlineCode",{parentName:"a"},"expect_to_fail"))," function is used to check that a call to a contract entry point fails as expected. Its second parameter is an error of ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/apis/types#micheline"},(0,l.kt)("inlineCode",{parentName:"a"},"Micheline"))," type."),(0,l.kt)("p",null,"Contract errors from ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint#sections"},"sections")," or issued by ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/instructions/divergent"},"divergent instructions"),", are generated in the binding object as the ",(0,l.kt)("inlineCode",{parentName:"p"},"errors")," field."),(0,l.kt)("p",null,"For example, consider the following contract:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},'archetype example\n\nvariable s : string = "Hello!"\n\nentry set(v : string) {\n  require {\n    r0 : length(v) < 10\n  }\n  effect { s := v }\n}\n')),(0,l.kt)("p",null,"The code below illustrates how to setup a test that is expected to fail with ",(0,l.kt)("inlineCode",{parentName:"p"},"r0")," requirement:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { example } from `./binding/example.ts`\nimport { expect_to_fail, get_account } from '@completium/experiment-ts'\n\nconst alice = get_account('alice')\n\nawait example.deploy({ as : alice })\n\nasync expect_to_fail(async () => {\n  await example.set(\"This is a too long message\", { as : alice })\n}, example.errors.r0)\n")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"A class and a register method are generated for each ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/declarations/compositetypes#event"},(0,l.kt)("inlineCode",{parentName:"a"},"event"))," declaration. The class name is the same as the event's name and it has the same fields."),(0,l.kt)("p",null,"The register method's is prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"register_")," followed by the event name. It takes one argument that is a callback function  called each time the event is emitted. It uses the ",(0,l.kt)("a",{parentName:"p",href:"/docs/dapps/project/packagesapi/#completiumevent-listener"},"event listener")," package. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/dapps/example/interaction#listening-to-events"},"here")," for an example."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The event listener is ",(0,l.kt)("strong",{parentName:"p"},"not")," available in ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/framework#michelson-execution"},"mockup mode"),". See below for more information about how to work with events in mockup mode.")),(0,l.kt)("p",null,"In mockup mode, events are available in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/apis/experiment#callresult"},(0,l.kt)("inlineCode",{parentName:"a"},"CallResult"))," object returned by the call to an entry point. The ",(0,l.kt)("inlineCode",{parentName:"p"},"events")," field is the list of events emitted by the call to the entry point."),(0,l.kt)("p",null,"For example, consider the following entry point:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},'archetype example\n\nevent HelloEvent {\n  msg : string\n}\n\nentry exec() {\n  emit<HelloEvent>({ "Hello from exec!" })\n}\n')),(0,l.kt)("p",null,"The following code illustrates how to test the event emission:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'//...\nconst ref_event = new HelloEvent("Hello from exec!")\nconst res = await example.exec({as : alice});\nassert(res.events.length == 1)\nconst res_event = HelloEvent.from_mich(res.events[0].payload);\nassert(res_event.equals(ref_event))\n')),(0,l.kt)("h2",{id:"type-bindings"},"Type bindings"),(0,l.kt)("p",null,"This section presents how Archetype/Michelson types are bound to Typescript types."),(0,l.kt)(m,{data:d.RP,mdxType:"TypeMap"}),(0,l.kt)("h3",{id:"tuple"},"Tuple"),(0,l.kt)("p",null,"An Archetype ",(0,l.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#tuple"},"tuple")," (or a Michelson pair) is mapped to a Typescript tuple."),(0,l.kt)("p",null,"For example, consider the following tuple value in Archetype:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},'const t : (nat * string) = (0, "a string");\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"t")," value is then mapped to the following TS value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const t : [ Nat, string ] = [ 0, new Nat("a string") ]\n')),(0,l.kt)("h3",{id:"map"},"Map"),(0,l.kt)("p",null,"An Archetype (Michleson) map is translated in Typescript as an ",(0,l.kt)("em",{parentName:"p"},"array of pairs"),". It cannot be straightforwaldy associated to a Typescript ",(0,l.kt)("inlineCode",{parentName:"p"},"Map")," as the ",(0,l.kt)("inlineCode",{parentName:"p"},"Map"),"'s key type is limited to native type with natural order (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),")."),(0,l.kt)("p",null,"For example, consider the following Archetype map:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"variable ledger : map<address, int> = []\n")),(0,l.kt)("p",null,"It is translated to Typescript as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const ledger : Array<[ Address, Int ]> = []\n")),(0,l.kt)("p",null,"The following code is to retrieve the value in third position:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const v = ledger[2][1]\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The lookup function to retrieve a value from a key is not provided.")),(0,l.kt)("h3",{id:"record"},"Record"),(0,l.kt)("p",null,"A class is generated for each ",(0,l.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#record"},(0,l.kt)("inlineCode",{parentName:"a"},"record"))," declaration found in the Archetype contract. Its name is the same as the declaration's. A public class member is created for each record field, with the same name and a type mapped from the table above. The class constructor has one argument per record field, in the order of record declaration."),(0,l.kt)("p",null,"For example, consider the following record declaration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"record person {\n  first : string;\n  last  : string;\n  age : nat;\n}\n")),(0,l.kt)("p",null,"Then a new person class is constructed with the code below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const albert = new person("Albert", "Michelson", new Nat(170))\n')),(0,l.kt)("p",null,"Fields may then be accessed like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(`Hello ${albert.first} ${albert.last}`) // "Hello Albert Michelson"\n')),(0,l.kt)("h3",{id:"asset"},"Asset"),(0,l.kt)("p",null,"An ",(0,l.kt)("a",{parentName:"p",href:"/docs/asset"},"asset")," collection is translated to an ",(0,l.kt)("em",{parentName:"p"},"array of pairs")," of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/types#asset_key%3CA%3E"},"asset key")," and the ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/types#asset_value%3CA%3E"},"asset value"),". The asset value is translated to a class, in the same way as a ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/binding#record"},"record"),". Its name is the name of the asset suffixed by ",(0,l.kt)("inlineCode",{parentName:"p"},"_value"),"."),(0,l.kt)("p",null,"For example, consider the following asset:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"asset loan identified by id {\n  id         : string;\n  subscriber : address;\n  principal  : tez;\n  interest   : rational = 2%;\n  creation   : date     = now;\n}\n")),(0,l.kt)("p",null,"The typescript type for the asset collection is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Array<[ string, loan_value ]>\n")),(0,l.kt)("p",null,"The constructor of ",(0,l.kt)("inlineCode",{parentName:"p"},"loan_value")," takes the same fields as the ",(0,l.kt)("inlineCode",{parentName:"p"},"loan")," asset value. The code below illustrates how to create an instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"loan_value"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const lv = new loan_value(\n  alice.get_address(),\n  new Tez(10),\n  new Rational("3.14"),\n  new Date()\n)\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The lookup function to retrieve an asset value from a key is not provided.")),(0,l.kt)("h3",{id:"enum"},"Enum"),(0,l.kt)("p",null,"A class is generated for each ",(0,l.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#enum"},(0,l.kt)("inlineCode",{parentName:"a"},"enum"))," declaration. Its name is the same as the declaration's. This class inherits from the abstract ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/apis/types#enum"},(0,l.kt)("inlineCode",{parentName:"a"},"Enum"))," class. A class extend the enum class is generated for each enum's named label. The named label class's constructor has the same arguments as the declaration's."),(0,l.kt)("p",null,"For example, consider the following enum declaration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"enum float =\n| Pos<nat * nat>\n| Neg<nat * nat>\n| Zero\n")),(0,l.kt)("p",null,"Then the following classes are generated:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"float")," class that extends ",(0,l.kt)("a",{parentName:"li",href:"/docs/tests/apis/types#enum"},(0,l.kt)("inlineCode",{parentName:"a"},"Enum"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Pos")," class that ",(0,l.kt)("em",{parentName:"li"},"extends")," ",(0,l.kt)("inlineCode",{parentName:"li"},"float")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Neg")," class that ",(0,l.kt)("em",{parentName:"li"},"extends")," ",(0,l.kt)("inlineCode",{parentName:"li"},"float")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Zero")," class that ",(0,l.kt)("em",{parentName:"li"},"extends")," ",(0,l.kt)("inlineCode",{parentName:"li"},"float"))),(0,l.kt)("p",null,"It may be used as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const p : sign = new Pos(new Nat(3), new Nat(5))\nconst n : sign = new Neg(new Nat(6), new Nat(3))\nconst z : sign = new Zero()\n")),(0,l.kt)("h3",{id:"lambda"},"Lambda"),(0,l.kt)("p",null,"There is no dedicated type to lambda values. The default lower-level type ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/apis/types#micheline"},(0,l.kt)("inlineCode",{parentName:"a"},"Micheline"))," is then used."),(0,l.kt)("p",null,"The code below, extracted from the ",(0,l.kt)("a",{parentName:"p",href:"/docs/templates/multisig"},"Multisig")," contract, illustrates the creation of a lambda as a JSON Micheline value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const getCode = (\n  dest: Address,\n  entrypoint: string,\n  typ: string,\n  value: string): Micheline => {\n  const input = `{\n      DROP;\n      NIL operation;\n      PUSH address "${dest.toString()}";\n      CONTRACT %${entrypoint} ${typ};\n      IF_NONE\n        { PUSH string "EntryNotFound";\n          FAILWITH }\n        {  };\n      PUSH mutez 0;\n      PUSH ${typ} ${value};\n      TRANSFER_TOKENS;\n      CONS;\n    }`;\n  return expr_micheline_to_json(input)\n}\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/docs/tests/apis/experiment#expr_micheline_to_jsoni"},(0,l.kt)("inlineCode",{parentName:"a"},"expr_micheline_to_json"))," function is used to convert a string to a Micheline value."))}v.isMDXComponent=!0},2321:(e,t,a)=>{a.d(t,{Z:()=>n});const n={divider:"divider_LuCZ",gradient:"gradient_kJ7D"}}}]);