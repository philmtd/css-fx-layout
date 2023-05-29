#!/usr/bin/env node
const migration = require('./fxlayout-migration.js');

if (process.argv.length > 2 && process.argv[2] == "migrate") {
	const directory = `${process.argv.length > 3 ? process.argv[3] : "."}`;
	migration.migrate(directory);
} else {
	console.log("Hi from css-fx-layout. This script is only intended to be used with the command 'migrate'")
}
