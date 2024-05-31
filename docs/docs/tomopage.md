---
title: TomoPage
description: Learn how to use the TomoPage class in the Tomo.PDF library to add new pages to your PDF documents.
keywords: ["Tomo.PDF", "PDF creation", "TomoPage", "PDF library", ".NET PDF", "PDF document"]
author: Tomo Files
date: 2024-05-31
---

# TomoPage

## Introduction

The `TomoPage` class in the Tomo.PDF library allows you to add new pages to your PDF documents.

## Class Definition

Here is the definition of the `TomoPage` class:

```csharp
namespace Tomo.Core
{
    public class TomoPage : ITomoDocumentElement
    {
    }
}
```

## Example Usage

Here is an example of how to use the `TomoPage` class to add a new page to a PDF document:

```csharp
var builder = new TomoPdfBuilder();
builder.AddElement(new TomoText("This is the first page", 100, 150));
builder.AddElement(new TomoPage());
builder.AddElement(new TomoText("This is the second page", 100, 150));
builder.Build("Output.pdf");
```

In this example, a `TomoPage` element is added to the PDF builder to create a second page. The document is saved as "Output.pdf".
