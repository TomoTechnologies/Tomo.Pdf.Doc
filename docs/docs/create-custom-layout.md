---
title: Creating Your Own Layout with Tomo.PDF
description: Learn how to create a custom PDF layout using the Tomo.PDF library. This guide covers adding rectangles, images, lines, and text to personalize your PDF documents.
keywords: ["Tomo.PDF", "PDF creation", "custom layout", "PDF library", ".NET PDF", "PDF document"]
author: Tomo Files
date: 2024-05-31
---

# Creating Your Own Layout with Tomo.PDF

## Introduction

This guide will walk you through creating a custom PDF layout using the Tomo.PDF library. We will cover adding basic elements such as rectangles, images, lines, and text. By the end of this tutorial, you will understand how to leverage Tomo.PDF to create a personalized PDF document.

## Step-by-Step Guide

### 1. Setup and Initialization

Start by defining the output file path and ensure any existing file is deleted to avoid conflicts:

\`\`\`csharp
string filePath = "BasicLayout.pdf";

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

### 3. Adding a Rectangle

To add a rectangle to your PDF, specify its position and dimensions, then add it to the builder:

\`\`\`csharp
int rectX = 50;
int rectY = 300;
int rectWidth = 500;
int rectHeight = 200;

builder.AddElement(new TomoRectangle(rectX, rectY, rectWidth, rectHeight, new TomoColor(0, 0, 0)));
\`\`\`

### 4. Inserting an Image

Next, you can add an image to the PDF. Ensure the image file exists, then specify its position and dimensions:

\`\`\`csharp
int logoWidth = 195;
int logoHeight = 55;
int logoX = rectX + rectWidth / 2 + (rectWidth / 2 - logoWidth) / 2;
int logoY = rectY + (rectHeight - logoHeight) / 2;

var logoPath = Path.Combine("Images", "tomologo.png");
if (File.Exists(logoPath))
{
    var logo = new TomoImage(logoPath, logoX, logoY, logoWidth, logoHeight);
    builder.AddElement(logo);
}
else
{
    Console.WriteLine($"Logo file {logoPath} not found.");
}
\`\`\`

### 5. Drawing a Line

To draw a vertical line, specify the start and end points and add the line to the builder:

\`\`\`csharp
int lineX = rectX + rectWidth / 2;
int lineY1 = rectY + 20;
int lineY2 = rectY + rectHeight - 20;
builder.AddElement(new TomoLine(lineX, lineY1, lineX, lineY2, new TomoColor(0, 0, 0)));
\`\`\`

### 6. Adding Text

Finally, add text elements to your PDF by specifying the text content, position, and size:

\`\`\`csharp
int textX = rectX + 20;
int textY = rectY + rectHeight / 2 + 10;
builder.AddElement(new TomoText("Tomo.PDF", textX, textY, textSize: 18));
builder.AddElement(new TomoText("By Tomo Files", textX, textY + 20, textSize: 14));
\`\`\`

### 7. Saving the PDF

Once all elements are added, build and save the PDF document:

\`\`\`csharp
builder.Build(filePath);

// Output success message
Console.WriteLine($"Basic PDF Layout sample created successfully and saved to {filePath}.");
\`\`\`

## Conclusion

By following these steps, you can create a customized PDF layout using Tomo.PDF. This example demonstrates the basic process of adding different elements, giving you the foundation to build more complex layouts as needed.
