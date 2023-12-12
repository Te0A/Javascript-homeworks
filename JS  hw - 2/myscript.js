function printType(input) {
  var type = typeof input;
  console.log(`The type of '${input}' is: ${type}`);
}

console.log("--- Object ---");
printType({});

console.log("--- Boolean ---");
printType(true);

console.log("--- Number ---");
printType(42);

console.log("--- String ---");
printType("Hello");

console.log("--- Undefined ---");
printType(undefined);
