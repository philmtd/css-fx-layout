import * as fs from 'fs';
import * as path from 'path';

const searchAndReplace = [
	...generateRegexReplacements("fxLayout", "data-layout"),
	...generateRegexReplacements("fxLayoutAlign", "data-layout-align"),
	...generateRegexReplacements("fxFlex", "data-flex"),
	...generateRegexReplacements("fxFlexAlign", "data-flex-align"),
	...generateRegexReplacements("fxLayoutGap", "data-layout-gap"),
	...generateRegexReplacements("fxHide", "data-hide", true),
	...generateRegexReplacements("fxShow", "data-show", true),
	...generateRegexReplacements("fxFlexFill", "data-flex-fill"),
	{s: new RegExp(`(row|column)-(reverse)`, 'g'), r: "$1 $2"}
];

let processedFiles = 0;

function logWarnings(filename, fileContent) {
	const unsupported = ["fxFlexOrder", "fxFlexOffset"];
	if (fileContent.includes("data-show")) {
		console.warn(`You are using data-show in ${filename}. You need to migrate to data-hide (see https://philmtd.github.io/css-fx-layout/docs/flex-layout-migration).`);
	}
	unsupported.forEach(u => {
		if (fileContent.includes(u)) {
			console.warn(`You are using ${u} in ${filename} which is not supported.`);
		}
	});
	const dataFlexValues = fileContent.matchAll(/data-flex(\.([\w-]+))?(\\])?="([^"]+)"/gi);
	if (dataFlexValues) {
		Array.from(dataFlexValues).forEach(match => {
			if (match.length > 4) {
				if (/^((?!\d+|nogrow|grow|none|noshrink|auto|initial).)*$/.test(match[4])) {
					console.warn(`data-flex value of "${match[4]}" in ${filename} is not supported`);
				}
			}
		});
	}
	const dataFlexAlignValues = fileContent.matchAll(/data-flex-align(\.([\w-]+))?(\\])?="([^"]+)"/gi);
	if (dataFlexAlignValues) {
		Array.from(dataFlexAlignValues).forEach(match => {
			if (match.length > 4) {
				if (/^((?!start|center|end|baseline|stretch).)*$/.test(match[4])) {
					console.warn(`data-flex-align value of "${match[4]}" in ${filename} is not supported`);
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

function generateRegexReplacements(searchTag, replaceTag, onlyResponsive = false) {
	let normal = [
		{s: new RegExp(`${searchTag}([\\W])`, 'g'), r: `${replaceTag}$1`},
		{s: new RegExp(`\\[${searchTag}\\]([\\W])`, 'g'), r: `[attr.${replaceTag}]$1`}
	];
	let responsive = [
		{s: new RegExp(`${searchTag}\\.([\\w-]+)([\\W])`, 'g'), r: `${replaceTag}-$1$2`},
		{s: new RegExp(`\\[${searchTag}\\.([\\w-]+)\\]([\\W])`, 'g'), r: `[attr.${replaceTag}-$1]$2`},
	];
	if (onlyResponsive) {
		return responsive;
	} else {
		return [...normal, ...responsive];
	}
}
function migrateFile(file) {
	processFile(file);
}

function migrateFilesInDirectoryRecursively(dir) {
	fs.readdirSync(dir).forEach(file => {
		let fullPath = path.join(dir, file);
		if (fs.lstatSync(fullPath).isDirectory()) {
			migrateFilesInDirectoryRecursively(fullPath);
		} else if (fullPath.endsWith(".html")) {
			migrateFile(fullPath);
		}
	});
}

export function migrate(directory) {
	console.log(`migrating files in directory ${directory} to css-fx-layout`);
	migrateFilesInDirectoryRecursively(`${directory}`);
	console.log(`finished migrating ${processedFiles} files to css-fx-layout`);
}
