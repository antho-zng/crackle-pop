/**
 * PROMPT:
 *
 * Write a program that prints out the numbers 1 to 100 (inclusive).
 * If the number is divisible by 3, print Crackle instead of the number.
 * If it's divisible by 5, print Pop. If it's divisible by both 3 and 5,
 * print CracklePop. You can use any language.
 */

function cracklePop(number = 0) {
  if (number > 100) {
    return;
  }

  const divThree = number % 3 === 0;
  const divFive = number % 5 === 0;

  if (divThree && divFive) {
    console.log("CracklePop");
  } else if (divThree) {
    console.log("Crackle");
  } else if (divFive) {
    console.log("Pop");
  } else {
    console.log(number);
  }
  return cracklePop(number + 1);
}

cracklePop();
