[![Build Status](https://travis-ci.com/philmtd/css-fx-layout.svg?token=eyZ7Sz2wcY1Ps8Nx2ib7&branch=master)](https://travis-ci.com/philmtd/css-fx-layout) [![npm version](https://badge.fury.io/js/css-fx-layout.svg)](https://www.npmjs.com/package/css-fx-layout)

# css-fx-layout
This is a lightweight SCSS/CSS only flexbox library inspired by Angular's [flex-layout](https://github.com/angular/flex-layout).

## Features

This library gives you the option between using data-attributes or CSS classes. Both options give you the same features but the CSS classes can be more verbose when you want a more complex layout.
Check out the [Wiki](https://github.com/philmtd/css-fx-layout/wiki) for a detailed documentation.

### HTML data-attributes

Using the data attributes is the easiest way to use this library:

* `data-layout`, `data-layout-align` HTML attributes to be used to control the flexbox container
* `data-layout-gap` attribute to add margin between the elements in a flex container
* `data-hide-` and `data-show-` attributes which can be used to show/hide elements depending on the screen size

### CSS classes

Using the CSS classes is more verbose but there are reasons why one might prefer this:

* `.fx-layout-` and `.fx-align-` CSS classes to control the flexbox container
* `.fx-gap-` CSS classes to add margin between the elements in a flex container
* `.show-` and `.hide-` CSS classes which can be used to show/hide elements depending on the screen size

## Examples

### Layout
This is the most simple example. It will make the div a flex container and align the three spans in a row:
````html
<div data-layout="row">
    <span>One</span>
    <span>Two</span>
    <span>Three</span>
</div>
````

Here's the same example using the CSS classes:
````html
<div class="fx-layout-row">
    <span>One</span>
    <span>Two</span>
    <span>Three</span>
</div>
````

An advanced example that aligns the items in reverse order with a margin of four pixels and vertically centered:
````html
<div data-layout="row reverse" data-layout-align="start center" data-layout-gap="4px">
    <span>One</span>
    <span>Two</span>
    <span>Three</span>
</div>
````

The same example using CSS classes:
````html
<div class="fx-layout-row fx-layout-reverse fx-align--start-x fx-align--x-center fx-gap--4px">
    <span>One</span>
    <span>Two</span>
    <span>Three</span>
</div>
````

### Show/Hide

This will hide the first span on phones and show the second span only on desktop sizes. The third span is always visible.
```html
<div>
    <span data-hide-phone>One</span>
    <span data-show-desktop>Two</span>
    <span>Three</span>
</div>
```

The same example using CSS classes:
```html
<div>
    <span class="hide-phone">One</span>
    <span class="show-desktop">Two</span>
    <span>Three</span>
</div>
```

## Installation

### npm package (SCSS)
`npm i -s css-fx-layout`
 
### Compiled CSS
Download the minified CSS from the [releases page](https://github.com/philmtd/css-fx-layout/releases/).

## Why?

At work I use Angular (and Angular flex-layout) a lot and I've come to like the convenient layout directives Angular flex-layout offers. 
Recently I found myself creating a plain static website and I wanted to make sure it works without unnecessary JavaScript. As I didn't use Angular or any other JS framework,
I had to either layout everything in (S)CSS or create a library that tries to provide a similar experience to what I liked from Angular's flex-layout. This was when I created this.
