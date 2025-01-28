class Coach {
    constructor(name, specialization, rating) {
      this.name = name;
      this.specialization = specialization;
      this.rating = rating;
    }
  
    displayInfo() {
      console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`);
    }
  }
  
  // об'єкт класу Coach
  const coach1 = new Coach('John Doe', 'Fitness', 4.7);
  const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);
  
  // Виклик displayInfo
  coach1.displayInfo(); //  John Doe
  coach2.displayInfo(); // Alice Smith