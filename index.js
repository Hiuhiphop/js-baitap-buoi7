var count = [];
for (var k = 1; k <= 10; k++) {
  for (var i = k * 10 - 9; i <= k * 10; i++) {
    [count += i];
  }
    count += "\n";
}
console.log([count]);
