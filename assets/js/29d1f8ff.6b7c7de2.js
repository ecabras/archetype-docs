"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[2283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||p;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const p={sidebar_position:5,sidebar_label:"App.tsx"},o="App.tsx",c={unversionedId:"dapps/project/app",id:"dapps/project/app",title:"App.tsx",description:"The App.tsx file contains the root component of the application App (it comes with the default react template project).",source:"@site/docs/dapps/project/app.md",sourceDirName:"dapps/project",slug:"/dapps/project/app",permalink:"/docs/dapps/project/app",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/dapps/project/app.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"App.tsx"},sidebar:"dapps",previous:{title:"Contract.tsx",permalink:"/docs/dapps/project/contract"},next:{title:"Packages API",permalink:"/docs/dapps/project/packagesapi/"}},i={},s=[],l={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"apptsx"},"App.tsx"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 App.tsx\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," file contains the root component of the application ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," (it comes with the default react template project)."),(0,a.kt)("p",null,"The role of this component is to wrap the main panel component ",(0,a.kt)("inlineCode",{parentName:"p"},"<MainPanel />")," with ",(0,a.kt)("a",{parentName:"p",href:"/docs/dapps/project/#store"},"constate")," context providers. It should at least be wrapped with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/dapps/project/settings"},(0,a.kt)("inlineCode",{parentName:"a"},"Settings")),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/dapps/project/taquito"},(0,a.kt)("inlineCode",{parentName:"a"},"Taquito")),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/dapps/project/beacon"},(0,a.kt)("inlineCode",{parentName:"a"},"Beacon"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/dapps/project/contract"},(0,a.kt)("inlineCode",{parentName:"a"},"Contract"))," contexts, as illustrated below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n  return (\n    <div className="App">\n      <CssBaseline />\n      <SettingsProvider>\n        <TaquitoProvider>\n          <BeaconProvider>\n            <ContractProvider>\n              <MainPanel />\n            </ContractProvider>\n          </BeaconProvider>\n        </TaquitoProvider>\n      </SettingsProvider>\n    </div>\n  );\n}\n')))}d.isMDXComponent=!0}}]);