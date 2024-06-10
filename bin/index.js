#! /usr/bin/env node
const args = process.argv;

async function swapi() {
  const response = await fetch("https://swapi.dev/api/people/1/");
  const responseJSON = await response.json();
  const character = {
    name: responseJSON.name,
    birthyear: responseJSON.birth_year,
  };
  console.log(`Name: ${character.name}`);
  console.log(`Birth year: ${character.birthyear}`);
  return;
}

if (args[2] == "-help" || args[2] == "-h")
  return console.log(
    'Run: simpcli "name" to greet yourself\nRun: simpcli "starwars|sw" for a treat'
  );

if (args[2] == "starwars" || args[2] == "sw") {
  return swapi();
}

console.log(`Hello ${args[2] ? args[2] : "world"}!`);
