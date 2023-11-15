"use strict";(self.webpackChunkaiconfig_docs=self.webpackChunkaiconfig_docs||[]).push([[1525],{5303:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(5893),t=n(1151);n(4866),n(5162),n(4883);const l={sidebar_position:3},r="Usage Guide",o={id:"introduction/usage-guide",title:"Usage Guide",description:"aiconfigs can be used in an application programmatically using the SDK, and can be created and edited with a notebook-like playground called an AI Workbook. In this guide we'll go through some of the most important pieces of AIConfig.",source:"@site/docs/introduction/usage-guide.md",sourceDirName:"introduction",slug:"/introduction/usage-guide",permalink:"/docs/introduction/usage-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/lastmile-ai/aiconfig/aiconfig-docs/docs/introduction/usage-guide.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docSidebar",previous:{title:"Getting Started",permalink:"/docs/introduction/getting-started"},next:{title:"Overview",permalink:"/docs/category/overview"}},s={},c=[{value:"Anatomy of AIConfig",id:"anatomy-of-aiconfig",level:2},{value:"What&#39;s stored in an <code>aiconfig</code>",id:"whats-stored-in-an-aiconfig",level:3},{value:"Using an <code>aiconfig</code>",id:"using-an-aiconfig",level:2},{value:"Run a prompt",id:"run-a-prompt",level:3},{value:"Run a prompt chain",id:"run-a-prompt-chain",level:4},{value:"Passing data into a prompt template",id:"passing-data-into-a-prompt-template",level:3},{value:"Serialize and deserialize a prompt",id:"serialize-and-deserialize-a-prompt",level:3},{value:"Setting metadata",id:"setting-metadata",level:3},{value:"Callbacks",id:"callbacks",level:3},{value:"Stream callbacks",id:"stream-callbacks",level:4},{value:"Event callbacks",id:"event-callbacks",level:4},{value:"Creating an <code>aiconfig</code>",id:"creating-an-aiconfig",level:2},{value:"Programmatically",id:"programmatically",level:3},{value:"Visually",id:"visually",level:3},{value:"Editing an <code>aiconfig</code>",id:"editing-an-aiconfig",level:2},{value:"Programmatically",id:"programmatically-1",level:3},{value:"Visually",id:"visually-1",level:3},{value:"Customizing behavior",id:"customizing-behavior",level:2},{value:"Config File",id:"config-file",level:2},{value:"SDK",id:"sdk",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Is the <code>aiconfig</code> json file meant to be edited by hand?",id:"is-the-aiconfig-json-file-meant-to-be-edited-by-hand",level:3}];function d(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"usage-guide",children:"Usage Guide"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:"aiconfig"}),"s can be used in an application programmatically using the SDK, and can be created and edited with a notebook-like playground called an AI Workbook. In this guide we'll go through some of the most important pieces of AIConfig."]}),"\n",(0,i.jsx)(a.h2,{id:"anatomy-of-aiconfig",children:"Anatomy of AIConfig"}),"\n",(0,i.jsxs)(a.h3,{id:"whats-stored-in-an-aiconfig",children:["What's stored in an ",(0,i.jsx)(a.code,{children:"aiconfig"})]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:"aiconfig"})," helps you track the ",(0,i.jsx)(a.em,{children:"signature"})," of generative AI model behavior:"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"model"})," to run inference (e.g. gpt-4, llama2)"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"model parameters"})," to tune the model behavior (e.g. temperature)"]}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.strong,{children:"prompts"})}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"outputs"})," cached from previous inference runs, which can be serialized optionally."]}),"\n"]}),"\n",(0,i.jsxs)(a.h2,{id:"using-an-aiconfig",children:["Using an ",(0,i.jsx)(a.code,{children:"aiconfig"})]}),"\n",(0,i.jsx)(a.h3,{id:"run-a-prompt",children:"Run a prompt"}),"\n",(0,i.jsx)(a.h4,{id:"run-a-prompt-chain",children:"Run a prompt chain"}),"\n",(0,i.jsx)(a.h3,{id:"passing-data-into-a-prompt-template",children:"Passing data into a prompt template"}),"\n",(0,i.jsx)(a.h3,{id:"serialize-and-deserialize-a-prompt",children:"Serialize and deserialize a prompt"}),"\n",(0,i.jsx)(a.h3,{id:"setting-metadata",children:"Setting metadata"}),"\n",(0,i.jsx)(a.h3,{id:"callbacks",children:"Callbacks"}),"\n",(0,i.jsx)(a.h4,{id:"stream-callbacks",children:"Stream callbacks"}),"\n",(0,i.jsx)(a.h4,{id:"event-callbacks",children:"Event callbacks"}),"\n",(0,i.jsxs)(a.h2,{id:"creating-an-aiconfig",children:["Creating an ",(0,i.jsx)(a.code,{children:"aiconfig"})]}),"\n",(0,i.jsx)(a.h3,{id:"programmatically",children:"Programmatically"}),"\n",(0,i.jsx)(a.h3,{id:"visually",children:"Visually"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("video",{controls:!0,height:"480",width:"800",children:(0,i.jsx)("source",{src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/d826b872-eab6-4245-91dc-96a509b4f5ec"})})}),"\n",(0,i.jsxs)(a.h2,{id:"editing-an-aiconfig",children:["Editing an ",(0,i.jsx)(a.code,{children:"aiconfig"})]}),"\n",(0,i.jsx)(a.h3,{id:"programmatically-1",children:"Programmatically"}),"\n",(0,i.jsx)(a.h3,{id:"visually-1",children:"Visually"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("video",{controls:!0,height:"480",width:"800",children:(0,i.jsx)("source",{src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/5d901493-bbda-4f8e-93c7-dd9a91bf242e"})})}),"\n",(0,i.jsx)(a.h2,{id:"customizing-behavior",children:"Customizing behavior"}),"\n",(0,i.jsx)(a.h2,{id:"config-file",children:"Config File"}),"\n",(0,i.jsx)(a.h2,{id:"sdk",children:"SDK"}),"\n",(0,i.jsx)(a.h2,{id:"faqs",children:"FAQs"}),"\n",(0,i.jsxs)(a.h3,{id:"is-the-aiconfig-json-file-meant-to-be-edited-by-hand",children:["Is the ",(0,i.jsx)(a.code,{children:"aiconfig"})," json file meant to be edited by hand?"]}),"\n",(0,i.jsxs)(a.p,{children:["For quick updates (like changing a prompt string slightly, or changing a model parameter value), it should be ok for editing the ",(0,i.jsx)(a.code,{children:"aiconfig"})," JSON manually."]}),"\n",(0,i.jsx)(a.p,{children:"But for proper editing, it should be done either programmatically via AIConfig SDK, or via the AI Workbooks editor."}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Editing with SDK\nSee the ",(0,i.jsxs)(a.a,{href:"#programmatically",children:["editing ",(0,i.jsx)(a.code,{children:"aiconfig"})]})," section, and this ",(0,i.jsx)(a.a,{href:"https://github.com/lastmile-ai/aiconfig/blob/main/cookbooks/Create-AIConfig-Programmatically/create_aiconfig_programmatically.ipynb",children:"example cookbook"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Editing with UI"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["In the Jupyter world, an ",(0,i.jsx)(a.code,{children:"ipynb"})," is a JSON file, but it's very rare to edit the JSON directly. Most people use the notebook editor which serializes updates into the ",(0,i.jsx)(a.code,{children:"ipynb"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["Using an AI Workbook with an ",(0,i.jsx)(a.code,{children:"aiconfig"})," is meant to satisfy the same behavior. See the ",(0,i.jsx)(a.a,{href:"#visually",children:"editing visually"})," section for more details."]})]})}function u(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4883:(e,a,n)=>{n.d(a,{Z:()=>r});var i=n(412);const t=!!i.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!i.Z.canUseDOM&&navigator.platform.startsWith("Win"),r={defaultOs:t?"macos":l?"windows":"linux",defaultNodePackageManager:"npm",defaultPythonPackageManager:"pip",defaultPlatform:t?"ios":"android",defaultSyntax:"functional",defaultAIConfigLanguage:"python",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],nodePackageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],pythonPackageManagers:[{label:"pip",value:"pip"},{label:"poetry",value:"poetry"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],aiConfigLanguages:[{label:"Node.js (TypeScript)",value:"node"},{label:"Python",value:"python"}]}},5162:(e,a,n)=>{n.d(a,{Z:()=>r});n(7294);var i=n(6010);const t={tabItem:"tabItem_Ymn6"};var l=n(5893);function r(e){let{children:a,hidden:n,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.Z)(t.tabItem,r),hidden:n,children:a})}},4866:(e,a,n)=>{n.d(a,{Z:()=>k});var i=n(7294),t=n(6010),l=n(2466),r=n(6550),o=n(469),s=n(1980),c=n(7392),d=n(12);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:n}=e;return(0,i.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:n,attributes:i,default:t}}=e;return{value:a,label:n,attributes:i,default:t}}))}(n);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function g(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:n}=e;const t=(0,r.k6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,s._X)(l),(0,i.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(t.location.search);a.set(l,e),t.replace({...t.location,search:a.toString()})}),[l,t])]}function m(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,l=h(e),[r,s]=(0,i.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:a,tabValues:l}))),[c,u]=p({queryString:n,groupId:t}),[m,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,l]=(0,d.Nk)(n);return[t,(0,i.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),b=(()=>{const e=c??m;return g({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function x(e){let{className:a,block:n,selectedValue:i,selectValue:r,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const a=e.currentTarget,n=s.indexOf(a),t=o[n].value;t!==i&&(c(a),r(t))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;a=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;a=s[n]??s[s.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},a),children:o.map((e=>{let{value:a,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,ref:e=>s.push(e),onKeyDown:u,onClick:d,...l,className:(0,t.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===a}),children:n??a},a)}))})}function j(e){let{lazy:a,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function y(e){const a=m(e);return(0,v.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...a}),(0,v.jsx)(j,{...e,...a})]})}function k(e){const a=(0,f.Z)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(a))}},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>r});var i=n(7294);const t={},l=i.createContext(t);function r(e){const a=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:a},e.children)}}}]);