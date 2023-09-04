function plusHashCount(str) {
  let hashCount = 0;
  let plusCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      hashCount++;
    } else if (str[i] === '+') {
      plusCount++;
    }
  }

  return [hashCount, plusCount];
}

// Example usages:
console.log(plusHashCount("###+")); // Output: [1, 3]
console.log(plusHashCount("##+++#")); // Output: [3, 3]
console.log(plusHashCount("#+++#+#++#")); // Output: [6, 4]
console.log(plusHashCount("")); // Output: [0, 0]
