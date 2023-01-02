"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[2680],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(h,a(a({ref:t},s),{},{components:n})):o.createElement(h,a({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8698:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=(n(9960),["components"]),l={sidebar_position:2,sidebar_label:"Network"},c="Network",p={unversionedId:"cli/network",id:"cli/network",title:"Network",description:"The Tezos blockchain provides serveral networks:",source:"@site/docs/cli/network.md",sourceDirName:"cli",slug:"/cli/network",permalink:"/docs/cli/network",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/cli/network.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Network"},sidebar:"cli",previous:{title:"Account",permalink:"/docs/cli/account"},next:{title:"Contract",permalink:"/docs/cli/contract"}},s={},m=[{value:"<code>show endpoint</code>",id:"show-endpoint",level:3},{value:"<code>switch endpoint</code>",id:"switch-endpoint",level:3},{value:"<code>add endpoint</code>",id:"add-endpoint",level:3},{value:"<code>set endpoint</code>",id:"set-endpoint",level:3},{value:"<code>remove endpoint</code>",id:"remove-endpoint",level:3},{value:"<code>mockup init</code>",id:"mockup-init",level:3}],d={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"network"},"Network"),(0,r.kt)("p",null,"The Tezos blockchain provides serveral networks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a main network which is the real operating network where ",(0,r.kt)("em",{parentName:"li"},"real")," cryptocurrency are exchanged"),(0,r.kt)("li",{parentName:"ul"},"several test networks:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"one in the same version (to test current network)"),(0,r.kt)("li",{parentName:"ul"},"one(s) in the future main net version(s) (to test/preprare future version of smart contracts)"),(0,r.kt)("li",{parentName:"ul"},"optionally several in older versions")))),(0,r.kt)("p",null,"Each version of the blockchain is given the name of a city whose first letter is the next one to the previous."),(0,r.kt)("p",null,"An endpoint is an entry node to the network. You interact with the blockchain through an endpoint. You need to specify the endpoint's URL when interacting with the blockchain."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"completium-cli")," offers a convenient network management system to register, show and switch networks."),(0,r.kt)("h3",{id:"show-endpoint"},(0,r.kt)("inlineCode",{parentName:"h3"},"show endpoint")),(0,r.kt)("p",null,"Display the endpoint completium is currently using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli show endpoint\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-completium"},"$ completium-cli show endpoint\nCurrent network: granada\nCurrent endpoint: https://testnet-tezos.giganode.io\n")),(0,r.kt)("h3",{id:"switch-endpoint"},(0,r.kt)("inlineCode",{parentName:"h3"},"switch endpoint")),(0,r.kt)("p",null,"Select the current endpoint from menu with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli switch endpoint\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"completium-cli")," comes with a set of pre-configured endpoints:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-completium"},"$ completium-cli switch endpoint\nCurrent network: ghost\nCurrent endpoint: https://ghostnet.ecadinfra.com\n? Switch endpoint \u2026\n\u276f main       https://mainnet.api.tez.ie\n  main       https://mainnet-tezos.giganode.io\n  main       https://rpc.tzbeta.net\n  ghost      https://ghostnet.ecadinfra.com\n...\n")),(0,r.kt)("p",null,"Use up/down arrows to select the required endpoint."),(0,r.kt)("h3",{id:"add-endpoint"},(0,r.kt)("inlineCode",{parentName:"h3"},"add endpoint")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli add endpoint (main|ghost|kathmandu) <ENDPOINT_URL>\n")),(0,r.kt)("h3",{id:"set-endpoint"},(0,r.kt)("inlineCode",{parentName:"h3"},"set endpoint")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli set endpoint <ENDPOINT_URL>\n")),(0,r.kt)("p",null,"The command fails if the endpoint is not registered (see ",(0,r.kt)("inlineCode",{parentName:"p"},"add endpoint")," above)."),(0,r.kt)("h3",{id:"remove-endpoint"},(0,r.kt)("inlineCode",{parentName:"h3"},"remove endpoint")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli remove endpoint <ENDPOINT_URL>\n")),(0,r.kt)("h3",{id:"mockup-init"},(0,r.kt)("inlineCode",{parentName:"h3"},"mockup init")),(0,r.kt)("p",null,"The mockup mode is used to ",(0,r.kt)("a",{parentName:"p",href:"/docs/tests/introduction"},"test smart contracts"),". It runs smart contracts locally without the need to interact with a network."),(0,r.kt)("p",null,"The following command initialises a new mockup (erases previous one) :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli mockup init\n")),(0,r.kt)("p",null,"This command makes all registered accounts available in the mockup mode and tansfers 1000 XTZ to each."),(0,r.kt)("p",null,"To turn mockup mode on, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli set endpoint mockup\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The mockup mode requires the Tezos client to be installed and executed with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"tezos-client"),". Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://assets.tqtezos.com/docs/setup/1-tezos-client/"},"this page")," for installation instructions."))))}u.isMDXComponent=!0}}]);