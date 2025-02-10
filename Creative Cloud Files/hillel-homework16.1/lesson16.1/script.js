class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = grades;
      this.attendance = new Array(25).fill(null); 
    }
  
    // отримання віку студента
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    // отримання середнього бала
    getAverageGrade() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades.length;
    }
  
    //відзначення присутності
    present() {
      const index = this.attendance.indexOf(null); 
      if (index !== -1) {
        this.attendance[index] = true;
      } else {
        console.log("Масив відвідуваності заповнений!");
      }
    }
  
    // відзначення відсутності
    absent() {
      const index = this.attendance.indexOf(null); 
      if (index !== -1) {
        this.attendance[index] = false;
      } else {
        console.log("Масив відвідуваності заповнений!");
      }
    }
  

    summary() {
      const averageGrade = this.getAverageGrade();
      const totalClasses = this.attendance.filter(a => a !== null).length; 
      const attendedClasses = this.attendance.filter(a => a === true).length;
      const attendanceRate = totalClasses ? attendedClasses / totalClasses : 0;
  
      if (averageGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
      } else if (averageGrade > 90 || attendanceRate > 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    }
  }
  
  //  студенти
  const student1 = new Student("Дима ", "Михей", 2002, [95, 88, 92, 90]);
  const student2 = new Student("Влада", "Доброскок", 2003, [78, 85, 89, 82]);
  const student3 = new Student("Маша", "Михайлова", 2001, [99, 100, 98, 97]);
  
  // відвідуваність
  student1.present();
  student1.present();
  student1.absent();
  
  student2.present();
  student2.absent();
  student2.present();
  
  student3.present();
  student3.present();
  student3.present();
  
  // використовуємо методи
  console.log(`${student1.firstName} ${student1.lastName}, вік: ${student1.getAge()}`);
  console.log("Середній бал:", student1.getAverageGrade());
  console.log("Результат:", student1.summary());
  
  console.log(`${student2.firstName} ${student2.lastName}, вік: ${student2.getAge()}`);
  console.log("Середній бал:", student2.getAverageGrade());
  console.log("Результат:", student2.summary());
  
  console.log(`${student3.firstName} ${student3.lastName}, вік: ${student3.getAge()}`);
  console.log("Середній бал:", student3.getAverageGrade());
  console.log("Результат:", student3.summary());