import React from 'react';

const attributesCode = `<div data-layout="row">
  <span data-flex>Flex</span>
  <span data-flex="grow">Flex Grow</span>
</div>`;

const classesCode = `<div class="fx-layout-row">
  <span class="fx-flex">Flex</span>
  <span class="fx-flex-grow">Flex Grow</span>
</div>`;

export default {
	attributes: attributesCode,
	classes: classesCode,
	title: "5: Flex",
	description: "A flex row with two elements with different flex behaviours."
};