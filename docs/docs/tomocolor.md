---
title: TomoColor
description: Learn how to use the TomoColor struct in the Tomo.PDF library to define colors for your PDF elements.
keywords: ["Tomo.PDF", "PDF creation", "TomoColor", "color elements", "PDF library", ".NET PDF", "PDF document"]
author: Tomo Files
date: 2024-05-31
---

# TomoColor

## Introduction

The `TomoColor` struct in the Tomo.PDF library allows you to define colors for your PDF elements.

## Struct Definition

Here is the definition of the `TomoColor` struct:

```csharp
namespace Tomo.Core
{
    public struct TomoColor
    {
        public byte Red { get; }
        public byte Green { get; }
        public byte Blue { get; }
        public byte Alpha { get; }

        public TomoColor(byte red, byte green, byte blue, byte alpha = 255)
        {
            Red = red;
            Green = green;
            Blue = blue;
            Alpha = alpha;
        }

        internal SKColor ToSKColor() => new SKColor(Red, Green, Blue, Alpha);
    }
}
```

## Properties

- `Red` (byte): The red component of the color.
- `Green` (byte): The green component of the color.
- `Blue` (byte): The blue component of the color.
- `Alpha` (byte): The alpha (transparency) component of the color. Default is 255 (fully opaque).

## Constructor

The `TomoColor` constructor allows you to initialize a new color with various components:

```csharp
public TomoColor(byte red, byte green, byte blue, byte alpha = 255)
```

### Parameters

- `red` (byte): The red component of the color.
- `green` (byte): The green component of the color.
- `blue` (byte): The blue component of the color.
- `alpha` (byte, optional): The alpha (transparency) component of the color. Default is 255 (fully opaque).

## Example Usage

Here is an example of how to use the `TomoColor` struct to define a color:

```csharp
var color = new TomoColor(255, 0, 0); // Red color
```

In this example, a `TomoColor` object is created with red, green, and blue components. The resulting color is red.
