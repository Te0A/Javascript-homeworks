function calculateDogAge(age, type) {
  if (type === "dog") {
    let dogYears = age * 7;
    console.log(`Your dog is ${dogYears} dog years old.`);
    return dogYears;
  } else if (type === "human") {
    let humanYears = age / 7;
    console.log(`Your dog is equivalent to ${humanYears} human years old.`);
    return humanYears;
  } else {
    console.log("Invalid type. Please use 'dog' or 'human'.");
    return null;
  }
}

calculateDogAge(3, "dog");

calculateDogAge(21, "human");
