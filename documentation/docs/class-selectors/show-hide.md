---
sidebar_label: Show/Hide API
sidebar_position: 5
---

# Show/Hide Class API

The show/hide API allows you to control the visibility of elements depending on the size of the screen.
This page describes how to use the show/hide API with class selectors. 

## Usage

The classes have the following naming scheme:

* `show-[mediaQueryName]`
* `hide-[mediaQueryName]`

With `mediaQueryName` being the name of one of the [available media queries](../responsive#media-queries).

## Example

```html
<div class="show-gt-sm">I will only be visible on screens wider than 959px.</div>
```

:::info

While the responsive API generally is opt-in, the show/hide selectors are always available, even if you choose to not use the responsive API.

:::