"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4282],{1619:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=n(4848),s=n(8453);const o={title:"Creating a PDF with Shapes",description:"Learn how to create a PDF document with various shapes using the Tomo.PDF library. This guide covers adding circles, rectangles, and lines to your PDFs.",keywords:["Tomo.PDF","PDF creation","shapes","PDF library",".NET PDF","PDF document"],author:"Tomo Files",date:new Date("2024-05-31T00:00:00.000Z")},a="Creating a PDF with Shapes using Tomo.PDF",d={id:"create-pdf-with-shapes",title:"Creating a PDF with Shapes",description:"Learn how to create a PDF document with various shapes using the Tomo.PDF library. This guide covers adding circles, rectangles, and lines to your PDFs.",source:"@site/docs/create-pdf-with-shapes.md",sourceDirName:".",slug:"/create-pdf-with-shapes",permalink:"/Tomo.Pdf.Doc/create-pdf-with-shapes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Creating a PDF with Shapes",description:"Learn how to create a PDF document with various shapes using the Tomo.PDF library. This guide covers adding circles, rectangles, and lines to your PDFs.",keywords:["Tomo.PDF","PDF creation","shapes","PDF library",".NET PDF","PDF document"],author:"Tomo Files",date:"2024-05-31T00:00:00.000Z"},sidebar:"docs",previous:{title:"Creating a PDF with Image",permalink:"/Tomo.Pdf.Doc/create-pdf-with-image"},next:{title:"TomoText",permalink:"/Tomo.Pdf.Doc/tomotext"}},r={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"1. Setup and Initialization",id:"1-setup-and-initialization",level:3},{value:"2. Creating the PDF Builder",id:"2-creating-the-pdf-builder",level:3},{value:"3. Adding Shapes",id:"3-adding-shapes",level:3},{value:"4. Saving the PDF",id:"4-saving-the-pdf",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"creating-a-pdf-with-shapes-using-tomopdf",children:"Creating a PDF with Shapes using Tomo.PDF"}),"\n",(0,t.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(i.p,{children:"This guide will walk you through creating a PDF document with various shapes using the Tomo.PDF library. By following these steps, you will learn how to incorporate circles, rectangles, and lines into your PDF documents."}),"\n",(0,t.jsx)(i.h2,{id:"step-by-step-guide",children:"Step-by-Step Guide"}),"\n",(0,t.jsx)(i.h3,{id:"1-setup-and-initialization",children:"1. Setup and Initialization"}),"\n",(0,t.jsx)(i.p,{children:"Start by defining the output file path and ensure any existing file is deleted to avoid conflicts:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:'string filePath = "PdfWithShapes.pdf";\n\nif (File.Exists(filePath))\n{\n    File.Delete(filePath);\n    Console.WriteLine($"Existing file {filePath} deleted.");\n}\n'})}),"\n",(0,t.jsx)(i.h3,{id:"2-creating-the-pdf-builder",children:"2. Creating the PDF Builder"}),"\n",(0,t.jsxs)(i.p,{children:["Initialize the ",(0,t.jsx)(i.code,{children:"TomoPdfBuilder"})," which will be used to build the PDF document:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:"var builder = new TomoPdfBuilder();\n"})}),"\n",(0,t.jsx)(i.h3,{id:"3-adding-shapes",children:"3. Adding Shapes"}),"\n",(0,t.jsx)(i.p,{children:"To add shapes to the PDF, specify their types, positions, and sizes, then add them to the builder:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:"builder.AddElement(new TomoCircle(100, 100, 50, new TomoColor(0, 0, 0))); // Circle at (100, 100) with radius 50\nbuilder.AddElement(new TomoRectangle(200, 100, 100, 50, new TomoColor(0, 0, 0))); // Rectangle at (200, 100) with width 100 and height 50\nbuilder.AddElement(new TomoLine(50, 50, 150, 150)); // Line from (50, 50) to (150, 150)\n"})}),"\n",(0,t.jsx)(i.h3,{id:"4-saving-the-pdf",children:"4. Saving the PDF"}),"\n",(0,t.jsx)(i.p,{children:"Once all elements are added, build and save the PDF document:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:'builder.Build(filePath);\n\n// Output success message\nConsole.WriteLine($"PDF with shapes created successfully and saved to {filePath}.");\n'})}),"\n",(0,t.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(i.p,{children:"By following these steps, you can create a PDF document with various shapes using Tomo.PDF. This example demonstrates the basic process of adding circles, rectangles, and lines, providing a foundation for more complex PDF customization."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>d});var t=n(6540);const s={},o=t.createContext(s);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);