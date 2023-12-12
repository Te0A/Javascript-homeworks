let accountBalance = 750;

function withdrawCash(amount) {
  if (amount > accountBalance) {
    return "Not enough money";
  } else {
    accountBalance -= amount;
    return {
      withdrawn: amount,
      remainingBalance: accountBalance,
    };
  }
}

let withdrawalAmount = prompt("Enter the amount you want to withdraw:");

withdrawalAmount = parseInt(withdrawalAmount);

if (!isNaN(withdrawalAmount)) {
  let result = withdrawCash(withdrawalAmount);

  if (typeof result === "string") {
    console.log(result);
  } else {
    console.log(
      `Withdrawn: ${result.withdrawn}, Remaining Balance: ${result.remainingBalance}`
    );
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}
