const sayHello = function (name) {
  console.log("Hello, "+name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

//part 2
const sayHelloToConsole = function (name) {
  console.log("Hello, "+name);
}
sayHelloToConsole('Peter');

const returnSayHello = function(name) {
  return "Hello, " +name;
}
const greeting = returnSayHello('Ahmed');
// it will not print here but to make it print, do the following:
console.log(greeting);