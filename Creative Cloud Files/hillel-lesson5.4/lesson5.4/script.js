
const number = parseInt(prompt("ціле число:"));

if (isNaN(number) || number <= 1) {
  console.log("число  більше 1  цілим.");
} else 
  letisPrime = true;

  // число крім 1 і себе
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) 
      isPrime = false;
      break;
    }
  
  // результат
  if (isPrime) {
    console.log(`${number} є простим числом.`);
  } else {
    console.log(`${number} не є простим числом.`);
  }
