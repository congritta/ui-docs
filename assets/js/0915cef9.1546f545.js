"use strict";(self.webpackChunk_congritta_ui_docs=self.webpackChunk_congritta_ui_docs||[]).push([[993],{8405:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(1943),a=(r(6687),r(8405));const o={},i="@congritta-ui/data-rows",l={unversionedId:"data-rows",id:"data-rows",title:"@congritta-ui/data-rows",description:"This is small CSS class for creating data rows",source:"@site/docs/data-rows.md",sourceDirName:".",slug:"/data-rows",permalink:"/docs/data-rows",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@congritta-ui/checkbox",permalink:"/docs/checkbox"},next:{title:"@congritta-ui/datepicker",permalink:"/docs/datepicker"}},c={},s=[{value:"How to install",id:"how-to-install",level:2},{value:"How to use",id:"how-to-use",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"congritta-uidata-rows"},"@congritta-ui/data-rows"),(0,a.kt)("p",null,"This is small CSS class for creating data rows"),(0,a.kt)("h2",{id:"how-to-install"},"How to install"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"@congritta-ui/base")," if you didn't it yet. (More info ",(0,a.kt)("a",{parentName:"li",href:"./base"},"here"),");"),(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"@congritta-ui/data-rows"),";")),(0,a.kt)("p",null,"Add"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import '@congritta-ui/data-rows';\n")),(0,a.kt)("p",null,"into your code AFTER importing ",(0,a.kt)("inlineCode",{parentName:"p"},"@congritta-ui/base")),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div className="data-rows">\n  <div className="row">\n    <div>Property 1:</div>\n    <div>Value 1</div>\n  </div>\n  <div className="row">\n    <div>Property 2:</div>\n    <div>Value 2</div>\n  </div>\n  <div className="row">\n    <div>Property 3:</div>\n    <div>Value 3</div>\n  </div>\n</div>\n')))}p.isMDXComponent=!0}}]);