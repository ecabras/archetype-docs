"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[9838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,sidebar_label:"Settings.tsx"},s="Settings.tsx",p={unversionedId:"dapps/project/settings",id:"dapps/project/settings",title:"Settings.tsx",description:"The Settings context provides components (and other contexts) with access to the main blockchain settings required by Taquito and Beacon:",source:"@site/docs/dapps/project/settings.md",sourceDirName:"dapps/project",slug:"/dapps/project/settings",permalink:"/docs/dapps/project/settings",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/dapps/project/settings.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Settings.tsx"},sidebar:"dapps",previous:{title:"DApp UI",permalink:"/docs/dapps/project/"},next:{title:"Taquito.tsx",permalink:"/docs/dapps/project/taquito"}},i={},c=[{value:"Code",id:"code",level:2},{value:"Usage",id:"usage",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"settingstsx"},"Settings.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 contexts\n        \u251c\u2500\u2500 Settings.tsx\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," context provides components (and other contexts) with access to the main blockchain settings required by Taquito and Beacon:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"endpoint")," URL used by Taquito's constructor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"network")," type used by beacon constructor")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { NetworkType } from \"@airgap/beacon-sdk\";\nimport constate from \"constate\";\nimport { useState } from 'react';\n\nexport const [\n  SettingsProvider,\n  useAppName,\n  useEndpoint,\n  useNetwork,\n  useContractAddress\n] = constate(\n  () => {\n    const [settingState] = useState({\n      app_name        : 'My DApp',\n      endpoint        : 'https://ghostnet.ecadinfra.com',\n      network         :  NetworkType.GHOSTNET,\n      contract        : 'KT1...',\n    });\n    return settingState;\n  },\n  v => v.app_name,\n  v => v.endpoint,\n  v => v.network,\n  v => v.contract\n);\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"When a component needs a settings, it imports the hook and calls it to retrieve the value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useAppName, useEndpoint, useNetwork } from '../store/Settings'\n\nconst network = useNetwork()\nconst endpoint = useEndpoint()\nconst name = useAppName()\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/dapps/project/beacon"},"Beacon.tsx")," constate hook for an example."))}u.isMDXComponent=!0}}]);