(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[4462],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8226:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),r=["components"],l={},s={unversionedId:"How to guides/Ingest data/Pipeline",id:"How to guides/Ingest data/Pipeline",isDocsHomePage:!1,title:"Pipeline",description:"Pipelines in Guzzle are used to run multiple activities simultaneously. A pipeline is a logical grouping of activities that together perform a task. The pipeline allows you to manage the activities as a set instead of each one individually. For example, a pipeline could contain a set of activities that first ingest data and then perform processing on the ingested data. Pipelines allow  us to manage activities as a set instead of each one individually.",source:"@site/docs/How to guides/Ingest data/Pipeline.md",sourceDirName:"How to guides/Ingest data",slug:"/How to guides/Ingest data/Pipeline",permalink:"/docs/How to guides/Ingest data/Pipeline",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Ingest data/Pipeline.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Moving Processed Files",permalink:"/docs/How to guides/Ingest data/Moving Processed Files"},next:{title:"Pre-SQL and Post-SQL for Source and Target in Ingestion",permalink:"/docs/How to guides/Ingest data/Pre-SQL and Post-SQL for Source and Target in Ingestion"}},u=[{value:"Use of Pipelines in Guzzle",id:"use-of-pipelines-in-guzzle",children:[]}],c={toc:u};function p(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pipelines in Guzzle are used to run multiple activities simultaneously. A pipeline is a logical grouping of activities that together perform a task. The pipeline allows you to manage the activities as a set instead of each one individually. For example, a pipeline could contain a set of activities that first ingest data and then perform processing on the ingested data. Pipelines allow  us to manage activities as a set instead of each one individually."),(0,o.kt)("h2",{id:"use-of-pipelines-in-guzzle"},"Use of Pipelines in Guzzle"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We may create a new pipeline in Guzzle by selecting the menu button in the Pipelines section on the left hand side bar of Guzzle. We must specify the name of the pipeline according to the action it performs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the Parallel Run section we need to enter a number which determines the number of activities to run simultaneously in the given Pipeline.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Auto Dependency defines how subsequent activities depend on previous activities, determining the condition of whether to continue executing the next task. If we want to perform a second activity on the data generated in the output of the first activity we must select the Auto Dependency option.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Activity Section can have one or more activities within it. We can mention the different activity names and the parameters associated with each activity. The Parameters are the same as when we fill parameters for individual jobs. They make our pipeline flexible for reuse.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Pipeline dependency graph can also be generated in Guzzle. For this, we need to go to the dependency section and choose the generate option. Guzzle will generate a graph showing the relationship between the different activities in our pipeline."))),(0,o.kt)("p",null,"In the image below we run a pipeline with two activities json_multi_line_false and csv_to_json and generate a Pipeline Dependency Graph for the two activities."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:n(7325).Z})),(0,o.kt)("p",null,"Guzzle provides below parameter and configs for Pipeline"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Property "),(0,o.kt)("td",null,"Description"),(0,o.kt)("td",null,"Default Value"),(0,o.kt)("td",null,"Required")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Parallel Run"),(0,o.kt)("td",null,"Specify number which determines the number of activities to run simultaneously in the given Pipeline."),(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,"No")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Auto Dependency"),(0,o.kt)("td",null,"Auto Dependency defines how subsequent activities depend on previous activities, determining the condition of whether to continue executing the next task. If we want to perform a second activity on the data generated in the output of the first activity we must select the Auto Dependency option."),(0,o.kt)("td",null,"False"),(0,o.kt)("td",null,"No"))))}p.isMDXComponent=!0},7325:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ezgif.com-gif-maker(4)-d09c092fc1683f709090fb9e34f65766.gif"}}]);