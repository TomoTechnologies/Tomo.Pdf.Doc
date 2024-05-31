---
title: Creating a PDF with Image using Tomo.PDF
description: Learn how to create a PDF document with an image using the Tomo.PDF library. This guide covers adding images to your PDFs.
keywords: Tomo.PDF, PDF creation, images, PDF library, .NET PDF, PDF document
author: Tomo Files
date: 2024-05-31
---

# Creating a PDF with Image using Tomo.PDF

## Introduction

This guide will walk you through creating a PDF document with an image using the Tomo.PDF library. By following these steps, you will learn how to incorporate images into your PDF documents.

## Step-by-Step Guide

### 1. Setup and Initialization

Start by defining the output file path and ensure any existing file is deleted to avoid conflicts:

\`\`\`csharp
string filePath = "PdfWithImage.pdf";

if (File.Exists(filePath))
{
    File.Delete(filePath);
    Console.WriteLine($"Existing file {filePath} deleted.");
}
\`\`\`

### 2. Creating the PDF Builder

Initialize the \`TomoPdfBuilder\` which will be used to build the PDF document:

\`\`\`csharp
var builder = new TomoPdfBuilder();
\`\`\`

### 3. Adding an Image

To add an image to the PDF, specify the image file path, position, and size, then add it to the builder:

\`\`\`csharp
var imagePath = Path.Combine("Images", "tomologo.png"); // Path to your image file
if (File.Exists(imagePath))
{
    var image = new TomoImage(imagePath, 100, 100, 250, 70);
    builder.AddElement(image);
}
else
{
    Console.WriteLine($"Image file {imagePath} not found.");
}
\`\`\`

### 4. Saving the PDF

Once all elements are added, build and save the PDF document:

\`\`\`csharp
builder.Build(filePath);

// Output success message
Console.WriteLine($"PDF with image created successfully and saved to {filePath}.");
\`\`\`

## Conclusion

By following these steps, you can create a PDF document with images using Tomo.PDF. This example demonstrates the basic process of adding images, providing a foundation for more complex PDF customization.
