(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[58],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return o},kt:function(){return k}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},o=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,h=c["".concat(s,".").concat(k)]||c[k]||d[k]||a;return n?l.createElement(h,u(u({ref:t},o),{},{components:n})):l.createElement(h,u({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var p=2;p<a;p++)u[p]=n[p];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4799:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},Highlight:function(){return o},default:function(){return c}});var l=n(2122),r=n(9756),a=(n(7294),n(3905)),u=["components"],i={slug:"api",title:"Api",author:"guzzle",author_title:"guzzle",tags:["api","guzzle-docs"]},s={type:"mdx",permalink:"/Api/api",source:"@site/src/pages/Api/api.md"},p=[{value:"Run Activity",id:"run-activity",children:[{value:"<Highlight> PUT </Highlight> Run Activity",id:"put--run-activity",children:[]},{value:"Query Parameter",id:"query-parameter",children:[]},{value:"Body Parameter",id:"body-parameter",children:[]},{value:"Responses",id:"responses",children:[]},{value:"Sample Request",id:"sample-request",children:[]},{value:"Sample Response",id:"sample-response",children:[]}]},{value:"Run Pipeline",id:"run-pipeline",children:[{value:"<Highlight> PUT </Highlight> Run Pipeline",id:"put--run-pipeline",children:[]},{value:"Query Parameter",id:"query-parameter-1",children:[]},{value:"Body Parameter",id:"body-parameter-1",children:[]},{value:"Responses",id:"responses-1",children:[]},{value:"Sample Request",id:"sample-request-1",children:[]},{value:"Sample Response",id:"sample-response-1",children:[]}]},{value:"Init Batch",id:"init-batch",children:[{value:"<Highlight> PUT </Highlight> Init Batch",id:"put--init-batch",children:[]},{value:"Query Parameter",id:"query-parameter-2",children:[]},{value:"Body Parameter",id:"body-parameter-2",children:[]},{value:"Responses",id:"responses-2",children:[]},{value:"Sample Request",id:"sample-request-2",children:[]},{value:"Sample Response",id:"sample-response-2",children:[]}]},{value:"Run Batch",id:"run-batch",children:[{value:"<Highlight> POST </Highlight> Run Stage/Batch",id:"post--run-stagebatch",children:[]},{value:"Query Parameter",id:"query-parameter-3",children:[]},{value:"Body Parameter",id:"body-parameter-3",children:[]},{value:"Responses",id:"responses-3",children:[]},{value:"Sample Request",id:"sample-request-3",children:[]},{value:"Sample Response",id:"sample-response-3",children:[]}]},{value:"Job Status",id:"job-status",children:[{value:"<Highlight> PUT </Highlight> Job Status",id:"put--job-status",children:[]},{value:"Query Parameter",id:"query-parameter-4",children:[]},{value:"Body Parameter",id:"body-parameter-4",children:[]},{value:"Responses",id:"responses-4",children:[]},{value:"Sample Request",id:"sample-request-4",children:[]},{value:"Sample Response",id:"sample-response-4",children:[]}]}],o=function(e){var t=e.children;e.color;return(0,a.kt)("span",{style:{backgroundColor:"#005484",borderRadius:"10px",color:"#fff",padding:"0.3rem",marginRight:"0.6rem",fontWeight:"bold",fontSize:"0.9rem"}},t)},d={toc:p,Highlight:o};function c(e){var t=e.components,n=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guzzle-service-rest-api"},"Guzzle Service Rest Api"),(0,a.kt)("p",null,"welcome to the Guzzle Serices Rest Api Reference."),(0,a.kt)("p",null,"Representational State Transfer (REST) APIs are service endpoints that support sets of HTTP operations (methods), which provide create, retrieve, update, or delete access to the service's resources. This article walks you through:"),(0,a.kt)("p",null,"The basic components of a REST API request/response pair.\nOverviews of creating and sending a REST request, and handling the response.\nMost REST APIs are accessible through our client libraries, which can be used to greatly simplify your client code."),(0,a.kt)("h2",{id:"run-activity"},"Run Activity"),(0,a.kt)("p",null,"Run Activity job via Guzzle Servvice Rest Api. below Endpoints allows users to run activity with given parameter  "),(0,a.kt)("h3",{id:"put--run-activity"},(0,a.kt)(o,{mdxType:"Highlight"}," PUT ")," Run Activity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://<GUZZLE_API_URL>/api/execute/job?mode=default\n")),(0,a.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the guzzle mode whether it is git or default"))),(0,a.kt)("h3",{id:"body-parameter"},"Body Parameter"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"environment"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the environment name on which you want to run this batch")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"guzzle.spark.name"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the spark name, guzzle will run batch on specified spark compute")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"stage"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,'Specify the stages, for multiple stages are comma seperative ex: "STG,FND"')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"system"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the system name"))),(0,a.kt)("h3",{id:"responses"},"Responses"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"jobInstanceId"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Unique ID of the running stage"))),(0,a.kt)("h3",{id:"sample-request"},"Sample Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/execute/job?mode=default\n\nbody: {\n  environment: "test"\n  guzzle.spark.name: "azure-databricks"\n  stage: "STG,FND"\n  name: "batch_test"\n}\n\n')),(0,a.kt)("h3",{id:"sample-response"},"Sample Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "jobInstanceId":"210727113805146347"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"run-pipeline"},"Run Pipeline"),(0,a.kt)("p",null,"Run Activity job via Guzzle Servvice Rest Api. below Endpoints allows users to run activity with given parameter  "),(0,a.kt)("h3",{id:"put--run-pipeline"},(0,a.kt)(o,{mdxType:"Highlight"}," PUT ")," Run Pipeline"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://<GUZZLE_API_URL>/api/execute/job?mode=default\n")),(0,a.kt)("h3",{id:"query-parameter-1"},"Query Parameter"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the guzzle mode whether it is git or default"))),(0,a.kt)("h3",{id:"body-parameter-1"},"Body Parameter"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"environment"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the environment name on which you want to run this batch")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"guzzle.spark.name"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the spark name, guzzle will run batch on specified spark compute")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"stage"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,'Specify the stages, for multiple stages are comma seperative ex: "STG,FND"')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"system"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the system name"))),(0,a.kt)("h3",{id:"responses-1"},"Responses"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"jobInstanceId"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Unique ID of the running stage"))),(0,a.kt)("h3",{id:"sample-request-1"},"Sample Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/execute/job?mode=default\n\nbody: {\n  environment: "test"\n  guzzle.spark.name: "azure-databricks"\n  stage: "STG,FND"\n  name: "batch_test"\n}\n\n')),(0,a.kt)("h3",{id:"sample-response-1"},"Sample Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "jobInstanceId":"210727113805146347"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"init-batch"},"Init Batch"),(0,a.kt)("p",null,"Run Activity job via Guzzle Servvice Rest Api. below Endpoints allows users to run activity with given parameter  "),(0,a.kt)("h3",{id:"put--init-batch"},(0,a.kt)(o,{mdxType:"Highlight"}," PUT ")," Init Batch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://<GUZZLE_API_URL>/api/execute/job?mode=default\n")),(0,a.kt)("h3",{id:"query-parameter-2"},"Query Parameter"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the guzzle mode whether it is git or default"))),(0,a.kt)("h3",{id:"body-parameter-2"},"Body Parameter"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"environment"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the environment name on which you want to run this batch")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"guzzle.spark.name"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the spark name, guzzle will run batch on specified spark compute")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"stage"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,'Specify the stages, for multiple stages are comma seperative ex: "STG,FND"')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"system"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the system name"))),(0,a.kt)("h3",{id:"responses-2"},"Responses"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"jobInstanceId"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Unique ID of the running stage"))),(0,a.kt)("h3",{id:"sample-request-2"},"Sample Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/execute/job?mode=default\n\nbody: {\n  environment: "test"\n  guzzle.spark.name: "azure-databricks"\n  stage: "STG,FND"\n  name: "batch_test"\n}\n\n')),(0,a.kt)("h3",{id:"sample-response-2"},"Sample Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "jobInstanceId":"210727113805146347"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"run-batch"},"Run Batch"),(0,a.kt)("p",null,"Run Batch for specific job via Guzzle Servvice Rest Api. below Endpoints allows users to run stages with given parameter  "),(0,a.kt)("h3",{id:"post--run-stagebatch"},(0,a.kt)(o,{mdxType:"Highlight"}," POST ")," Run Stage/Batch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://<GUZZLE_API_URL>/api/batches/run_stage?mode=<mode>\n")),(0,a.kt)("h3",{id:"query-parameter-3"},"Query Parameter"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the guzzle mode whether it is git or default"))),(0,a.kt)("h3",{id:"body-parameter-3"},"Body Parameter"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"environment"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the environment name on which you want to run this batch")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"guzzle.spark.name"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the spark name, guzzle will run batch on specified spark compute")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"stage"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,'Specify the stages, for multiple stages are comma seperative ex: "STG,FND"')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"system"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the system name"))),(0,a.kt)("h3",{id:"responses-3"},"Responses"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"jobInstanceId"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Unique ID of the running stage"))),(0,a.kt)("h3",{id:"sample-request-3"},"Sample Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST https://guzzle315.southeastasia.cloudapp.azure.com/api/batches/run_stage?mode=default\n\nbody: {\n  environment: "test"\n  guzzle.spark.name: "azure-databricks"\n  stage: "STG,FND"\n  system: "batch_test"\n}\n\n')),(0,a.kt)("h3",{id:"sample-response-3"},"Sample Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "jobInstanceId":"210727113805146347"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"job-status"},"Job Status"),(0,a.kt)("p",null,"Run Activity job via Guzzle Servvice Rest Api. below Endpoints allows users to run activity with given parameter  "),(0,a.kt)("h3",{id:"put--job-status"},(0,a.kt)(o,{mdxType:"Highlight"}," PUT ")," Job Status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://<GUZZLE_API_URL>/api/execute/job?mode=default\n")),(0,a.kt)("h3",{id:"query-parameter-4"},"Query Parameter"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the guzzle mode whether it is git or default"))),(0,a.kt)("h3",{id:"body-parameter-4"},"Body Parameter"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"environment"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the environment name on which you want to run this batch")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"guzzle.spark.name"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the spark name, guzzle will run batch on specified spark compute")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"stage"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,'Specify the stages, for multiple stages are comma seperative ex: "STG,FND"')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"system"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify the system name"))),(0,a.kt)("h3",{id:"responses-4"},"Responses"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"jobInstanceId"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Unique ID of the running stage"))),(0,a.kt)("h3",{id:"sample-request-4"},"Sample Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/execute/job?mode=default\n\nbody: {\n  environment: "test"\n  guzzle.spark.name: "azure-databricks"\n  stage: "STG,FND"\n  name: "batch_test"\n}\n\n')),(0,a.kt)("h3",{id:"sample-response-4"},"Sample Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "jobInstanceId":"210727113805146347"\n}\n')))}c.isMDXComponent=!0}}]);