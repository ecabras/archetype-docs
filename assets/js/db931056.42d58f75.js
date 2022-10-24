"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[9356],{1519:function(e,t,a){a.d(t,{Z:function(){return P}});var r=a(3366),n=a(7462),l=a(7294),i=a(6010),o=a(7192),s=a(1796),d=a(2110),p=a(1539),c=a(8979);function m(e){return(0,c.Z)("MuiDivider",e)}(0,a(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var u=a(5893);const h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),v=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})));var P=l.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiDivider"}),{absolute:l=!1,children:s,className:d,component:c=(s?"div":"hr"),flexItem:P=!1,light:k=!1,orientation:b="horizontal",role:f=("hr"!==c?"separator":void 0),textAlign:y="center",variant:_="fullWidth"}=a,x=(0,r.Z)(a,h),w=(0,n.Z)({},a,{absolute:l,component:c,flexItem:P,light:k,orientation:b,role:f,textAlign:y,variant:_}),A=(e=>{const{absolute:t,children:a,classes:r,flexItem:n,light:l,orientation:i,textAlign:s,variant:d}=e,p={root:["root",t&&"absolute",d,l&&"light","vertical"===i&&"vertical",n&&"flexItem",a&&"withChildren",a&&"vertical"===i&&"withChildrenVertical","right"===s&&"vertical"!==i&&"textAlignRight","left"===s&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,o.Z)(p,m,r)})(w);return(0,u.jsx)(g,(0,n.Z)({as:c,className:(0,i.Z)(A.root,d),role:f,ref:t,ownerState:w},x,{children:s?(0,u.jsx)(v,{className:A.wrapper,ownerState:w,children:s}):null}))}))},5861:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(3366),n=a(7462),l=a(7294),i=a(6010),o=a(9707),s=a(7192),d=a(2110),p=a(1539),c=a(8216),m=a(8979);function u(e){return(0,m.Z)("MuiTypography",e)}(0,a(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=a(5893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,c.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),P={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var b=l.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiTypography"}),l=(e=>k[e]||e)(a.color),d=(0,o.Z)((0,n.Z)({},a,{color:l})),{align:m="inherit",className:b,component:f,gutterBottom:y=!1,noWrap:_=!1,paragraph:x=!1,variant:w="body1",variantMapping:A=P}=d,Z=(0,r.Z)(d,g),C=(0,n.Z)({},d,{align:m,color:l,className:b,component:f,gutterBottom:y,noWrap:_,paragraph:x,variant:w,variantMapping:A}),N=f||(x?"p":A[w]||P[w])||"span",T=(e=>{const{align:t,gutterBottom:a,noWrap:r,paragraph:n,variant:l,classes:i}=e,o={root:["root",l,"inherit"!==e.align&&`align${(0,c.Z)(t)}`,a&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,s.Z)(o,u,i)})(C);return(0,h.jsx)(v,(0,n.Z)({as:N,ref:t,ownerState:C,className:(0,i.Z)(T.root,b)},Z))}))},8216:function(e,t,a){var r=a(601);t.Z=r.Z},4810:function(e,t,a){a.d(t,{Z:function(){return o}});a(7294);var r=a(4880),n=a(8357),l=a(5893);const i=(0,n.Z)({key:"css",prepend:!0});function o(e){const{injectFirst:t,children:a}=e;return t?(0,l.jsx)(r.C,{value:i,children:a}):a}},6457:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(9960),l=a(6886),i=a(1519),o=a(5861),s=a(4810),d=a(2321),p=function(e){return r.createElement(l.ZP,{item:!0,container:!0,xs:12},1==e.divider?r.createElement(l.ZP,{item:!0,xs:12},r.createElement(i.Z,{className:d.Z.divider,style:{marginBottom:"8px",marginTop:"4px"}})):r.createElement("div",null),r.createElement(l.ZP,{item:!0,xs:12,sm:e.xs,md:e.xs,style:{paddingLeft:"8px"}},null==e.data.link?r.createElement("code",null,e.data.label):r.createElement(n.Z,{to:e.data.link},r.createElement("code",null,e.data.label))),r.createElement(l.ZP,{item:!0,xs:12,sm:12-e.xs,md:12-e.xs,style:{paddingLeft:"8px",marginBottom:"8px"}},r.createElement(o.Z,{style:{fontFamily:"IBM Plex Sans"}},e.data.desc)))};function c(e){var t=null==e.xs?3:e.xs;return r.createElement(s.Z,{injectFirst:!0},r.createElement(l.ZP,{container:!0},r.createElement(l.ZP,{item:!0,style:{paddingLeft:"8px"}},r.createElement(o.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},e.title)),e.data.map((function(a,n){return r.createElement(p,{divider:n>0||0==n&&e.title.length>0,data:a,xs:t})}))))}},1404:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=a(6457),o=["components"],s={sidebar_position:3,sidebar_label:"APIs"},d="APIs",p={unversionedId:"dapps/example/apis",id:"dapps/example/apis",title:"APIs",description:"Store",source:"@site/docs/dapps/example/apis.md",sourceDirName:"dapps/example",slug:"/dapps/example/apis",permalink:"/docs/dapps/example/apis",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/dapps/example/apis.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"APIs"},sidebar:"dapps",previous:{title:"Contract Integration",permalink:"/docs/dapps/example/interaction"}},c={},m=[{value:"Store",id:"store",level:2},{value:"UI hierarchy",id:"ui-hierarchy",level:2},{value:"Contract&#39;s binding",id:"contracts-binding",level:2}],u={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"apis"},"APIs"),(0,l.kt)("h2",{id:"store"},"Store"),(0,l.kt)(i.Z,{title:"Settings.tsx",data:[{label:"useTheme",desc:(0,l.kt)("div",null,"Theme mode (",(0,l.kt)("code",null,"Light")," or ",(0,l.kt)("code",null,"Dark"),")")},{label:"useEndpoint",desc:"Tezos endpoint URL"},{label:"usePollAddress",desc:(0,l.kt)("div",null,"Poll contract address (",(0,l.kt)("code",null,"KT1..."),")")},{label:"useNetwork",desc:(0,l.kt)("div",null,"Network (for ex. ",(0,l.kt)("code",null,"Ghostnet"),") for Beacon to use")},{label:"useIPFSBrowser",desc:"IPFS endpoint URL"},{label:"useGitRepo",desc:"Code repository URL"},{label:"useSetTheme",desc:(0,l.kt)("div",null,"Theme setter")}],mdxType:"Api"}),(0,l.kt)("br",null),(0,l.kt)(i.Z,{title:"Taquito.tsx",data:[{label:"useTezosToolkit",desc:(0,l.kt)("div",null,"Taquito's Tezos Toolkit")}],mdxType:"Api"}),(0,l.kt)("br",null),(0,l.kt)(i.Z,{title:"Beacon.tsx",data:[{label:"useWalletAddress",desc:(0,l.kt)("div",null,"Wallet address (or ",(0,l.kt)("code",null,"undefined")," if not logged in)")},{label:"useWalletName",desc:(0,l.kt)("div",null,"Wallet name (or ",(0,l.kt)("code",null,"undefined")," if not logged in)")},{label:"useIsConnected",desc:(0,l.kt)("div",null,"Function that returns ",(0,l.kt)("code",null,"true")," if user is logged in, ",(0,l.kt)("code",null,"false")," otherwise")},{label:"useConnect",desc:(0,l.kt)("div",null,"Beacon's connect service")},{label:"useDisconnect",desc:(0,l.kt)("div",null,"Beacon's disconnect service")}],mdxType:"Api"}),(0,l.kt)("br",null),(0,l.kt)(i.Z,{title:"PollContract.tsx",data:[{label:"usePollContract",desc:(0,l.kt)("div",null,"Returns contract binder")}],mdxType:"Api"}),(0,l.kt)("br",null),(0,l.kt)(i.Z,{title:"Polls.tsx",data:[{label:"usePolls",desc:(0,l.kt)("div",null,"List of polls")},{label:"useLoadData",desc:(0,l.kt)("div",null,"Function to fetch polls' data from contract")},{label:"useLoadResponses",desc:(0,l.kt)("div",null,"Function to fetch polls' responses from contract via the ",(0,l.kt)("code",null,"get_responses")," view")}],mdxType:"Api"}),(0,l.kt)("br",null),(0,l.kt)(i.Z,{title:"AppState.tsx",data:[{label:"useAppPanel",desc:(0,l.kt)("div",null,"Panel currently displayed (",(0,l.kt)("code",null,"PICK"),", ",(0,l.kt)("code",null,"RESPOND")," or ",(0,l.kt)("code",null,"ADD"),")")},{label:"useAppPoll",desc:(0,l.kt)("div",null,"Poll id currently displayed (when panel is ",(0,l.kt)("code",null,"RESPOND"),"), or ",(0,l.kt)("code",null,"undefined"))},{label:"useSetAppPanel",desc:(0,l.kt)("div",null,"Function to set panel to display")},{label:"useSetAppPoll",desc:(0,l.kt)("div",null,"Function to set poll to display")}],mdxType:"Api"}),(0,l.kt)("br",null),(0,l.kt)(i.Z,{title:"Alerts.tsx",data:[{label:"useAlertOpen",desc:(0,l.kt)("div",null,"Alert state (open/close) otherwise")},{label:"useAlertMsg",desc:(0,l.kt)("div",null,"Alert message to display")},{label:"useAlertSetOpen",desc:(0,l.kt)("div",null,"Function to set alert state")},{label:"useAlertSetMsg",desc:(0,l.kt)("div",null,"Function to set alert message")}],mdxType:"Api"}),(0,l.kt)("br",null),(0,l.kt)(i.Z,{title:"Events.tsx",data:[{label:"useEvents",desc:(0,l.kt)("div",null,"List of events")},{label:"useNbNewEvents",desc:(0,l.kt)("div",null,"Number of new events")},{label:"useAddEvent",desc:(0,l.kt)("div",null,"Function to add a new event to the notification menu")},{label:"useClearEvents",desc:(0,l.kt)("div",null,"Function to remove all events")}],mdxType:"Api"}),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"ui-hierarchy"},"UI hierarchy"),(0,l.kt)("div",{style:{lineHeight:"20px",fontFamily:"Roboto Mono"}},(0,l.kt)("p",null,".",(0,l.kt)("br",null),"\n\u2514\u2500\u2500 App",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2514\u2500\u2500 DApp",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u251c\u2500\u2500 MainPanel",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u251c\u2500\u2500 AddPoll",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u251c\u2500\u2500 AddForm",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u2514\u2500\u2500 PollPreview",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u2502   ","\u2002","\u2002","    ","\u2002","\u2002","\u2002","\u2514\u2500\u2500 PollPanel",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u251c\u2500\u2500 PickPoll",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u2514\u2500\u2500 ","[PollCard]",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u2514\u2500\u2500 RespondPoll",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2502   ","\u2002","\u2002","    ","\u2002","\u2002","\u2002","\u2514\u2500\u2500 PollPanel",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2502   ","\u2002","\u2002","    ","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","    \u2514\u2500\u2500 ","[ChoicePanel]",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2514\u2500\u2500 TopBar",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","    ","\u2002","\u2002","\u2002","\u251c\u2500\u2500 EventNotifications",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","    ","\u2002","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u251c\u2500\u2500 ","[EventCard]",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","    ","\u2002","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u2514\u2500\u2500 NotificationMenu",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","    ","\u2002","\u2002","\u2002","\u251c\u2500\u2500 GitHubLink",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","    ","\u2002","\u2002","\u2002","\u251c\u2500\u2500 LoginButton",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","    ","\u2002","\u2002","\u2002","\u2502   ","\u2002","\u2002","\u2514\u2500\u2500 WalletInfo",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","    ","\u2002","\u2002","\u2002","\u251c\u2500\u2500 TezosIcon",(0,l.kt)("br",null),"\n","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","\u2002","    ","\u2002","\u2002","\u2002","\u2514\u2500\u2500 ThemeSwitch",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"contracts-binding"},"Contract's binding"),(0,l.kt)("p",null,"Interacting with the ",(0,l.kt)("a",{parentName:"p",href:"/docs/dapps/example/contract"},"poll contract")," is done via the generated bindings."),(0,l.kt)("p",null,"The following ",(0,l.kt)("a",{parentName:"p",href:"https://completium.com/docs/cli/"},"Completium CLI")," command generates the contract bindings:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"completium-cli generate ./poll_contract/contracts/poll.arl > ./src/binding/poll.ts\n")),(0,l.kt)("p",null,"The following mockup code presents the generated ",(0,l.kt)("inlineCode",{parentName:"p"},"Poll")," TypeScript API:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class Poll {\n  /*\n    Contract address is passed to the constructor\n  */\n  constructor Poll(address?: string | undefined): Poll\n  // utils\n  get_address(): Address\n  get_balance(): Promise<Tez>\n  /*\n    Entries from Ownership template\n  */\n  declare_ownership(candidate: Address, params: Partial<Parameters>): Promise<any>\n  claim_ownership(params: Partial<Parameters>): Promise<any>\n  /*\n    Entries from Pausable template\n  */\n  pause(params: Partial<Parameters>): Promise<any>\n  unpause(params: Partial<Parameters>): Promise<any>\n  /*\n    Entries from Metadata template\n  */\n  set_metadata(k: string, d: Option<Bytes>, params: Partial<Parameters>): Promise<any>\n  /*\n    Poll specific entries\n  */\n  add_poll(h: Bytes, params: Partial<Parameters>): Promise<any>\n  approve(h: Bytes, params: Partial<Parameters>): Promise<any>\n  disapprove(h: Bytes, params: Partial<Parameters>): Promise<any>\n  remove(pk: Nat, params: Partial<Parameters>): Promise<any>\n  respond(pk: Nat, choice_id: Nat, params: Partial<Parameters>): Promise<any>\n  /*\n    Entries' CallParameter makers for batch operations\n  */\n  get_declare_ownership_param(candidate: Address, params: Partial<Parameters>): Promise<CallParameter>\n  get_claim_ownership_param(params: Partial<Parameters>): Promise<CallParameter>\n  get_pause_param(params: Partial<Parameters>): Promise<CallParameter>\n  get_unpause_param(params: Partial<Parameters>): Promise<CallParameter>\n  get_set_metadata_param(k: string, d: Option<Bytes>, params: Partial<Parameters>): Promise<CallParameter>\n  get_add_poll_param(h: Bytes, params: Partial<Parameters>): Promise<CallParameter>\n  get_approve_param(h: Bytes, params: Partial<Parameters>): Promise<CallParameter>\n  get_disapprove_param(h: Bytes, params: Partial<Parameters>): Promise<CallParameter>\n  get_remove_param(pk: Nat, params: Partial<Parameters>): Promise<CallParameter>\n  get_respond_param(pk: Nat, choice_id: Nat, params: Partial<Parameters>): Promise<CallParameter>\n  /*\n    Views\n  */\n  view_get_responses(pk: Nat, params: Partial<Parameters>): Promise<Array<[ Nat, Nat ]>>\n  view_already_responded(pk: Nat, params: Partial<Parameters>): Promise<boolean>\n  /*\n    Storage elements getters\n  */\n  get_owner(): Promise<Address>\n  get_owner_candidate(): Promise<Option<Address>>\n  get_paused(): Promise<boolean>\n  get_polls_counter(): Promise<Nat>\n  get_poll(): Promise<poll_container>\n  get_poll_to_approve_value(key: poll_to_approve_key): Promise<poll_to_approve_value | undefined>\n  has_poll_to_approve_value(key: poll_to_approve_key): Promise<boolean>\n  get_responder_value(key: responder_key): Promise<responder_value | undefined>\n  has_responder_value(key: responder_key): Promise<boolean>\n  get_metadata_value(key: string): Promise<Bytes | undefined>\n  has_metadata_value(key: string): Promise<boolean>\n  register_Response(ep: el.EventProcessor<Response>): void\n  /*\n    Event register utils\n  */\n  register_NewPoll(ep: el.EventProcessor<NewPoll>): void\n  register_ApprovePoll(ep: el.EventProcessor<ApprovePoll>): void\n  /*\n    Errors\n  */\n  (property) Poll.errors: {\n    f1: Micheline;\n    r3: Micheline;\n    r2: Micheline;\n    INVALID_CALLER: Micheline;\n    POLL_NOT_FOUND: Micheline;\n    r1: Micheline;\n    md_r1: Micheline;\n    pausable_r2: Micheline;\n    pausable_r1: Micheline;\n    ownership_r1: Micheline;\n    CONTRACT_PAUSED: Micheline;\n  }\n}\n")))}h.isMDXComponent=!0},2321:function(e,t){t.Z={divider:"divider_LuCZ",gradient:"gradient_kJ7D"}}}]);