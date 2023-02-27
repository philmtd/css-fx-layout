import React from 'react';

const attributesCode = `<div data-layout="row">
  <span data-flex data-flex-align="start">Start</span>
  <span data-flex data-flex-align="center">Center</span>
  <span data-flex data-flex-align="end">End</span>
</div>`;

const classesCode = `<div class="fx-layout-row">
  <span class="fx-flex fx-flex-align--start">Start</span>
  <span class="fx-flex fx-flex-align--center">Center</span>
  <span class="fx-flex fx-flex-align--end">End</span>
</div>`;

export default {
	attributes: attributesCode,
	classes: classesCode,
	title: "10: Flex align",
	description: "Flex align property used on child elements."
};