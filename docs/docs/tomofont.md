---
title: TomoFont
description: Learn how to use the TomoFont class in the Tomo.PDF library to define fonts for your PDF text elements.
keywords: ["Tomo.PDF", "PDF creation", "TomoFont", "font elements", "PDF library", ".NET PDF", "PDF document"]
author: Tomo Files
date: 2024-05-31
---

# TomoFont

## Introduction

The `TomoFont` class in the Tomo.PDF library allows you to define fonts for your PDF text elements.

## Class Definition

Here is the definition of the `TomoFont` class:

```csharp
namespace Tomo.Core
{
    public class TomoFont
    {
        public string FilePath { get; }
        public float Size { get; }

        public TomoFont(string filePath, float size)
        {
            FilePath = filePath;
            Size = size;
        }
    }
}
```

## Properties

- `FilePath` (string): The file path to the font file.
- `Size` (float): The size of the font.

## Constructor

The `TomoFont` constructor allows you to initialize a new font with a file path and size:

```csharp
public TomoFont(string filePath, float size)
```

### Parameters

- `filePath` (string): The file path to the font file.
- `size` (float): The size of the font.

## Example Usage

Here is an example of how to use the `TomoFont` class to define a font:

```csharp
var font = new TomoFont("path/to/font.ttf", 12);
```

In this example, a `TomoFont` object is created with the specified file path and size.
