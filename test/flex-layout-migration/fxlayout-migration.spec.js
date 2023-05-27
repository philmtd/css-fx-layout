const migration = require("../../fxlayout-migration.js");
const fs = require('fs');
const path = require('path');
describe('flex layout migration', () => {

	let tempdir = '';

	beforeAll(() => {
		tempdir = fs.mkdtempSync("css-fx-layout");
		fs.copyFileSync('test/flex-layout-migration/flex-layout.html', `${tempdir}/flex-layout.html`);
	});

	afterAll(() => {
		fs.rmSync(`${tempdir}`, {recursive: true});
		tempdir = '';
	})

	it('it should correctly convert flex-layout code to css-fx-layout', async () => {
		migration.migrate(`${tempdir}`);
	})

})