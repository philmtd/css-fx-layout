---
sidebar_label: Responsive API
sidebar_position: 4
---

# Responsive Classes API

This page describes how to use the responsive API with class selectors. To generally read about the responsive API see [this documentation page](../responsive).

## Configuration

The responsive API is opt-in, so you need to actually pass `true` as the parameter to all mixins which generate your selectors.

For example:

```scss
@include fx.class-selectors(true);
```

If you include other selectors (e.g. gap) you need to take care of passing the argument to these, too.

## Usage

If you use class selectors you can just add the media query name to every class in order to make it apply only when the specific media query is active.

The naming scheme is the following:

* `fx-layout-[direction]--[mediaQueryName]`
* `fx-align--[mainAxis]-*--[mediaQueryName]`
* `fx-align--*-[crossAxis]--[mediaQueryName]`
* `fx-gap--[gapSize]--[mediaQueryName]`
* `fx-flex-[flex]--[mediaQueryName]`
* `fx-flex-fill--[mediaQueryName]`
* `fx-flex-align--[fillSelector]--[mediaQueryName]`

With the media query name being for example `xs` or `lt-md`. See  [this page](../responsive) for a full list.

For example if you want to create a layout, which is a row per default but a column on small screens:

```html
<div class="fx-layout-row 
<!-- highlight-next-line -->
            fx-layout-column--lt-md">
	<span>One</span>
	<span>Two</span>
	<span>Three</span>
</div>
```