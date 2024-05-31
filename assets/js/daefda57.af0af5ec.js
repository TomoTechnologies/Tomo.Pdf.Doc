"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4262],{5166:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(4848),t=n(8453);const l={title:"TomoColor",description:"Learn how to use the TomoColor struct in the Tomo.PDF library to define colors for your PDF elements.",keywords:["Tomo.PDF","PDF creation","TomoColor","color elements","PDF library",".NET PDF","PDF document"],author:"Tomo Files",date:new Date("2024-05-31T00:00:00.000Z")},c="TomoColor",i={id:"tomocolor",title:"TomoColor",description:"Learn how to use the TomoColor struct in the Tomo.PDF library to define colors for your PDF elements.",source:"@site/docs/tomocolor.md",sourceDirName:".",slug:"/tomocolor",permalink:"/Tomo.Pdf.Doc/tomocolor",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"TomoColor",description:"Learn how to use the TomoColor struct in the Tomo.PDF library to define colors for your PDF elements.",keywords:["Tomo.PDF","PDF creation","TomoColor","color elements","PDF library",".NET PDF","PDF document"],author:"Tomo Files",date:"2024-05-31T00:00:00.000Z"},sidebar:"docs",previous:{title:"TomoFont",permalink:"/Tomo.Pdf.Doc/tomofont"},next:{title:"TomoImage",permalink:"/Tomo.Pdf.Doc/tomoimage"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Struct Definition",id:"struct-definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Usage",id:"example-usage",level:2}];function a(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"tomocolor",children:"TomoColor"}),"\n",(0,r.jsx)(o.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"TomoColor"})," struct in the Tomo.PDF library allows you to define colors for your PDF elements."]}),"\n",(0,r.jsx)(o.h2,{id:"struct-definition",children:"Struct Definition"}),"\n",(0,r.jsxs)(o.p,{children:["Here is the definition of the ",(0,r.jsx)(o.code,{children:"TomoColor"})," struct:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-csharp",children:"namespace Tomo.Core\n{\n    public struct TomoColor\n    {\n        public byte Red { get; }\n        public byte Green { get; }\n        public byte Blue { get; }\n        public byte Alpha { get; }\n\n        public TomoColor(byte red, byte green, byte blue, byte alpha = 255)\n        {\n            Red = red;\n            Green = green;\n            Blue = blue;\n            Alpha = alpha;\n        }\n\n        internal SKColor ToSKColor() => new SKColor(Red, Green, Blue, Alpha);\n    }\n}\n"})}),"\n",(0,r.jsx)(o.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Red"})," (byte): The red component of the color."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Green"})," (byte): The green component of the color."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Blue"})," (byte): The blue component of the color."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Alpha"})," (byte): The alpha (transparency) component of the color. Default is 255 (fully opaque)."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"constructor",children:"Constructor"}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"TomoColor"})," constructor allows you to initialize a new color with various components:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-csharp",children:"public TomoColor(byte red, byte green, byte blue, byte alpha = 255)\n"})}),"\n",(0,r.jsx)(o.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"red"})," (byte): The red component of the color."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"green"})," (byte): The green component of the color."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"blue"})," (byte): The blue component of the color."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"alpha"})," (byte, optional): The alpha (transparency) component of the color. Default is 255 (fully opaque)."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsxs)(o.p,{children:["Here is an example of how to use the ",(0,r.jsx)(o.code,{children:"TomoColor"})," struct to define a color:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-csharp",children:"var color = new TomoColor(255, 0, 0); // Red color\n"})}),"\n",(0,r.jsxs)(o.p,{children:["In this example, a ",(0,r.jsx)(o.code,{children:"TomoColor"})," object is created with red, green, and blue components. The resulting color is red."]})]})}function h(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>i});var r=n(6540);const t={},l=r.createContext(t);function c(e){const o=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(l.Provider,{value:o},e.children)}}}]);