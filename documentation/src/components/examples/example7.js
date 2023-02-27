import React from 'react';

const attributesCode = `<div data-layout="row">
  <span data-flex-xs data-flex-md data-flex-xl>One</span>
  <span class="green" data-flex-sm data-flex-lg>Two</span>
</div>`;

const classesCode = `<div class="fx-layout-row">
  <span class="fx-flex--xs fx-flex--md fx-flex--xl">One</span>
  <span class="green fx-flex--sm fx-flex--lg">Two</span>
</div>`;

export default {
	attributes: attributesCode,
	classes: classesCode,
	title: "7: Flex based on screen size",
	description: "Alternating flex based on the window size. Resize the window to see it change."
};