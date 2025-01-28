//  число N від користувача
const N = parseInt(prompt("ціле число N:"));

if (isNaN(N) || N < 1) {
  console.log(" додатнє ціле число.");
} else {
  console.log(` числа від 1 до 100, квадрат  не перевищує ${N}:`);
  
  for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
      console.log(i);
    } else {
      break; // перевищує N
    }
  }
}