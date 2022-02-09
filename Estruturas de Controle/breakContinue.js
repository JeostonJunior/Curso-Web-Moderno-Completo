const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x in nums) {
  if (x == 5) {
    break;
  }
  console.log(`${x} = ${nums[x]}`);
}
console.log("Saiu do laço for\n");

for (let y in nums) {
  if (y == 5) {
    console.log("Pulou o 5");
    continue;
  }
  console.log(`${y} = ${nums[y]}`);
}

console.log("Saiu do laço for\n");

//Cuidado
externo: for (let a in nums) {
  for (let b in nums) {
    if (a == 2 && b == 3) {
      break externo;
    }
    console.log(`par = ${a},${b}`);
  }
}
