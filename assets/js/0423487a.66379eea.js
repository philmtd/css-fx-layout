"use strict";(self.webpackChunkcss_fx_layout_docs=self.webpackChunkcss_fx_layout_docs||[]).push([[4093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?s.createElement(g,a(a({ref:t},u),{},{components:n})):s.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},a="Getting Started",i={unversionedId:"getting-started",id:"version-2.1/getting-started",title:"Getting Started",description:"Installation",source:"@site/versioned_docs/version-2.1/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/css-fx-layout/docs/2.1/getting-started",draft:!1,tags:[],version:"2.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"autoSidebar",previous:{title:"About",permalink:"/css-fx-layout/docs/2.1/about"},next:{title:"Attribute selectors",permalink:"/css-fx-layout/docs/2.1/category/attribute-selectors"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Using attributes",id:"using-attributes",level:3},{value:"Using CSS classes",id:"using-css-classes",level:3},{value:"Ready to go",id:"ready-to-go",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Add the library to your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -s css-fx-layout\n")),(0,r.kt)("p",null,"Then use the provided mixins in your main stylesheet to include the css-fx-layout selectors. You can choose between using CSS classes\nor HTML data attributes (or, while not recommended, use both). If you want to use the layout-gap functionality you can customise which selectors\nare going to be generated by providing the start, end and unit as shown in the example below."),(0,r.kt)("p",null,"css-fx-layout includes a responsive API which is not included per default. If you want to use the responsive API please set the corresponding parameter of the\nmixins to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," as shown in the examples below."),(0,r.kt)("h3",{id:"using-attributes"},"Using attributes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},'@use "css-fx-layout" as fx;\n\n// If you want to include the responsive API selectors\n$includeResponsiveApi: true;\n\n// If you choose to use attribute selectors:\n@include fx.attribute-selectors($includeResponsiveApi);\n@include fx.gap-attribute-selectors(1, 16, px em, $includeResponsiveApi);\n')),(0,r.kt)("h3",{id:"using-css-classes"},"Using CSS classes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},'@use "css-fx-layout" as fx;\n\n// If you want to include the responsive API selectors\n$includeResponsiveApi: true;\n\n// If you choose to use CSS class selectors:\n@include fx.class-selectors($includeResponsiveApi);\n@include fx.gap-class-selectors(1, 16, px em, $includeResponsiveApi);\n')),(0,r.kt)("h2",{id:"ready-to-go"},"Ready to go"),(0,r.kt)("p",null,"Done. You can now start using the ",(0,r.kt)("inlineCode",{parentName:"p"},"css-fx-layout")," selectors. Continue reading the docs to find out\nmore about the available selectors and for examples."))}d.isMDXComponent=!0}}]);