const assert = require('assert/strict');

const isEven = (n) => n % 2 == 0;
assert.ok(isEven(6), true);

const isOdd = (n) => !isEven(n);
assert.ok(isOdd(5), true);

const square = (n) => n * n;
assert.equal(square(3), 9);

const cube = (n) => square(n) * n;
assert.equal(cube(4), 64);

const gcd = (n1, n2) => {
    let hcf;
    for (let i = 1; i <= n1 && i <= n2; i++) {
        if (n1 % i == 0 && n2 % i == 0) hcf = i;
    } return hcf;
}
assert.equal(gcd(5, 25), 5);

const lcm = (n1, n2) => n1 * n2 / gcd(n1, n2);
assert.equal(lcm(6, 10), 30);

const SimpleInterest = (principal, rate, time) => principal * (1 + rate * time);
assert.equal(SimpleInterest(800, 5, 2), 8800);

const compoundInterest = (principal, rate, num, time) => principal * (1 + rate * num) * (num * time);
assert.equal(compoundInterest(800, 2, 1, 2), 4800);

const tempIncentigrade = (temp) => temp * (9 / 5) + 32;
assert.equal(tempIncentigrade(35), 95);

const tempInFahrenheit = (temp) => (temp - 32) * 5 / 9;
assert.equal(tempInFahrenheit(95), 35);

const largest = (num1, num2, num3) => Math.max(num1, num2, num3);
assert.equal(largest(8, 19, 15), 19);

const smallest = (num1, num2, num3) => Math.min(num1, num2, num3);
assert.equal(smallest(8, 19, 15), 8);

const average = (num1, num2, num3) => (num1 + num2 + num3) / 3;
assert.equal(average(12, 4, 14), 10);

const sum = (n) => n * (n + 1) / 2;
assert.equal(sum(4), 10);

const fibonacci = (num) => {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

assert.equal(fibonacci(4), 2);

