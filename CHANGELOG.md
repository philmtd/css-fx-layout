## 2.1.0 (2023-01-03)

### Features

This release adds a responsive API including the commonly known breakpoint sizes of Flex Layout.
In order to use the default responsive API selectors please set the bool parameter of the mixins generating the selectors to `true` (see the "Getting started"
in the README). It is disabled per default because it negatively affects the size of the generated code and not all projects
may need this.

* add responsive API using flex layout media sizes
* add mixins to default API
* add flex-row properties to parent containers of elements using `.fx-flex`/`data-fx-flex` if they are missing

## 2.0.0 (2022-12-27)

### Breaking Changes and New Features

The library now only exposes mixins which can be used to generate the desired CSS selectors.
There also won't be pre-compiled CSS files available with the releases anymore.

The available selectors don't change. You only have to include the library differently. Please
consult the [README](./README.md) or the [Wiki](https://github.com/philmtd/css-fx-layout/wiki) for detailed instructions on how to get you
started with css-fx-layout.

## 1.1.1 (2022-12-26)

* fix release process
* use the css gap property for layout-gap
* add fx-flex and fx-flex-grow

## 1.0.1 (2019-08-31)

### Bug Fixes

* allow the simultaneous usage of wrap and reverse in the data-layout attribute ([#4](https://github.com/philmtd/css-fx-layout/pull/4))

## 1.0.0 (2019-08-17)

First public release of this library.
