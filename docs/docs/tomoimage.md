---
title: TomoImage
description: Learn how to use the TomoImage class in the Tomo.PDF library to add image elements to your PDF documents.
keywords: ["Tomo.PDF", "PDF creation", "TomoImage", "image elements", "PDF library", ".NET PDF", "PDF document"]
author: Tomo Files
date: 2024-05-31
---

# TomoImage

## Introduction

The `TomoImage` class in the Tomo.PDF library allows you to add image elements to your PDF documents.

## Class Definition

Here is the definition of the `TomoImage` class:

```csharp
namespace Tomo.Core
{
    public class TomoImage : ITomoDocumentElement
    {
        public string FilePath { get; }
        public float X { get; }
        public float Y { get; }
        public float Width { get; }
        public float Height { get; }
        internal SKBitmap Bitmap { get; }

        public TomoImage(string filePath, float x, float y, float width, float height)
        {
            FilePath = filePath;
            X = x;
            Y = y;
            Width = width;
            Height = height;
            Bitmap = SKBitmap.Decode(filePath);
        }
    }
}
```

## Properties

- `FilePath` (string): The file path to the image file.
- `X` (float): The X-coordinate of the image position.
- `Y` (float): The Y-coordinate of the image position.
- `Width` (float): The width of the image.
- `Height` (float): The height of the image.

## Constructor

The `TomoImage` constructor allows you to initialize a new image element with a file path, position, and size:

```csharp
public TomoImage(string filePath, float x, float y, float width, float height)
```

### Parameters

- `filePath` (string): The file path to the image file.
- `x` (float): The X-coordinate of the image position.
- `y` (float): The Y-coordinate of the image position.
- `width` (float): The width of the image.
- `height` (float): The height of the image.

## Example Usage

Here is an example of how to use the `TomoImage` class to add an image to a PDF document:

```csharp
var builder = new TomoPdfBuilder();
var imageElement = new TomoImage("path/to/image.png", 100, 150, 200, 100);
builder.AddElement(imageElement);
builder.Build("Output.pdf");
```

In this example, a `TomoImage` element is created with the specified file path, position, and size. The image element is then added to the PDF builder, and the document is saved as "Output.pdf".
