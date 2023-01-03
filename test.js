const sass = require('sass');
const fs = require('fs');

if (fs.existsSync('./out')) {
	fs.rmSync('./out', {
		recursive: true
	});
}
fs.mkdirSync('./out')

fs.readdir('./test', (_, files) => {
	files
		.filter(file => file.endsWith(".scss"))
		.map(file => file.substring(0, file.length - 5))
		.forEach(file => {
			let outFile = `./out/${file}.css`;
			let result = sass.compile(`./test/${file}.scss`, {style: "compressed"});
			fs.writeFileSync(outFile, result.css, {encoding: "utf-8"});
		})
});
