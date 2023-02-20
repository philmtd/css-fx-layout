---
sidebar_label: "About"
sidebar_position: 1
---

# About css-fx-layout

`css-fx-layout` is a lightweight and modular SCSS flexbox library. It is inspired by Angular's [Flex-Layout](https://github.com/angular/flex-layout) and can
replace the most popular functions of the (by now deprecated) Angular library.

## Features

This library gives you the option between using CSS classes or data-attributes as selectors in your HTML. Both options give you the same features but the CSS
classes can be more verbose when you want a more complex layout.

### CSS class selectors

Using the CSS classes is more verbose and the more "CSS-y" way of styling your HTML:

* `.fx-layout-` and `.fx-align-`: CSS classes to control the flexbox container
* `.fx-gap--`: CSS classes to add gaps between the elements in a flex container
* `.show-` and `.hide-`: CSS classes which can be used to show/hide elements depending on the screen size
* `.fx-flex` and `.fx-glex-grow`: Classes to control flex behaviour of an element

### HTML data-attribute selectors

Using the data attributes is the easiest way to use this library and easier to migrate to from Angular Flex-Layout:

* `data-layout` and `data-layout-align`: HTML attributes to be used to control the flexbox container
* `data-layout-gap`: attribute to add gaps between the elements in a flex container
* `data-hide-` and `data-show-`: attributes which can be used to show/hide elements depending on the screen size
* `data-fx-flex` and `data-fx-flex-grow`: Control flex behaviour of an element

### Responsive API

The library provides a responsive API which allows to create different layouts for different screen sizes using known breakpoints
like `xs`, `sm`, `md`, `lg`, `xl` and including `lt-` and `gt-` variations of them.

### SCSS Mixins

Many of the functions here are also available as mixins to accompany this library or to create your own customized selectors.

## Why? What problem does this library solve?

Initially I created this library because I liked the convenient syntax of Angular Flex-Layout and wanted to use it in non-Angular
projects and without JavaScript.

By now Angular Flex-Layout has been deprecated and this library can be a replacement for most of the popular parts.

## No pre-compiled CSS

There are no pre-compiled CSS files available for css-fx-layout 2 and above.
Version 1 releases provided minified pre-compiled CSS files, although v1 was not as feature-rich as the latest versions. If you are interested in them you can
find and download them from the [releases page](https://github.com/philmtd/css-fx-layout/releases/).

If you require pre-compiled CSS in your project you can compile it yourself easily by following the [Getting Started](./getting-started) guide and configuring the selectors you
want to include in your pre-compiled CSS.