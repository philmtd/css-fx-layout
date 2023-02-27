import React from 'react';

const attributesCode = `<div data-layout="row reverse" 
     data-layout-align="start center"  
     data-layout-gap="4px">
  <span>One</span>
  <span>Two</span>
  <span>Three</span>
</div>`;

const classesCode = `<div class="fx-layout-row 
            fx-layout-reverse 
            fx-align--start-x 
            fx-align--x-center 
            fx-gap--4px">
  <span>One</span>
  <span>Two</span>
  <span>Three</span>
</div>`;

export default {
	attributes: attributesCode,
	classes: classesCode,
	title: "2: Reversed row with alignment and gaps",
	description: "This example renders a flex row in reversed order with align properties set and a gap of 4px."
};