const { 
  sumToWithCycle,
  sumWithArithmeticProgression,
  sumWithRecursion,
  factorial,
  fib
} = require("./6");

describe('check factorial', () => {

  it('for 5 return 120', () => {
    const result = factorial(5);
    expect(result).toStrictEqual(120);
  });

  it('for 6 return 720', () => {
    const result = factorial(6);
    expect(result).toStrictEqual(720);
  });

  it('for 10 return 3628800', () => {
    const result = factorial(10);
    expect(result).toStrictEqual(3628800);
  });

  it('for 14 return 87178291200', () => {
    const result = factorial(14);
    expect(result).toStrictEqual(87178291200);
  });

});

describe('check sum with cycle', () => {

  it('return 5050', () => {
    const result = sumToWithCycle(100)
    expect(result).toStrictEqual(5050);
  });

});

describe('check sum with progression', () => {

  it('return 5050', () => {
    const result = sumWithArithmeticProgression(100)
    expect(result).toStrictEqual(5050);
  });

});

describe('check sum with recursion', () => {

  it('return 5050', () => {
    const result = sumWithRecursion(100);
    expect(result).toStrictEqual(5050);
  });

});

describe('check fibonacchi', () => {

  it('return 7 return 13', () => {
    const result = fib(7);
    expect(result).toStrictEqual(13);
  });
  
});