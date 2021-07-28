(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[7192],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),c=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,l=t.originalType,i=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),d=c(r),k=o,m=d["".concat(i,".").concat(k)]||d[k]||s[k]||l;return r?n.createElement(m,u(u({ref:e},p),{},{components:r})):n.createElement(m,u({ref:e},p))}));function k(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=r.length,u=new Array(l);u[0]=d;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a.mdxType="string"==typeof t?t:o,u[1]=a;for(var c=2;c<l;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3698:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var n=r(2122),o=r(9756),l=(r(7294),r(3905)),u=["components"],a={},i={unversionedId:"How to guides/Computes/Local Spark",id:"How to guides/Computes/Local Spark",isDocsHomePage:!1,title:"Local Spark",description:"This article provides information about Local spark support in Guzzle.",source:"@site/docs/How to guides/Computes/Local Spark.md",sourceDirName:"How to guides/Computes",slug:"/How to guides/Computes/Local Spark",permalink:"/docs/How to guides/Computes/Local Spark",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Computes/Local Spark.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure Databricks",permalink:"/docs/How to guides/Computes/Azure Databricks"},next:{title:"Yarn",permalink:"/docs/How to guides/Computes/Yarn"}},c=[],p={toc:c};function s(t){var e=t.components,r=(0,o.Z)(t,u);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This article provides information about Local spark support in Guzzle."),(0,l.kt)("p",null,"Local spark users will only use it for development, learning and light weight purposes."),(0,l.kt)("p",null,"Local spark does not support various features like : "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"ADLS"),(0,l.kt)("li",{parentName:"ol"},"DBFS"),(0,l.kt)("li",{parentName:"ol"},"DELTA"),(0,l.kt)("li",{parentName:"ol"},"HIVE")),(0,l.kt)("p",null,"Guzzle provides below parameter and configs for local spark"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Property "),(0,l.kt)("td",null,"Description"),(0,l.kt)("td",null,"Default Value"),(0,l.kt)("td",null,"Required")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Number of executors"),(0,l.kt)("td",null,"Specify the number of spark executor on you want to run job"),(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Driver memory"),(0,l.kt)("td",null,"Specify the allocated driver memory for running jobs"),(0,l.kt)("td",null,"512m"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Executor memory"),(0,l.kt)("td",null,"Specify the allocated executor memory for running jobs"),(0,l.kt)("td",null,"512m"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Driver classpath"),(0,l.kt)("td",null,"Specify the driver classpath of jobs"),(0,l.kt)("td",null,"None"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Executor classpath"),(0,l.kt)("td",null,"Specify the executor classpath"),(0,l.kt)("td",null,"None"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Jars"),(0,l.kt)("td",null,"Put the jar path with comma seperated"),(0,l.kt)("td",null,"None"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Additional arguments"),(0,l.kt)("td",null,"Specify the spark arguments",(0,l.kt)("br",null),"Ex: --conf spark.development=true"),(0,l.kt)("td",null,"None"),(0,l.kt)("td",null,"No"))))}s.isMDXComponent=!0}}]);