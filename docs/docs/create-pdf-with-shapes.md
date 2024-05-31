---
title: Creating a PDF with Shapes
description: Learn how to create a PDF document with various shapes using the Tomo.PDF library. This guide covers adding circles, rectangles, and lines to your PDFs.
keywords: ["Tomo.PDF", "PDF creation", "shapes", "PDF library", ".NET PDF", "PDF document"]
author: Tomo Files
date: 2024-05-31
---

# Creating a PDF with Shapes using Tomo.PDF

## Introduction

This guide will walk you through creating a PDF document with various shapes using the Tomo.PDF library. By following these steps, you will learn how to incorporate circles, rectangles, and lines into your PDF documents.

## Step-by-Step Guide

### 1. Setup and Initialization

Start by defining the output file path and ensure any existing file is deleted to avoid conflicts:

```csharp
string filePath = "PdfWithShapes.pdf";

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

### 3. Adding Shapes

To add shapes to the PDF, specify their types, positions, and sizes, then add them to the builder:

```csharp
builder.AddElement(new TomoCircle(100, 100, 50, new TomoColor(0, 0, 0))); // Circle at (100, 100) with radius 50
builder.AddElement(new TomoRectangle(200, 100, 100, 50, new TomoColor(0, 0, 0))); // Rectangle at (200, 100) with width 100 and height 50
builder.AddElement(new TomoLine(50, 50, 150, 150)); // Line from (50, 50) to (150, 150)
```

### 4. Saving the PDF

Once all elements are added, build and save the PDF document:

```csharp
builder.Build(filePath);

// Output success message
Console.WriteLine($"PDF with shapes created successfully and saved to {filePath}.");
```

## Conclusion

By following these steps, you can create a PDF document with various shapes using Tomo.PDF. This example demonstrates the basic process of adding circles, rectangles, and lines, providing a foundation for more complex PDF customization.
