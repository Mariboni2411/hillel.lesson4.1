class Calculator {
    //додавання
    add(a, b) {
      return a + b;
    }
  
    //віднімання
    subtract(a, b) {
      return a - b;
    }
  
    //множення
    multiply(a, b) {
      return a * b;
    }
  
    //ділення
    divide(a, b) {
      if (b === 0) {
        return "Ділення на нуль неможливе";
      }
      return a / b;
    }
  }
  
  const calc = new Calculator();
  
  // використання методів
  console.log(calc.add(5, 3)); // 8
  console.log(calc.subtract(10, 4)); // 6
  console.log(calc.multiply(3, 6)); // 18
  console.log(calc.divide(8, 2)); // 4
  console.log(calc.divide(8, 0)); // "ділення на 0 неможливе"