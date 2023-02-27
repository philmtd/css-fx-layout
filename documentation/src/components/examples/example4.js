import React from 'react';

const attributesCode = `<div>
  <span data-hide-sm>Hidden on sm screens</span>
  <span data-show-lg>Only visible on lg screens</span>
  <span>Always visible</span>
</div>`;

const classesCode = `<div>
  <span class="hide-sm">Hidden on sm screens</span>
  <span class="show-lg">Only visible on lg screens</span>
  <span>Always visible</span>
</div>`;

export default {
	attributes: attributesCode,
	classes: classesCode,
	title: "4: Show/Hide",
	description: "Shows/Hides elements based on the screen size. Resize the window to see it change."
};