"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3202],{4533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=n(4848),i=n(8453);const s={title:"Creating a PDF with Custom Font",description:"Learn how to create a PDF document with a custom font using the Tomo.PDF library. This guide covers incorporating custom fonts into your PDFs.",keywords:["Tomo.PDF","PDF creation","custom font","PDF library",".NET PDF","PDF document"],author:"Tomo Files",date:new Date("2024-05-31T00:00:00.000Z")},a="Creating a PDF with Custom Font using Tomo.PDF",r={id:"create-pdf-custom-font",title:"Creating a PDF with Custom Font",description:"Learn how to create a PDF document with a custom font using the Tomo.PDF library. This guide covers incorporating custom fonts into your PDFs.",source:"@site/docs/create-pdf-custom-font.md",sourceDirName:".",slug:"/create-pdf-custom-font",permalink:"/Tomo.Pdf.Doc/create-pdf-custom-font",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Creating a PDF with Custom Font",description:"Learn how to create a PDF document with a custom font using the Tomo.PDF library. This guide covers incorporating custom fonts into your PDFs.",keywords:["Tomo.PDF","PDF creation","custom font","PDF library",".NET PDF","PDF document"],author:"Tomo Files",date:"2024-05-31T00:00:00.000Z"},sidebar:"docs",previous:{title:"Creating a PDF with Extra Pages",permalink:"/Tomo.Pdf.Doc/create-pdf-extra-pages"},next:{title:"Creating a PDF with Image",permalink:"/Tomo.Pdf.Doc/create-pdf-with-image"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"1. Setup and Initialization",id:"1-setup-and-initialization",level:3},{value:"2. Creating the PDF Builder",id:"2-creating-the-pdf-builder",level:3},{value:"3. Using a Custom Font",id:"3-using-a-custom-font",level:3},{value:"4. Saving the PDF",id:"4-saving-the-pdf",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"creating-a-pdf-with-custom-font-using-tomopdf",children:"Creating a PDF with Custom Font using Tomo.PDF"}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"This guide will walk you through creating a PDF document with a custom font using the Tomo.PDF library. By following these steps, you will learn how to incorporate custom fonts into your PDF documents."}),"\n",(0,o.jsx)(t.h2,{id:"step-by-step-guide",children:"Step-by-Step Guide"}),"\n",(0,o.jsx)(t.h3,{id:"1-setup-and-initialization",children:"1. Setup and Initialization"}),"\n",(0,o.jsx)(t.p,{children:"Start by defining the output file path and ensure any existing file is deleted to avoid conflicts:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'string filePath = "PdfWithCustomFont.pdf";\n\nif (File.Exists(filePath))\n{\n    File.Delete(filePath);\n    Console.WriteLine($"Existing file {filePath} deleted.");\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"2-creating-the-pdf-builder",children:"2. Creating the PDF Builder"}),"\n",(0,o.jsxs)(t.p,{children:["Initialize the ",(0,o.jsx)(t.code,{children:"TomoPdfBuilder"})," which will be used to build the PDF document:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:"var builder = new TomoPdfBuilder();\n"})}),"\n",(0,o.jsx)(t.h3,{id:"3-using-a-custom-font",children:"3. Using a Custom Font"}),"\n",(0,o.jsx)(t.p,{children:"To add text with a custom font, specify the font file path, text content, position, and size, then add it to the builder:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'var fontPath = Path.Combine("Fonts", "Roboto-Regular.ttf"); // Path to your custom font file\nif (File.Exists(fontPath))\n{\n    var text = new TomoText("Hello, custom font world!", 50, 50, fontPath: fontPath, textSize: 14);\n    builder.AddElement(text);\n}\nelse\n{\n    Console.WriteLine($"Font file {fontPath} not found.");\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"4-saving-the-pdf",children:"4. Saving the PDF"}),"\n",(0,o.jsx)(t.p,{children:"Once all elements are added, build and save the PDF document:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'builder.Build(filePath);\n\n// Output success message\nConsole.WriteLine($"PDF with custom font created successfully and saved to {filePath}.");\n'})}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(t.p,{children:"By following these steps, you can create a PDF document with custom fonts using Tomo.PDF. This example demonstrates the basic process of adding text with a custom font, providing a foundation for more complex PDF customization."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(6540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);