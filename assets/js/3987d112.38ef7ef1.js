"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[7830],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[u]="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7386:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:0,sidebar_label:"Introduction"},i="Introduction",s={unversionedId:"tests/introduction",id:"tests/introduction",title:"Introduction",description:"This section presents the test framework for Archetype contracts.",source:"@site/docs/tests/introduction.md",sourceDirName:"tests",slug:"/tests/introduction",permalink:"/docs/tests/introduction",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/tests/introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Introduction"},sidebar:"tests",next:{title:"Framework",permalink:"/docs/tests/framework"}},c={},l=[{value:"Definition",id:"definition",level:2},{value:"Limits",id:"limits",level:2}],p={toc:l};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This section presents the test framework for ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction"},"Archetype")," contracts."),(0,o.kt)("p",null,"\u26a1\ufe0f It supports all Archetype features, and also ",(0,o.kt)("u",null,"contracts written in Michelson"),"."),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"Testing a smart contract is a critical aspect of the ",(0,o.kt)("em",{parentName:"p"},"development")," process as it is the main way to ensure the ",(0,o.kt)("em",{parentName:"p"},"correctness")," of a smart contract, that is to ensure that the contract behaves as expected once deployed. The correctness of a smart contract is all the more critical that the contract deals with high value assets or critical protocol process, and that the blockchain execution is basically irreversible."),(0,o.kt)("p",null,"It consists in writing test programs that verifiy that the contract behaves as expected. The types of tests of special interest for smart contracts are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"unit tests, to verify single features"),(0,o.kt)("li",{parentName:"ul"},"integration tests, to verify that different units of feature work correctly when they are combined and integrated with each other (may typically involve other contracts)"),(0,o.kt)("li",{parentName:"ul"},"security tests, to verify that the implemented secure and resistant to hacking and other security threats")),(0,o.kt)("p",null,"The developement effort of a smart contract project is mainly spent in writing tests. Hence the choice of a technical framework for tests is as key as the smart contract language itself."),(0,o.kt)("h2",{id:"limits"},"Limits"),(0,o.kt)("p",null,"The garantee of correctness provided by the tests is limited to the cases they implement. Hence they ensure only ",(0,o.kt)("em",{parentName:"p"},"partial")," correctness. And that there is no systemic way to garantee that a critical case has not been forgotten."),(0,o.kt)("p",null,"Moreover, as any program, a test may also contain bugs. It is hence highly recommended to complement the testing approach by any of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"peer code review"),(0,o.kt)("li",{parentName:"ul"},"external code audit"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://completium.com/docs/verification"},"formal verification"))))}u.isMDXComponent=!0}}]);