import React from 'react';

const attributesCode = `<div data-layout-xs="row" 
     data-layout-sm="column" 
     data-layout-md="row" 
     data-layout-lg="column" 
     data-layout-xl="row">
  <span>One</span>
  <span>Two</span>
  <span>Three</span>
</div>`;

const classesCode = `<div class="fx-layout-row--xs 
            fx-layout-column--sm 
            fx-layout-row--md 
            fx-layout-column--lg 
            fx-layout-row--xl">
  <span>One</span>
  <span>Two</span>
  <span>Three</span>
</div>`;

export default {
	attributes: attributesCode,
	classes: classesCode,
	title: "6: Layout based on screen size",
	description: "Alternating row/column layout based on the window size. Resize the window to see it change."
};