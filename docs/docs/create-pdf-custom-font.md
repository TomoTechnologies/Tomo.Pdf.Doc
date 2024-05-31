---
title: Creating a PDF with Custom Font
description: Learn how to create a PDF document with a custom font using the Tomo.PDF library. This guide covers incorporating custom fonts into your PDFs.
keywords: ["Tomo.PDF", "PDF creation", "custom font", "PDF library", ".NET PDF", "PDF document"]
author: Tomo Files
date: 2024-05-31
---

# Creating a PDF with Custom Font using Tomo.PDF

## Introduction

This guide will walk you through creating a PDF document with a custom font using the Tomo.PDF library. By following these steps, you will learn how to incorporate custom fonts into your PDF documents.

## Step-by-Step Guide

### 1. Setup and Initialization

Start by defining the output file path and ensure any existing file is deleted to avoid conflicts:

```csharp
string filePath = "PdfWithCustomFont.pdf";

if (File.Exists(filePath))
{
    File.Delete(filePath);
    Console.WriteLine($"Existing file {filePath} deleted.");
}
```

### 2. Creating the PDF Builder

Initialize the `TomoPdfBuilder` which will be used to build the PDF document:

```csharp
var builder = new TomoPdfBuilder();
```

### 3. Using a Custom Font

To add text with a custom font, specify the font file path, text content, position, and size, then add it to the builder:

```csharp
var fontPath = Path.Combine("Fonts", "Roboto-Regular.ttf"); // Path to your custom font file
if (File.Exists(fontPath))
{
    var text = new TomoText("Hello, custom font world!", 50, 50, fontPath: fontPath, textSize: 14);
    builder.AddElement(text);
}
else
{
    Console.WriteLine($"Font file {fontPath} not found.");
}
```

### 4. Saving the PDF

Once all elements are added, build and save the PDF document:

```csharp
builder.Build(filePath);

// Output success message
Console.WriteLine($"PDF with custom font created successfully and saved to {filePath}.");
```

## Conclusion

By following these steps, you can create a PDF document with custom fonts using Tomo.PDF. This example demonstrates the basic process of adding text with a custom font, providing a foundation for more complex PDF customization.
