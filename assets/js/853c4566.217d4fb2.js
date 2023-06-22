"use strict";(self.webpackChunk_congritta_ui_docs=self.webpackChunk_congritta_ui_docs||[]).push([[299],{8405:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(6687);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=l,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1081:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(1943),l=(n(6687),n(8405));const r={},i="@congritta-ui/select",o={unversionedId:"select",id:"select",title:"@congritta-ui/select",description:"This is 'select' React component",source:"@site/docs/select.md",sourceDirName:".",slug:"/select",permalink:"/docs/select",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@congritta-ui/modal-window",permalink:"/docs/modal-window"},next:{title:"@congritta-ui/table",permalink:"/docs/table"}},p={},u=[{value:"How to install",id:"how-to-install",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Props",id:"props",level:3}],s={toc:u},d="wrapper";function m(t){let{components:e,...n}=t;return(0,l.kt)(d,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"congritta-uiselect"},"@congritta-ui/select"),(0,l.kt)("p",null,"This is 'select' React component"),(0,l.kt)("h2",{id:"how-to-install"},"How to install"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("inlineCode",{parentName:"li"},"@congritta-ui/base")," if you didn't it yet. (More info ",(0,l.kt)("a",{parentName:"li",href:"./base"},"here"),");"),(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("inlineCode",{parentName:"li"},"@congritta-ui/select"),";")),(0,l.kt)("p",null,"Add"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import Select from '@congritta-ui/select';\n")),(0,l.kt)("p",null,"into your code"),(0,l.kt)("h2",{id:"how-to-use"},"How to use"),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"export default function MyComponentWidthSelect() {\n  const [value, setValue] = useState('a');\n\n  return (\n    <Select value={value} onChange={setValue} options={[\n      {value: 'a', element: 'Item A'},\n      {value: 'b', element: 'Item B'},\n      {value: 'c', element: 'Item C'},\n      {value: 'd', element: 'Item D'},\n      {value: 'e', element: 'Item E'},\n      {value: 'f', element: 'Item F'},\n    ]} />\n  )\n}\n")),(0,l.kt)("h3",{id:"props"},"Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Is Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"Active value"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of objects. ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," propetry is unique value key (like value in regular HTML), ",(0,l.kt)("inlineCode",{parentName:"td"},"element")," property is a string or JSX component that is visible in options list"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"Function that executes when user select an option in options list"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transitionDuration"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration in milliseconds to reveal or close options list"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"210"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"optionHeight"),(0,l.kt)("td",{parentName:"tr",align:null},"Height of an option in options list (in pixels)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"35"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gapBetweenSelectedOptionAndList"),(0,l.kt)("td",{parentName:"tr",align:null},"Gap between selected option and options list (in pixels)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wrapperClassName"),(0,l.kt)("td",{parentName:"tr",align:null},"Class name for Select component wrapper for adding additional styles"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selectedOptionClassName"),(0,l.kt)("td",{parentName:"tr",align:null},"Class name for selected option for adding additional styles"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wrapperClassName"),(0,l.kt)("td",{parentName:"tr",align:null},"Class name for Select component wrapper for adding additional styles"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"optionsListClassName"),(0,l.kt)("td",{parentName:"tr",align:null},"Class name for options list for adding additional styles"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notchIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"SVG Element about arrow icon at the right"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);