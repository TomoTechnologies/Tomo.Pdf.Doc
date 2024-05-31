---
title: TomoCanvas
description: Learn how to use the TomoCanvas class in the Tomo.PDF library to work with canvas elements in your PDF documents.
keywords: ["Tomo.PDF", "PDF creation", "TomoCanvas", "canvas elements", "PDF library", ".NET PDF", "PDF document"]
author: Tomo Files
date: 2024-05-31
---

# TomoCanvas

## Introduction

The `TomoCanvas` class in the Tomo.PDF library allows you to work with canvas elements in your PDF documents.

## Class Definition

Here is the definition of the `TomoCanvas` class:

```csharp
namespace Tomo.Core
{
    internal class TomoCanvas : SKCanvas
    {
        public TomoCanvas(SKCanvas canvas) : base(new SKBitmap())
        {
        }
    }
}
```

## Example Usage

Here is an example of how to use the `TomoCanvas` class:

```csharp
var canvas = new TomoCanvas(new SKCanvas());
```

In this example, a `TomoCanvas` object is created using an `SKCanvas` object.
