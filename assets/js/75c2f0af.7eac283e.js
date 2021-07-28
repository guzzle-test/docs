(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[4317],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return A}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),A=i,d=p["".concat(s,".").concat(A)]||p[A]||g[A]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function A(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9595:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],l={},s={unversionedId:"How to guides/Administration/Security/Azure Single Sign On",id:"How to guides/Administration/Security/Azure Single Sign On",isDocsHomePage:!1,title:"Azure Single Sign On",description:"Guzzle provides support for configuring Azure Active Directory (AAD) single sign-on (SSO) to allow AAD users to login into Guzzle. Below are the steps to configure Azure Active Directory single sign-on:",source:"@site/docs/How to guides/Administration/Security/Azure Single Sign On.md",sourceDirName:"How to guides/Administration/Security",slug:"/How to guides/Administration/Security/Azure Single Sign On",permalink:"/docs/How to guides/Administration/Security/Azure Single Sign On",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Administration/Security/Azure Single Sign On.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"View service log",permalink:"/docs/How to guides/Administration/Maintenance/View service log"},next:{title:"User management",permalink:"/docs/How to guides/Administration/Security/User management"}},u=[{value:"Configuration on Azure Active Directory",id:"configuration-on-azure-active-directory",children:[]},{value:"Enabling Azure SSO in Guzzle",id:"enabling-azure-sso-in-guzzle",children:[]}],c={toc:u};function g(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Guzzle provides support for configuring Azure Active Directory (AAD) single sign-on (SSO) to allow AAD users to login into Guzzle. Below are the steps to configure Azure Active Directory single sign-on:"),(0,a.kt)("h2",{id:"configuration-on-azure-active-directory"},"Configuration on Azure Active Directory"),(0,a.kt)("p",null,"To use create a new one that shall be used by Guzzle to perform SSO- ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"},"for more")," "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create new app registration "),(0,a.kt)("li",{parentName:"ol"},"Generate a secret with appropriate expiry date"),(0,a.kt)("li",{parentName:"ol"},"Add following API permissions",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Microsoft Graph"),(0,a.kt)("li",{parentName:"ol"},"Azure DevOps (This is required if you plan to enable Azure Devops git integration.)"),(0,a.kt)("li",{parentName:"ol"},"Azure Service Management (for getting user profile details)"))),(0,a.kt)("li",{parentName:"ol"},"In Authentication tab add following:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"add redirect URL (which is provided by Guzzle)\nFor redirect URL guzzle follows below rules,\nhttp://","<","domain of guzzle app",">","/oauth/microsoft. "),(0,a.kt)("li",{parentName:"ol"},"Only Single tenant is supported")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image alt text",src:n(3212).Z})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can also use existing App registration in AAD and add the redirect URL of the Guzzle instance you are integrating. However as  a best practice, each Guzzle instance should have its own App registration for better segregation"))),(0,a.kt)("p",null,"Guzzle internally uses below scopes for Azure Active Directory single sign-on:"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Scopes"),(0,a.kt)("td",null,"Purpose")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"499b84ac-1321-427f-aa17-267ca6975798/user_impersonation (Azure DevOps)"),(0,a.kt)("td",null,"Guzzle create Access token for azure devops when users are logged in to achieve this user have to give azure devops scope to Azure Active Directory sso.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"openid"),(0,a.kt)("td",null,"To retrieve email")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"profile"),(0,a.kt)("td",null,"To retrieve username")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"offline_access "),(0,a.kt)("td",null,"To retrieve refresh token")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"https://management.azure.com/user_impersonation"),(0,a.kt)("td",null,"To retrieve user profile"))),(0,a.kt)("h2",{id:"enabling-azure-sso-in-guzzle"},"Enabling Azure SSO in Guzzle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Admin from the top navigation bar.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Security from  the sidebar")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Azure Single Sign On")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Enable to enable SSO"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image alt text",src:n(1765).Z})),(0,a.kt)("p",null,"Step 5 : Enter all below necessary details "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Client Id")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Client Secret")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Tenant Id")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Redirect URI"))),(0,a.kt)("p",null,"Step 6 : Click on Save "),(0,a.kt)("p",null,"Step 7 : Create User "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once user enabled Single Sign-on User have to create their profile in guzzle as well. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Users which is Under Admin Settings Security tab")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on create user")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter all valid necessary details")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Create"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image alt text",src:n(6787).Z})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Once SSO is enabled, the native login gets disabled. User can only login via SSO"))))}g.isMDXComponent=!0},3212:function(e,t){"use strict";t.Z="data:image/png;base64,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"},1765:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sso1-350d94c2eba0de6ea3ef83096467cd24.png"},6787:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sso2-341e22e6223f46850516a3b958267541.gif"}}]);