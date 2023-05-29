const fs = require('fs');
const path = require('path');

const searchAndReplace = [
	...generateRegexReplacements("fxLayout", "data-layout"),
	...generateRegexReplacements("fxLayoutAlign", "data-layout-align"),
	...generateRegexReplacements("fxFlex", "data-flex"),
	...generateRegexReplacements("fxFlexAlign", "data-flex-align"),
	...generateRegexReplacements("fxLayoutGap", "data-layout-gap"),
	...generateRegexReplacements("fxHide", "data-hide"),
	...generateRegexReplacements("fxShow", "data-show"),
	...generateRegexReplacements("fxFlexFill", "data-flex-fill"),
	{s: new RegExp(`(row|column)-(reverse)`, 'g'), r: "$1 $2"},
];

let processedFiles = 0;

function yellow(str) {
	return `\x1b[33m${str}\x1b[0m`;
}
function green(str) {
	return `\x1b[32m${str}\x1b[0m`;
}
function bold(str) {
	return `\x1b[1m${str}\x1b[0m`;
}
function logWarnings(filename, fileContent) {
	["fxFlexOrder", "fxFlexOffset"].forEach(u => {
		if (fileContent.includes(u)) {
			console.warn(`${yellow('[warning]')} You are using ${bold(u)} in ${bold(filename)} which is not supported by css-fx-layout.`);
		}
	});
	if (fileContent.includes("data-show")) {
		console.warn(`${yellow('[warning]')} You are using ${bold('data-show')} in ${bold(filename)}. You need to migrate to data-hide (see https://philmtd.github.io/css-fx-layout/docs/flex-layout-migration for details).`);
	}
	const dataFlexValues = fileContent.matchAll(/data-flex(\.([\w-]+))?(\\])?="([^"]+)"/gi);
	if (dataFlexValues) {
		Array.from(dataFlexValues).forEach(match => {
			if (match.length > 4) {
				if (!/^(\d+|nogrow|grow|none|noshrink|auto|initial)$/.test(match[4])) {
					console.warn(`${yellow('[warning]')} data-flex value of "${bold(match[4])}" in ${bold(filename)} is not supported by css-fx-layout. Only percent and fixed named parameters are supported and percentages need to be specified without the % symbol.`);
				}
			}
		});
	}
	const dataFlexAlignValues = fileContent.matchAll(/data-flex-align(\.([\w-]+))?(\\])?="([^"]+)"/gi);
	if (dataFlexAlignValues) {
		Array.from(dataFlexAlignValues).forEach(match => {
			if (match.length > 4) {
				if (!/^(start|center|end|baseline|stretch)$/.test(match[4])) {
					console.warn(`${yellow('[warning]')} data-flex-align value of "${bold(match[4])}" in ${bold(filename)} is not supported by css-fx-layout`);
				}
			}
		});
	}
}

function processFile(filename) {
	let file = fs.readFileSync(filename, 'utf-8');
	let result = file;
	searchAndReplace.forEach(sr => {
		result = result.replace(sr.s, sr.r);
	});
	fs.writeFileSync(filename, result, 'utf-8');
	logWarnings(filename, result);
	processedFiles++;
}

function generateRegexReplacements(searchTag, replaceTag) {
	let normal = [
		{s: new RegExp(`${searchTag}=`, 'g'), r: `${replaceTag}=`},
		{s: new RegExp(`${searchTag}([\\s>])`, 'g'), r: `${replaceTag}$1`},
		{s: new RegExp(`\\[${searchTag}\\]=`, 'g'), r: `[attr.${replaceTag}]=`}
	];

	let responsive = [
		{s: new RegExp(`${searchTag}\\.([\\w-]+)=`, 'g'), r: `${replaceTag}-$1=`},
		{s: new RegExp(`${searchTag}\\.([\\w-]+)([\\s>])`, 'g'), r: `${replaceTag}-$1$2`},
		{s: new RegExp(`\\[${searchTag}\\.([\\w-]+)\\]=`, 'g'), r: `[attr.${replaceTag}-$1]=`},
	];

	return [...normal, ...responsive];
}

function migrateFile(file) {
	processFile(file);
}

function migrateFilesInDirectoryRecursively(dir) {
	fs.readdirSync(dir).forEach(file => {
		let fullPath = path.join(dir, file);
		if (fs.lstatSync(fullPath).isDirectory()) {
			if (fs.existsSync(`${fullPath}/.migrateignore`)) {
				console.log(`🙈 ignoring directory ${fullPath}`);
				return;
			}
			migrateFilesInDirectoryRecursively(fullPath);
		} else if (fullPath.endsWith(".html")) {
			migrateFile(fullPath);
		}
	});
}

exports.migrate = function migrate(directory) {
	console.log(bold(`📐 flex-layout => css-fx-layout 📚`));
	console.log(`🚀 starting migration of files in directory ${directory}`);
	migrateFilesInDirectoryRecursively(`${directory}`);
	console.log(green(`✅ finished migrating ${processedFiles} files to css-fx-layout`));
}
