"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4491],{9149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var i=t(4848),a=t(8453);const d={title:"Creating a PDF with Extra Pages using Tomo.PDF",description:"Learn how to create a PDF document with multiple pages using the Tomo.PDF library. This guide covers adding and managing extra pages in your PDFs.",keywords:["Tomo.PDF","PDF creation","extra pages","PDF library",".NET PDF","PDF document"],author:"Tomo Files",date:new Date("2024-05-31T00:00:00.000Z")},o="Creating a PDF with Extra Pages using Tomo.PDF",s={id:"create-pdf-extra-pages",title:"Creating a PDF with Extra Pages using Tomo.PDF",description:"Learn how to create a PDF document with multiple pages using the Tomo.PDF library. This guide covers adding and managing extra pages in your PDFs.",source:"@site/docs/create-pdf-extra-pages.md",sourceDirName:".",slug:"/create-pdf-extra-pages",permalink:"/Tomo.Pdf.Doc/create-pdf-extra-pages",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Creating a PDF with Extra Pages using Tomo.PDF",description:"Learn how to create a PDF document with multiple pages using the Tomo.PDF library. This guide covers adding and managing extra pages in your PDFs.",keywords:["Tomo.PDF","PDF creation","extra pages","PDF library",".NET PDF","PDF document"],author:"Tomo Files",date:"2024-05-31T00:00:00.000Z"}},r={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"1. Setup and Initialization",id:"1-setup-and-initialization",level:3},{value:"2. Creating the PDF Builder",id:"2-creating-the-pdf-builder",level:3},{value:"3. Adding Content to the First Page",id:"3-adding-content-to-the-first-page",level:3},{value:"4. Adding an Extra Page",id:"4-adding-an-extra-page",level:3},{value:"5. Adding Content to the Second Page",id:"5-adding-content-to-the-second-page",level:3},{value:"6. Saving the PDF",id:"6-saving-the-pdf",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"creating-a-pdf-with-extra-pages-using-tomopdf",children:"Creating a PDF with Extra Pages using Tomo.PDF"}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This guide will walk you through creating a PDF document with multiple pages using the Tomo.PDF library. By following these steps, you will learn how to add and manage extra pages in your PDF documents."}),"\n",(0,i.jsx)(n.h2,{id:"step-by-step-guide",children:"Step-by-Step Guide"}),"\n",(0,i.jsx)(n.h3,{id:"1-setup-and-initialization",children:"1. Setup and Initialization"}),"\n",(0,i.jsx)(n.p,{children:"Start by defining the output file path and ensure any existing file is deleted to avoid conflicts:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'string filePath = "PdfWithExtraPage.pdf";\n\nif (File.Exists(filePath))\n{\n    File.Delete(filePath);\n    Console.WriteLine($"Existing file {filePath} deleted.");\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-creating-the-pdf-builder",children:"2. Creating the PDF Builder"}),"\n",(0,i.jsxs)(n.p,{children:["Initialize the ",(0,i.jsx)(n.code,{children:"TomoPdfBuilder"})," which will be used to build the PDF document:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"var builder = new TomoPdfBuilder();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-adding-content-to-the-first-page",children:"3. Adding Content to the First Page"}),"\n",(0,i.jsx)(n.p,{children:"Add text to the first page of the PDF document:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'builder.AddElement(new TomoText("Hello, PDF World!", 50, 50, textSize: 14));\n'})}),"\n",(0,i.jsx)(n.h3,{id:"4-adding-an-extra-page",children:"4. Adding an Extra Page"}),"\n",(0,i.jsx)(n.p,{children:"To add an extra page to the document, use the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"builder.AddElement(new TomoPage());\n"})}),"\n",(0,i.jsx)(n.h3,{id:"5-adding-content-to-the-second-page",children:"5. Adding Content to the Second Page"}),"\n",(0,i.jsx)(n.p,{children:"Add text to the second page of the PDF document:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'builder.AddElement(new TomoText("This is the second page!", 50, 50, textSize: 14));\n'})}),"\n",(0,i.jsx)(n.h3,{id:"6-saving-the-pdf",children:"6. Saving the PDF"}),"\n",(0,i.jsx)(n.p,{children:"Once all elements are added, build and save the PDF document:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'builder.Build(filePath);\n\n// Output success message\nConsole.WriteLine($"PDF with extra page created successfully and saved to {filePath}.");\n'})}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"By following these steps, you can create a PDF document with extra pages using Tomo.PDF. This example demonstrates the basic process of adding and managing multiple pages, providing a foundation for more complex PDF documents."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(6540);const a={},d=i.createContext(a);function o(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);