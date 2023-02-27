import React from 'react';

const attributesCode = `<div data-layout="row">
  <span data-flex="20">20</span>
  <span data-flex="30">30</span>
  <span data-flex="50">50</span>
</div>`;

const classesCode = `<div class="fx-layout-row">
  <span class="fx-flex--20">20</span>
  <span class="fx-flex--30">30</span>
  <span class="fx-flex--50">50</span>
</div>`;

export default {
	attributes: attributesCode,
	classes: classesCode,
	title: "8: Elements with numerical flex values",
	description: "The elements in the row have numerical flex values assigned, which corresponds to percentage of the flex container's width."
};