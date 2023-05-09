---
sidebar_label: Show/Hide API
sidebar_position: 5
---

# Show/Hide Attribute API

The show/hide API allows you to control the visibility of elements depending on the size of the screen.
This page describes how to use the show/hide API with attribute selectors. 

## Usage

The attributes have the following naming scheme:

* `data-show-[mediaQueryName]`
* `data-hide-[mediaQueryName]`
* `data-hide`

With `mediaQueryName` being the name of one of the [available media queries](../responsive#media-queries).

:::caution Caution when using `data-show`

Due to the way `data-show` works, it can only be used on an element once and never in combination with `data-hide`. If you require fine-grained control over
when an element should be visible or not please only use `data-hide`! If you do not follow this advice your resulting layout will most likely not be
what you wanted.

:::

## Example

```html
<div data-show-gt-sm>I will only be visible on screens wider than 959px.</div>
```

:::info

While the responsive API generally is opt-in, the show/hide selectors are always available, even if you choose to not use the responsive API.

:::