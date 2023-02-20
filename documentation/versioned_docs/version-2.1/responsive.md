---
sidebar_label: Responsive API
sidebar_position: 5
---

# Responsive API

This page describes `css-fx-layout`'s responsive API.

The responsive API allows you to create different layouts for different screen sizes using breakpoint names like `xs`, `sm` or `xl`.

:::tip Migration from Angular Flex-Layout

The responsive API breakpoints and media queries are equal to those used in Angular Flex-Layout.

:::

## Breakpoints

The fx-layout media queries use the following breakpoints:

| Name | Breakpoint |
|------|------------|
| xs   | 599px      |
| sm   | 969px      |
| md   | 1279px     |
| lg   | 1919px     |
| xl   | 5000px     |

## Media Queries

These breakpoints result in the following media queries:

| Name  | Media Query                                              |
|-------|----------------------------------------------------------|
| xs    | `screen and (max-width: 599px)`                          |
| sm    | `screen and (min-width: 600px) and (max-width: 959px)`   |
| md    | `screen and (min-width: 960px) and (max-width: 1279px)`  |
| lg    | `screen and (min-width: 1280px) and (max-width: 1919px)` |
| xl    | `screen and (min-width: 1920px) and (max-width: 5000px)` |
| lt-sm | `screen and (max-width: 599px)`                          |
| lt-md | `screen and (max-width: 959px)`                          |
| lt-lg | `screen and (max-width: 1279px)`                         |
| lt-xl | `screen and (max-width: 1919px)`                         |
| gt-xs | `screen and (min-width: 600px)`                          |
| gt-sm | `screen and (min-width: 960px)`                          |
| gt-md | `screen and (min-width: 1280px)`                         |
| gt-lg | `screen and (min-width: 1920px)`                         |

## Mixins

You also get access to mixins named like the media break points, which you can use to apply your own styles based on the respective screen size:

```scss
@use "css-fx-layout" as fx;

// This will make the div blue on xs sized screens
div {
	background-color: red;
	@include fx.xs {
		background-color: blue;
	}
}
```

## Usage

To learn how to use the responsive API please refer to the following pages:

* [Attribute selector responsive API](./attribute-selectors/responsive.md)
* [Class selector responsive API](./class-selectors/responsive.md)