---
sidebar_position: 1
---

# Attribute Layout API

## `data-layout` attribute

Possible values:

* `row`: for a row layout
* `column`: for a column layout

In addition to these you can optionally add the following, to control the corresponding flex properties:

* `reverse`
* `wrap`

### Example

```html
<div data-layout="row wrap">
    <span>A</span>
    <span>B</span>
    <span>C</span>
</div>
```

## `data-layout-align` attribute

Value format:  `<main-axis> <cross-axis>`. Possible values:

| main-axis |
|-----------|
| `center`  |


### Example

```html
<div data-layout="row" data-layout-align="center center">
    <span>A</span>
    <span>B</span>
    <span>C</span>
</div>
```

<table>
<tr>
<th>Attribute</th>
<th>API</th>
<th>Values</th>
<th>Example</th>
</tr>
<tr>
<td>
<code>data-layout</code>
</td>
<td>
<code>[row|column] [reverse] [wrap]</code>
</td>
<td>
<code>row | column</code>
</td>
<td>
<code>data-layout</code>
</td>
</tr>
</table>

| Attribute           | API                                | Values                | Example |
|---------------------|------------------------------------|-----------------------|---------|
| `data-layout`       | `<direction>` `[reverse]` `[wrap]` | `row                \ | column` | `data-layout="row"` |
| `data-layout-align` | `<main-axis>` `<cross-axis>`       | main-axis: `start \   |  end \  | center \| space-between \| space-around \| space-evenly`; cross-axis: `start \| end \| center \| baseline \| stretch` | `data-layout-align="start center"` |