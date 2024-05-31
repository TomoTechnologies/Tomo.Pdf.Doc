---
title: Creating a PDF with Extra Pages using Tomo.PDF
description: Learn how to create a PDF document with multiple pages using the Tomo.PDF library. This guide covers adding and managing extra pages in your PDFs.
keywords: ["Tomo.PDF", "PDF creation", "extra pages", "PDF library", ".NET PDF", "PDF document"]
author: Tomo Files
date: 2024-05-31
---

# Creating a PDF with Extra Pages using Tomo.PDF

## Introduction

This guide will walk you through creating a PDF document with multiple pages using the Tomo.PDF library. By following these steps, you will learn how to add and manage extra pages in your PDF documents.

## Step-by-Step Guide

### 1. Setup and Initialization

Start by defining the output file path and ensure any existing file is deleted to avoid conflicts:

```csharp
string filePath = "PdfWithExtraPage.pdf";

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

### 3. Adding Content to the First Page

Add text to the first page of the PDF document:

```csharp
builder.AddElement(new TomoText("Hello, PDF World!", 50, 50, textSize: 14));
```

### 4. Adding an Extra Page

To add an extra page to the document, use the following code:

```csharp
builder.AddElement(new TomoPage());
```

### 5. Adding Content to the Second Page

Add text to the second page of the PDF document:

```csharp
builder.AddElement(new TomoText("This is the second page!", 50, 50, textSize: 14));
```

### 6. Saving the PDF

Once all elements are added, build and save the PDF document:

```csharp
builder.Build(filePath);

// Output success message
Console.WriteLine($"PDF with extra page created successfully and saved to {filePath}.");
```

## Conclusion

By following these steps, you can create a PDF document with extra pages using Tomo.PDF. This example demonstrates the basic process of adding and managing multiple pages, providing a foundation for more complex PDF documents.
