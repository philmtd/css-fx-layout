const migration = require("../../fxlayout-migration.js");
const fs = require('fs');
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
		const logSpy = jest.spyOn(console, 'warn');
		migration.migrate(`${tempdir}`);

		// check migration
		let result = fs.readFileSync(`${tempdir}/flex-layout.html`, "utf-8");
		let expected = fs.readFileSync(`test/flex-layout-migration/css-fx-layout.html`, "utf-8");
		expect(expected).toBe(result);

		// check migration warnings
		expect(logSpy.mock.calls).toHaveLength(4);
		expect(logSpy.mock.calls[0][0]).toContain(`You are using \x1b[1mfxFlexOrder`)
		expect(logSpy.mock.calls[1][0]).toContain(`You are using \x1b[1mfxFlexOffset`)
		expect(logSpy.mock.calls[2][0]).toContain(`You are using \x1b[1mdata-show`)
		expect(logSpy.mock.calls[3][0]).toContain(`data-flex value of "\x1b[1m20%\x1b[0m"`)
	})

})