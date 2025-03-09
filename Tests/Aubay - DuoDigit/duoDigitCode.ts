public duodigit(num: number) {
  let numString = Math.abs(num).toString();
  let digits = new Set<String>();
  for (let item of numString) {
    digits.add(item);
  }
  if (digits.size > 2) {
    return 'n'
  } else {
    return 'y'
  }
}