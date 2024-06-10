#! /usr/bin/env node
const args = process.argv;
if (args[2] == "-help" || args[2] == "-h")
  return console.log('Run: simpcli "name" to greet yourself');

console.log(`Hello ${args[2] ? args[2] : "world"}!`);
