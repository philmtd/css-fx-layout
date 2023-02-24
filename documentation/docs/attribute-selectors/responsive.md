---
sidebar_label: Responsive API
sidebar_position: 4
---

# Responsive Attribute API

This page describes how to use the responsive API with attribute selectors. To generally read about the responsive API see [this documentation page](../responsive).

## Configuration

The responsive API is opt-in, so you need to actually pass `true` as the parameter to all mixins which generate your selectors.

For example:

```scss
@include fx.attribute-selectors(true);
```

If you include other selectors (e.g. gap) you need to take care of passing the argument to these, too.

## Usage

If you use attribute selectors you can just add the media query name to every attribute in order to make it apply only when the specific media query is active.

The naming scheme is the following:

* `data-layout-[mediaQueryName]`
* `data-layout-align-[mediaQueryName]`
* `data-layout-gap-[mediaQueryName]`
* `data-flex-[mediaQueryName]`

With the media query name being for example `xs` or `lt-md`. See  [this page](../responsive) for a full list.

For example if you want to create a layout, which is a row per default but a column on small screens:

```html
<div data-layout="row"
<!-- highlight-next-line -->
     data-layout-lt-md="column">
    <span>One</span>
    <span>Two</span>
    <span>Three</span>
</div>
```