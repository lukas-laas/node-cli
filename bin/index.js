#! /usr/bin/env node
const args = process.argv;
console.log(`Hello ${args[2] ? args[2] : "world"}!`);
