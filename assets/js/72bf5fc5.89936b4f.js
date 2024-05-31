"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8025],{4528:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(4848),n=t(8453);const a={title:"TomoImage",description:"Learn how to use the TomoImage class in the Tomo.PDF library to add image elements to your PDF documents.",keywords:["Tomo.PDF","PDF creation","TomoImage","image elements","PDF library",".NET PDF","PDF document"],author:"Tomo Files",date:new Date("2024-05-31T00:00:00.000Z")},l="TomoImage",s={id:"tomoimage",title:"TomoImage",description:"Learn how to use the TomoImage class in the Tomo.PDF library to add image elements to your PDF documents.",source:"@site/docs/tomoimage.md",sourceDirName:".",slug:"/tomoimage",permalink:"/Tomo.Pdf.Doc/tomoimage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"TomoImage",description:"Learn how to use the TomoImage class in the Tomo.PDF library to add image elements to your PDF documents.",keywords:["Tomo.PDF","PDF creation","TomoImage","image elements","PDF library",".NET PDF","PDF document"],author:"Tomo Files",date:"2024-05-31T00:00:00.000Z"},sidebar:"docs",previous:{title:"TomoColor",permalink:"/Tomo.Pdf.Doc/tomocolor"}},r={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Class Definition",id:"class-definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Usage",id:"example-usage",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"tomoimage",children:"TomoImage"}),"\n",(0,i.jsx)(o.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(o.p,{children:["The ",(0,i.jsx)(o.code,{children:"TomoImage"})," class in the Tomo.PDF library allows you to add image elements to your PDF documents."]}),"\n",(0,i.jsx)(o.h2,{id:"class-definition",children:"Class Definition"}),"\n",(0,i.jsxs)(o.p,{children:["Here is the definition of the ",(0,i.jsx)(o.code,{children:"TomoImage"})," class:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-csharp",children:"namespace Tomo.Core\n{\n    public class TomoImage : ITomoDocumentElement\n    {\n        public string FilePath { get; }\n        public float X { get; }\n        public float Y { get; }\n        public float Width { get; }\n        public float Height { get; }\n        internal SKBitmap Bitmap { get; }\n\n        public TomoImage(string filePath, float x, float y, float width, float height)\n        {\n            FilePath = filePath;\n            X = x;\n            Y = y;\n            Width = width;\n            Height = height;\n            Bitmap = SKBitmap.Decode(filePath);\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(o.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"FilePath"})," (string): The file path to the image file."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"X"})," (float): The X-coordinate of the image position."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"Y"})," (float): The Y-coordinate of the image position."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"Width"})," (float): The width of the image."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"Height"})," (float): The height of the image."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"constructor",children:"Constructor"}),"\n",(0,i.jsxs)(o.p,{children:["The ",(0,i.jsx)(o.code,{children:"TomoImage"})," constructor allows you to initialize a new image element with a file path, position, and size:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-csharp",children:"public TomoImage(string filePath, float x, float y, float width, float height)\n"})}),"\n",(0,i.jsx)(o.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"filePath"})," (string): The file path to the image file."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"x"})," (float): The X-coordinate of the image position."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"y"})," (float): The Y-coordinate of the image position."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"width"})," (float): The width of the image."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"height"})," (float): The height of the image."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsxs)(o.p,{children:["Here is an example of how to use the ",(0,i.jsx)(o.code,{children:"TomoImage"})," class to add an image to a PDF document:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-csharp",children:'var builder = new TomoPdfBuilder();\nvar imageElement = new TomoImage("path/to/image.png", 100, 150, 200, 100);\nbuilder.AddElement(imageElement);\nbuilder.Build("Output.pdf");\n'})}),"\n",(0,i.jsxs)(o.p,{children:["In this example, a ",(0,i.jsx)(o.code,{children:"TomoImage"}),' element is created with the specified file path, position, and size. The image element is then added to the PDF builder, and the document is saved as "Output.pdf".']})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>l,x:()=>s});var i=t(6540);const n={},a=i.createContext(n);function l(e){const o=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(a.Provider,{value:o},e.children)}}}]);