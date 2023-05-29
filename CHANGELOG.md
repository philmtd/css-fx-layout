## 3.0.4 (29-05-2023)

### New Features: Flex-Layout migration script

There is now an automatic migration script available. If you are coming from Angular Flex-Layout this should make the migration even easier for you.
You can call the script like this: `npx css-fx-layout migrate [path/to/src]`. Consult the documentation for a detailed migration guide.
As this is only an indirect feature of the actual library this release did not get a minor-version bump. (feat: add flex-layout migration script by @philmtd in https://github.com/philmtd/css-fx-layout/pull/26)

### What's Changed

* dev dependency updates

**Full Changelog**: https://github.com/philmtd/css-fx-layout/compare/v3.0.3...v3.0.4

## 3.0.3 (09-05-2023)

### Bug Fixes

* fix: correct sm breakpoint size to match the one from flex-layout as intended by @philmtd in https://github.com/philmtd/css-fx-layout/pull/25, thanks
  to [@dungvq23](https://github.com/dungvq23) for reporting the bug

**Full Changelog**: https://github.com/philmtd/css-fx-layout/compare/v3.0.2...v3.0.3

## 3.0.2 (07-03-2023)

### Bug Fixes

* fix: use improved auto-flex in data-flex, too by @philmtd in https://github.com/philmtd/css-fx-layout/pull/22

**Full Changelog**: https://github.com/philmtd/css-fx-layout/compare/v3.0.1...v3.0.2

## 3.0.1 (07-03-2023)

### Bug Fixes

* fix(attributes): auto-apply flex layout only if no layout attribute is present by @philmtd in https://github.com/philmtd/css-fx-layout/pull/21

**Full Changelog**: https://github.com/philmtd/css-fx-layout/compare/v3.0.0...v3.0.1

## 3.0.0 (24-02-2023)

This release is a large step towards an easier migration from Angular Flex-Layout. Thank you to [@lievenjanssen](https://github.com/lievenjanssen) for his work
in multiple PRs!
It introduces some breaking changes, which should be easy to resolve, though.

We also added a [migration guide from Angular Flex-Layout](https://philmtd.github.io/css-fx-layout/docs/flex-layout-migration) to our documentation.

### New Features

* Flex basis alias support (e.g. `data-flex="30"` / `.fx-flex--30`)
* Support to create gap values from a list instead of generating incrementally from one number to another using the mixins `gap-attribute-selectors-from-list`
  or `gap-class-selectors-from-list`
* New `data-flex-fill` / `.fx-flex-fill` selectors
* New `data-flex-align` / `.fx-flex-align` selectors

### What's Changed

* Flex basis alias support by @lievenjanssen in https://github.com/philmtd/css-fx-layout/pull/13
* Layout gap value list support by @lievenjanssen in https://github.com/philmtd/css-fx-layout/pull/12
* Flex size support by @lievenjanssen in https://github.com/philmtd/css-fx-layout/pull/15
* chore: remove media size selectors phone, tablet and desktop in favor of the newer selectors by @philmtd in https://github.com/philmtd/css-fx-layout/pull/16
* Increment support for layout gap mixins by @lievenjanssen in https://github.com/philmtd/css-fx-layout/pull/17
* add real unit tests by @philmtd in https://github.com/philmtd/css-fx-layout/pull/14
* feat: improved documentation by @philmtd in https://github.com/philmtd/css-fx-layout/pull/18
* feat: add more flex layout support by @philmtd in https://github.com/philmtd/css-fx-layout/pull/19
    * adds an fxFlexFill alternative
    * adds an fxFlexAlign alternative
    * adds flex-row properties to containers where it is missing and where layout-align is used
    * adds a documentation page on how to migrate from Flex Layout
    * renames `data-fx-flex` to `data-flex` because it was the only attribute selector with the `fx` prefix, which was confusing
    * removes `data-fx-flex-grow` in favor of `data-flex="grow"`

### Breaking Changes

* `data-fx-flex` has been renamed to `data-flex`
* `data-fx-flex-grow` has been removed in favor of `data-flex="grow"`
* The generator mixins for the gap selectors (`gap-class-selectors` and `gap-attribute-selectors`) have a new parameter `$increment` as their third parameter.
  You need to set this to 1 to get the previous behaviour.
* Removes the old, initial css-fx-layout media sizes `phone`, `tablet` and `desktop` in favor of the existing Flex-Layout media sizes

### New Contributors

* [@lievenjanssen](https://github.com/lievenjanssen) made their first contribution in https://github.com/philmtd/css-fx-layout/pull/13

**Full Changelog**: https://github.com/philmtd/css-fx-layout/compare/v2.1.0...v3.0.0

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
