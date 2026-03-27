const arr = [1, 2, 3];
const out = arr.reduce((acc, n) => {
  acc.push(n * 2);
  return acc;
}, []);
console.log(out.join(","));
