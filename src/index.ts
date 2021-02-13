#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const path = require("path");
const program = require("commander");

program
  .name('frl')
  .option('-V, --version', 'output Freela CLI version')
  .option('-d, --debug', 'output extra debugging')
  .option('-p, --path <path>', 'generate scaffold CRUD with model file')
  .option('-s, --style <style>', 'select style for scaffold \"Bootstrap\" or "\"Material\"')

program.parse(process.argv);

if (!process.argv.length) program.outputHelpInformation();

const options = program.opts();
console.log(options);

if (options.debug) console.log(options);
if (options.style) {
    console.log(`using style: ${options.style}`)
}

if (options.path) {
    console.log(`scaffolding - ${options.path}`);
    
}

if (options.version) {
    console.log(chalk.red(figlet.textSync("freela-cli", { horizontalLayout: "full" })));
    console.log("Version: 1.0.3\n");
}

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

