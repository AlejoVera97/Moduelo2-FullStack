
let string = "'algo entre comillas simples' \"algo entre comillas dobles\" 'algo entre comillas mezcladas\"";

console.log(string.match(/('|")[a-z]+(a'|")/ig));

