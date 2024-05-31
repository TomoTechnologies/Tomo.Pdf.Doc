---
id: create-basic-pdf
title: Creating a Basic PDF
description: Learn how to create a basic PDF document
keywords:
  - TomoPDF
  - Basic PDF
  - .NET PDF library
---

# Creating a Basic PDF

In this example, we will create a simple PDF document with some text using TomoPDF.

## Code Example

```csharp
using System;
using System.IO;
using Tomo.Core;
using Tomo.Pdf;

namespace TomoPdfSamples.Samples
{
    public class CreateBasicPdf
    {
        public void Run()
        {
            string filePath = "BasicSample.pdf";

            // Check if the file already exists and delete it if it does
            if (File.Exists(filePath))
            {
                File.Delete(filePath);
                Console.WriteLine($"Existing file {filePath} deleted.");
            }

            // Create a new PDF document builder
            var builder = new TomoPdfBuilder();

            // Add some text to the document
            builder.AddElement(new TomoText("Hello, PDF World!", 50, 50, textSize: 14));

            // Save the document to a file
            builder.Build(filePath);

            // Output success message
            Console.WriteLine($"Basic PDF sample created successfully and saved to {filePath}.");
        }
    }
}
