"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[3604],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},313:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:6},i="Function",c={unversionedId:"reference/declarations/function",id:"reference/declarations/function",title:"Function",description:"Entrypoints' effect may call functions. A function returns a value, may fail, but cannot change the contract storage.",source:"@site/docs/reference/declarations/function.md",sourceDirName:"reference/declarations",slug:"/reference/declarations/function",permalink:"/docs/reference/declarations/function",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/reference/declarations/function.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Entrypoint",permalink:"/docs/reference/declarations/entrypoint"},next:{title:"View",permalink:"/docs/reference/declarations/view"}},l={},s=[{value:"<code>return</code>",id:"return",level:2},{value:"Function as instruction",id:"function-as-instruction",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"function"},"Function"),(0,a.kt)("p",null,"Entrypoints' effect may call functions. A function returns a value, may fail, but cannot change the contract storage."),(0,a.kt)("p",null,"A function is declared with the ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," keyword followed by a unique ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/declarations/identifier"},"identifier"),"."),(0,a.kt)("h2",{id:"return"},(0,a.kt)("inlineCode",{parentName:"h2"},"return")),(0,a.kt)("p",null,"A function may return a value; it then uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," keyword. The return type is specified after the function arguments declaration, followed by ",(0,a.kt)("inlineCode",{parentName:"p"},":"),"."),(0,a.kt)("p",null,"For example, the following function implements the Horner's formula of the exponential function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype"},"function exp(x : rational, steps : nat) : rational {\n  var r : rational = 1 + x / steps;\n  iter i to steps - 1 do\n      r := 1 + x * r / (steps - i)\n  done;\n  return r\n}\n")),(0,a.kt)("p",null,"When the function does not change the storage, it is compiled as a ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/types#lambda"},"lambda")," expression on the stack. When the function ",(0,a.kt)("em",{parentName:"p"},"does")," change the storage, it is inlined."),(0,a.kt)("h2",{id:"function-as-instruction"},"Function as instruction"),(0,a.kt)("p",null,"The return value, and the return type declaration, are optional. In that case, the function is considered as an instruction. For example, the function ",(0,a.kt)("inlineCode",{parentName:"p"},"set_res")," below simply assigns a value to a storage variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype"},"archetype example\n\nvariable res : nat = 0\n\nfunction set_res(v : nat) {\n  res := v\n}\n\nentry exec() {\n  set_res(42)\n}\n")),(0,a.kt)("p",null,"Such functions are inlined, even if they do not change the contract's storage."))}p.isMDXComponent=!0}}]);