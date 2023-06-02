"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[9914],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={slug:"v143",title:"Version 1.4.3",authors:["br","gd"],tags:["version"]},l=void 0,o={permalink:"/blog/v143",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-06-02-v1.4.3.md",source:"@site/blog/2023-06-02-v1.4.3.md",title:"Version 1.4.3",description:"We present version 1.4.3 of Archetype language.",date:"2023-06-02T00:00:00.000Z",formattedDate:"June 2, 2023",tags:[{label:"version",permalink:"/blog/tags/version"}],readingTime:1.095,hasTruncateMarker:!0,authors:[{name:"Benoit Rognier",title:"CEO Completium",url:"https://www.linkedin.com/in/benoitrognier/",imageURL:"/img/blog/br.jpeg",key:"br"},{name:"Guillaume Duhamel",title:"CTO Completium",url:"https://www.linkedin.com/in/guillaumeduhamel/",imageURL:"/img/blog/gd.jpeg",key:"gd"}],frontMatter:{slug:"v143",title:"Version 1.4.3",authors:["br","gd"],tags:["version"]},nextItem:{title:"Version 1.4.2",permalink:"/blog/v142"}},s={authorsImageUrls:[void 0,void 0]},p=[{value:"Added",id:"added",level:2},{value:"Functions",id:"functions",level:3},{value:"Native Michelson code",id:"native-michelson-code",level:3},{value:"Exponential builtin",id:"exponential-builtin",level:3},{value:"Changed",id:"changed",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We present version ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation"},(0,a.kt)("inlineCode",{parentName:"a"},"1.4.3"))," of Archetype language."),(0,a.kt)("h2",{id:"added"},"Added"),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/declarations/function"},"Functions")," can now have side effects on storage. For example, it is now valid to write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype",metastring:"{5-7}","{5-7}":!0},"archetype function_side_effect\n\nvariable res : nat = 0\n\nfunction set_res(v : nat) {\n  res := v\n}\n\nentry exec(value : nat) { set_res(value) }\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"set_res")," function above illustrates that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"function can now have side effects (here on ",(0,a.kt)("inlineCode",{parentName:"li"},"res"),")"),(0,a.kt)("li",{parentName:"ul"},"return value may now be omitted, the function may then be used as an instruction")),(0,a.kt)("h3",{id:"native-michelson-code"},"Native Michelson code"),(0,a.kt)("p",null,"It is now possible to write native michelson code with the follwing elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"michelson")," ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/instructions/sequence#michelson"},"instruction")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/expressions/builtins#michelson%3CR%3E(%7B%20MICHELSON%20%7D)%20%5B%20STACK%20%5D"},"expression")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/expressions/builtins#lambda_michelson%3CT,%20R%3E(%7B%20MICHELSON%20%7D)"},(0,a.kt)("inlineCode",{parentName:"a"},"lambda_michelson"))," expression")),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype"},'archetype michelson_instruction\n\nentry exec (i : nat) {\n  michelson {\n    PUSH nat 0;\n    COMPARE;\n    NEQ;\n    IF { PUSH string "NOT_ZERO"; FAILWITH } { PUSH nat 0 }\n  }\n}\n')),(0,a.kt)("h3",{id:"exponential-builtin"},"Exponential builtin"),(0,a.kt)("p",null,"A builtin for exponential function ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/expressions/builtins#exp_horner(v%20:%20rational,%20p%20:%20nat)"},(0,a.kt)("inlineCode",{parentName:"a"},"exp_horner"))," is now available. It is computed with the Horner method applied to the polynomial approwimation of the exponential function."),(0,a.kt)("h2",{id:"changed"},"Changed"),(0,a.kt)("p",null,"Literals for BLS curves types ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/types#bls12_381_fr"},(0,a.kt)("inlineCode",{parentName:"a"},"bls12_381_fr"))," ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/types#bls12_381_g1"},(0,a.kt)("inlineCode",{parentName:"a"},"bls12_381_g1"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/types#bls12_381_g2"},(0,a.kt)("inlineCode",{parentName:"a"},"bls12_381_g2"))," are now suffixed by ",(0,a.kt)("inlineCode",{parentName:"p"},"fr")," ",(0,a.kt)("inlineCode",{parentName:"p"},"g1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"g2")," respectively; moreover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"nat")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"bytes")," literals cannot be used anymore as ",(0,a.kt)("inlineCode",{parentName:"li"},"bls12_381_fr")," literals"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bytes")," literals cannot be used anymore as ",(0,a.kt)("inlineCode",{parentName:"li"},"bls12_381_g1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"bls12_381_g2")," literals")))}u.isMDXComponent=!0}}]);