"use strict";(self.webpackChunk_congritta_ui_docs=self.webpackChunk_congritta_ui_docs||[]).push([[100],{8405:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||r;return n?l.createElement(m,o(o({ref:t},u),{},{components:n})):l.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=n(1943),a=(n(6687),n(8405));const r={},o="@congritta-ui/base",i={unversionedId:"base",id:"base",title:"@congritta-ui/base",description:"@congritta-ui/base is required module for all Congritta UI libs working.",source:"@site/docs/base.md",sourceDirName:".",slug:"/base",permalink:"/docs/base",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/docs/get-started"},next:{title:"@congritta-ui/checkbox",permalink:"/docs/checkbox"}},s={},p=[{value:"Let&#39;s install it",id:"lets-install-it",level:2},{value:"CSS Vars",id:"css-vars",level:2},{value:"How to provide CSS Vars",id:"how-to-provide-css-vars",level:3},{value:"How to make additional styles",id:"how-to-make-additional-styles",level:2},{value:"How to change page fonts",id:"how-to-change-page-fonts",level:2},{value:"What is @congritta-ui/base",id:"what-is-congritta-uibase",level:2},{value:"Base HTML styles",id:"base-html-styles",level:3},{value:"Inputs styles",id:"inputs-styles",level:3},{value:"Typography",id:"typography",level:3},{value:"Classes",id:"classes",level:3},{value:"Source code",id:"source-code",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"congritta-uibase"},"@congritta-ui/base"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"@congritta-ui/base")," is required module for all Congritta UI libs working."),(0,a.kt)("h2",{id:"lets-install-it"},"Let's install it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @congritta-ui/base\n")),(0,a.kt)("p",null,"after this, import it once into entry point of your project (that file where ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM.render")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM.createRoot"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import '@congritta-ui/base';\n")),(0,a.kt)("p",null,"If you need, you can import your CSS files AFTER importing @congritta-ui libs"),(0,a.kt)("h2",{id:"css-vars"},"CSS Vars"),(0,a.kt)("p",null,'Provide these CSS vars to apply some styles. What value to use as var value - you decide ("px" or "em" or "%" and so on)'),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"CSS Variable"),(0,a.kt)("th",null,"CSS property when used"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"--cui-css-transition")),(0,a.kt)("td",null,(0,a.kt)("code",null,"transition"),", ",(0,a.kt)("code",null,"animation")),(0,a.kt)("td",null,"Default CSS transition duration")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"--cui-accent-color-...")),(0,a.kt)("td",null,(0,a.kt)("code",null,"background"),", ",(0,a.kt)("code",null,"color"),", ",(0,a.kt)("code",null,"border-color")," and more..."),(0,a.kt)("td",null,"Accent color shades (",(0,a.kt)("code",null,"--cui-accent-color-50"),", ",(0,a.kt)("code",null,"--cui-accent-color-100"),",... ",(0,a.kt)("code",null,"--cui-accent-color-900"),") (step 100)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"--cui-inputs-height")),(0,a.kt)("td",null,(0,a.kt)("code",null,"min-height"),", ",(0,a.kt)("code",null,"height")),(0,a.kt)("td",null,"Base height in pixels for text inputs, buttons, one-row textareas and so on")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"--cui-inputs-horizontal-padding")),(0,a.kt)("td",null,(0,a.kt)("code",null,"padding")),(0,a.kt)("td",null,"Horizontal padding between inputs edges and their contents")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"--cui-buttons-gap")),(0,a.kt)("td",null,(0,a.kt)("code",null,"gap")),(0,a.kt)("td",null,"Gap between elements in buttons")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"--cui-form-label-padding")),(0,a.kt)("td",null,(0,a.kt)("code",null,"padding")),(0,a.kt)("td",null,"Paddings around text of form text labels (.form-label element)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"--cui-gap-between-inputs")),(0,a.kt)("td",null,(0,a.kt)("code",null,"gap"),", ",(0,a.kt)("code",null,"margin")),(0,a.kt)("td",null,"Gap between form elements (inputs, buttons and so on)"))),(0,a.kt)("h3",{id:"how-to-provide-css-vars"},"How to provide CSS Vars"),(0,a.kt)("p",null,"Just create your own CSS file and fill it with code like below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  --cui-inputs-height: 50px;\n}\n")),(0,a.kt)("p",null,"All CSS vars have default values so you don't need to specify them all."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important:")," Import CSS with your vars AFTER importing ",(0,a.kt)("inlineCode",{parentName:"p"},"@congritta-ui/base"),"."),(0,a.kt)("h2",{id:"how-to-make-additional-styles"},"How to make additional styles"),(0,a.kt)("p",null,"Just write your CSS files with your own styles. You can learn source code of all Congritta UI libs. You also can provide CSS for Congritta UI components (read more in them docs)."),(0,a.kt)("h2",{id:"how-to-change-page-fonts"},"How to change page fonts"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Import fonts from any CDN if needed;"),(0,a.kt)("li",{parentName:"ol"},"In your CSS file, create ",(0,a.kt)("inlineCode",{parentName:"li"},"body")," selector and give them ",(0,a.kt)("inlineCode",{parentName:"li"},"font")," property with neccessary value")),(0,a.kt)("h2",{id:"what-is-congritta-uibase"},"What is @congritta-ui/base"),(0,a.kt)("p",null,"This is basic CSS styles for all Congritta components; so it's no need to repeat same CSS across Congritta-UI compoents."),(0,a.kt)("h3",{id:"base-html-styles"},"Base HTML styles"),(0,a.kt)("p",null,"There are basic styles for ",(0,a.kt)("inlineCode",{parentName:"p"},"html"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"body"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"svg"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"img"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"audio"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"video"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe")," elements"),(0,a.kt)("h3",{id:"inputs-styles"},"Inputs styles"),(0,a.kt)("p",null,"There are basic styles for input elements like ",(0,a.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"button")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"textarea"),". All inputs are ",(0,a.kt)("inlineCode",{parentName:"p"},"display: block")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"width: 100%")," in default."),(0,a.kt)("p",null,"Buttons may have class ",(0,a.kt)("inlineCode",{parentName:"p"},"_isDuctile")," for making button auto width'ed and class ",(0,a.kt)("inlineCode",{parentName:"p"},"_isZeroed")," for removing all styles from button (in this case, we get transparent button with no background, padding, borders and so on.)."),(0,a.kt)("p",null,"There are basic ",(0,a.kt)("inlineCode",{parentName:"p"},"form")," element styles with 100% width, display block and margin top 1em."),(0,a.kt)("p",null,"There is ",(0,a.kt)("inlineCode",{parentName:"p"},".form-label")," class for making input labels."),(0,a.kt)("p",null,"There is ",(0,a.kt)("inlineCode",{parentName:"p"},".fields-wrapper")," class for making responsive forms. There are some cases:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"form\n  .fields-wrapper\n    input input input\n    input input\n  .fields-wrapper\n    input\n  .fields-wrapper\n    .form-label\n    input\n  .fields-wrapper\n    .fields-wrapper\n      .form-label\n      input\n    .fields-wrapper\n      .form-label\n      input\n  .fields-wrapper\n    button\n")),(0,a.kt)("h3",{id:"typography"},"Typography"),(0,a.kt)("p",null,"There are basic styles for ",(0,a.kt)("inlineCode",{parentName:"p"},"h1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"h2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"h3"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"h4"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"h5"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"h6"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ul"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ol"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"li"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," elements"),(0,a.kt)("h3",{id:"classes"},"Classes"),(0,a.kt)("p",null,"There are most used in web helpful classes:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Flex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},".flex"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".flex-ais"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".flex-aic"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".flex-aifs"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".flex-aie"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".flex-jcfs"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".flex-jcfe"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".flex-jcsb"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".flex-jcc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".flex-jcsa"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".flex-wrap"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-nowrap")),(0,a.kt)("p",null,"In future @congritta-ui/base releases, there will be more classes"),(0,a.kt)("h2",{id:"source-code"},"Source code"),(0,a.kt)("p",null,"You can learn ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/congritta/ui-base"},"source code")," to find CSS selectors. You can write you CSS with same selectors and overwrtie existing or add styles"))}c.isMDXComponent=!0}}]);