let year = parseInt(prompt("Enter a year:"));

const zodiacIndex = (year - 4) % 12;

const zodiacSigns = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
];

console.log(`${year} is in the year of the ${zodiacSigns[zodiacIndex]}.`);
