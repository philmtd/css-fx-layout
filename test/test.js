const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

const sassFiles = glob.sync(path.resolve(process.cwd(), 'test/**/*.spec.scss'));
sassFiles.forEach(sassFile => {
	sassTrue.runSass({ describe, it }, sassFile);
});
