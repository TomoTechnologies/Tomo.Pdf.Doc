---
title: TomoText Class in Tomo.PDF
description: Learn how to use the TomoText class in the Tomo.PDF library to add text elements to your PDF documents.
keywords: ["Tomo.PDF", "PDF creation", "TomoText", "text elements", "PDF library", ".NET PDF", "PDF document"]
author: Tomo Files
date: 2024-05-31
---

# TomoText Class in Tomo.PDF

## Introduction

The `TomoText` class in the Tomo.PDF library allows you to add text elements to your PDF documents. This class provides various properties to customize the text, including position, font, size, and color.

## Class Definition

Here is the definition of the `TomoText` class:

```csharp
namespace Tomo.Core
{
    public class TomoText : ITomoDocumentElement
    {
        public string Text { get; }
        public float X { get; }
        public float Y { get; }
        public string? FontPath { get; }
        public string? FontName { get; }
        public float TextSize { get; }
        public TomoColor Color { get; }

        public TomoText(string text, float x, float y, string? fontPath = null, string? fontName = null, float textSize = 24, TomoColor? color = null)
        {
            Text = text;
            X = x;
            Y = y;
            FontPath = fontPath;
            FontName = fontName;
            TextSize = textSize;
            Color = color ?? new TomoColor(0, 0, 0);
        }
    }
}
```

## Properties

- `Text` (string): The text content to be displayed.
- `X` (float): The X-coordinate of the text position.
- `Y` (float): The Y-coordinate of the text position.
- `FontPath` (string?, optional): The file path to a custom font.
- `FontName` (string?, optional): The name of the font.
- `TextSize` (float): The size of the text. Default is 24.
- `Color` (TomoColor): The color of the text. Default is black.

## Constructor

The `TomoText` constructor allows you to initialize a new text element with various customization options:

```csharp
public TomoText(string text, float x, float y, string? fontPath = null, string? fontName = null, float textSize = 24, TomoColor? color = null)
```

### Parameters

- `text` (string): The text content to be displayed.
- `x` (float): The X-coordinate of the text position.
- `y` (float): The Y-coordinate of the text position.
- `fontPath` (string?, optional): The file path to a custom font.
- `fontName` (string?, optional): The name of the font.
- `textSize` (float, optional): The size of the text. Default is 24.
- `color` (TomoColor?, optional): The color of the text. Default is black.

## Example Usage

Here is an example of how to use the `TomoText` class to add text to a PDF document:

```csharp
var builder = new TomoPdfBuilder();
var textElement = new TomoText("Hello, PDF World!", 100, 150, textSize: 18, color: new TomoColor(255, 0, 0));
builder.AddElement(textElement);
builder.Build("Output.pdf");
```

In this example, a `TomoText` element is created with the text "Hello, PDF World!" positioned at (100, 150) with a text size of 18 and red color. The text element is then added to the PDF builder, and the document is saved as "Output.pdf".