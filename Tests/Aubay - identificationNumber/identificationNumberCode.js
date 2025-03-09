public computeCheckDigit(identificationNumber: number) {
    let numString = Math.abs(identificationNumber).toString();
    let evenSum: number = 0;
    let oddSum: number = 0;

    for (let i = 0; i <= numString.length; i++) {
      if (this.isEven(i + 1)) {
        evenSum += parseInt(numString[i]);
      }
    }
    let multiplied = evenSum * 3;
    for (let i = 1; i <= numString.length; i++) {
      if (this.isOdd(i)) {
        oddSum += parseInt(numString[i - 1]);
      }
    }
    let multOdd = (multiplied + oddSum).toString();
    let arrayValue = [];
    let ultDigit = '';
    for (let i = 0; i < multOdd.length; i++) {
      arrayValue[i] = multOdd[i];
    }

    ultDigit = arrayValue[multOdd.length - 1];
    let finalResult = 0;
    if (parseInt(ultDigit) != 0) {
      finalResult = Math.abs(10 - parseInt(ultDigit))
    } else {
      finalResult = 0;
    }
    console.log(finalResult)
  }

  private isOdd(n: number) {
    return n % 2 == 0;
  }

  private isEven(n: number) {
    return Math.abs(n % 2) == 1;
  }