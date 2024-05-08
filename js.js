// // day1
// document.writeln("<h1>js test</h1><hr>")

// for (let i = 1; i <= 6; i++) {
//     console.log(i)
//     document.writeln("<h"+i+">This is the header number"+i+"</h"+i+">")
// }

// // day2

// // 1
// var studentGrade=[60,100,10,15,85]

// console.log(studentGrade.sort(function(a,b){return b-a}))

// var higestGrade =studentGrade.sort(function(a,b){return b-a})

// console.log(higestGrade.find(function high(higestGrade) {return higestGrade<= 100}))

// console.log(studentGrade.filter(function (i) {return i<60}))

// // 2

// function enterDate (birthDate){
//     if (birthDate.length===10&&birthDate.charAt(2)==='-'&&birthDate.charAt(5)==='-'){
//         var day = parseInt(birthDate.substr(0,2));
//         var month = parseInt(birthDate.substr(3,2))-1;
//         var year = parseInt(birthDate.substr(6,4));
//         var date = new Date(year, month, day);

//         if (isNaN(date.getTime())) {
//             alert("Invalid Date");
//         } else {
//             alert("Entered Date: " + date.toDateString());
//         }
//     } else {
//         alert("Wrong Date Format");
//     }
//     }
//     var birthDate = prompt("Please enter your birth date as this format (DD - MM - YYYY)")
//     console.log(birthDate)
//     enterDate (birthDate)

   
// // 3
// alert("Welcome to my site")

// var userName =prompt("Please enter your name")

// document.writeln("<h1>Welcome "+userName+"</h1>")


// // 4
// var todayTemp =prompt("Please enter the temp")

// function temp(todayTemp){
//     if (todayTemp>=30) {
//         return "hot"
        
//     } else {
//         return "cold"
//     }
// }
// console.log(temp(Number(todayTemp)))

// var temp1 = todayTemp>=30 ? "HOT":"COLD";
// console.log(temp1); 


// 5

// var email= prompt("Please enter your email")

// function cheack(email){
//     if (email.includes("@") && email.indexOf("@") !== 0 && email.indexOf("@") !== email.length - 1){
//         console.log("email is correct")
//     }else{
//         console.log("invaled email")
//     }
// }
// cheack(email)

// 6
// first try
// var string ="hello world";
// console.log(typeof(string))

// function validateName(name) {
//     return typeof name === "string" && name.trim() !== "";
// }

// function validateBirthYear(birthYear) {
//     return !isNaN(birthYear) && birthYear < 2010;
// }

// function calculateAge(birthYear) {
//     var currentYear = new Date().getFullYear();
//     return currentYear - birthYear;
// }

// var name = "";
// while (!validateName(name)) {
//     name = prompt("Please enter your name:");
// }

// var birthYear = "";
// while (!validateBirthYear(birthYear)) {
//     birthYear = parseInt(prompt("Please enter your birth year (must be a number and less than 2010):"));
// }

// var age = calculateAge(birthYear);

// document.write("Name: " + name + "<br>");
// document.write("Birth year: " + birthYear + "<br>");
// document.write("Age: " + age);

// second try
// function cheackName(userName) {
//     if (typeof(userName)=='string'){
//         return userName
//     }else{
//         return alert("invaled input ,please enter your name")
//     }        
// }


// function cheackYear(userBirthYear) {
//     if (typeof(userBirthYear)=='number'&&userBirthYear>2010){
//         return userBirthYear
//     }else{
//         return alert("invaled input ,please enter your birth year")
//     }        
// }

// function calculateAge(userBirthYear){
//     var currentYear = new Date().getFullYear();
//     return currentYear -userBirthYear    
// }

// var userName=prompt("Please enter your name")
// while(!cheackName(userName)){
//     var userName= prompt("Please enter your name")
// }
// console.log(userName)
// var userBirthYear=""
// while(!cheackYear(userBirthYear)){
//     var userBirthYear= parseInt(prompt("Please enter your birth year"))
// }

// var age=calculateAge(userBirthYear)

// console.log(userName,userBirthYear,age)


// third try
// var userName = prompt("please enter name")
// var userDate = prompt("please enter date")
// var userDate1=Number(userDate)

// function cName(man) {
//     if (typeof(man)=="string"){
//         console.log(man)
//     }
//     return man
// }

// function cDate(date) {
//     if (!isNaN(date)&&date<2010){
//         console.log(date)
//     }
//     return Number(date)
// }

// function age (date){
//     var currentYear = new Date().getFullYear();
//     return currentYear - date
// }

// // cName(userName)
// // console.log(typeof userDate1)
// // console.log(typeof(cDate(userDate1)))
// // console.log(age(userDate1))

// while (!cName(userName)) {
//     var userName = prompt("please enter name")    
// }

// while (!cDate(userDate)) {
//     var userDate = prompt("please enter year")    
// }

// console.log(age(Number(userDate)))

// document.writeln("Name: "+userName+"birth year: "+userDate1+"age: "+age(Number(userDate)))



// // fourth try
// var userName = prompt("Please enter your name");
// var userDate = prompt("Please enter your birth year");
// var userDate1 = Number(userDate);

// function validateName(name) {
//     return typeof name === "string";
// }

// function validateDate(date) {
//     return !isNaN(date) && date < 2010;
// }

// function calculateAge(date) {
//     var currentYear = new Date().getFullYear();
//     return currentYear - date;
// }

// while (!validateName(userName)) {
//     userName = prompt("Please enter a valid name");
// }

// while (!validateDate(userDate1)) {
//     userDate = prompt("Please enter a valid birth year");
//     userDate1 = Number(userDate);
// }

// var userAge = calculateAge(userDate1);

// document.writeln("Name: " + userName + "<br>");
// document.writeln("Birth year: " + userDate1 + "<br>");
// document.writeln("Age: " + userAge);


// 7

// var fullName = prompt("Please enter your full name");
// var email = prompt("Please enter your email address");

// var fullNameRegex = /^[A-Za-z]{3,}(\s[A-Za-z]{3,})*$/;
// var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com\.eg|net\.eg|edu\.eg|org\.eg)$/;

// while (!fullNameRegex.test(fullName)) {
//     fullName = prompt("Please enter a valid full name");
// }

// while (!emailRegex.test(email)) {
//     email = prompt("Please enter a valid email address");
// }

// document.writeln("Full Name: " + fullName + "<br>");
// document.writeln("Email: " + email);



// 8



// day3

// 1
// Calculate the area of a circle
// function calculateCircleArea() {
//     var radius = parseFloat(prompt("Enter the value of a circle's radius:"));
//     var area = Math.PI * Math.pow(radius, 2);
//     alert("The area of the circle is: " + area.toFixed(2));
//   }
  
//   // Calculate the square root of a number
//   function calculateSquareRoot() {
//     var number = parseFloat(prompt("Enter a number to calculate its square root:"));
//     var squareRoot = Math.sqrt(number);
//     alert("The square root of the number is: " + squareRoot.toFixed(2));
//   }
  
//   // Calculate the cosine of an angle
//   function calculateCosine() {
//     var angle = parseFloat(prompt("Enter an angle to calculate its cosine value:"));
//     var cosine = Math.cos(angle);
//     alert("The cosine value of the angle is: " + cosine.toFixed(2));
//   }
  
//   // Print odd numbers between start and end
//   function printOddNumbers(start, end) {
//     for (var i = start; i <= end; i++) {
//       if (i % 2 !== 0) {
//         console.log(i);
//       }
//     }
//   }
  
//   // Array of tips about JavaScript
//   var tips = [
//     "Always use 'var', 'let', or 'const' to declare variables.",
//     "Use '===' for strict equality comparison.",
//     "Avoid using global variables.",
//     "Use 'camelCase' for variable and function names.",
//     "Don't forget to use semicolons at the end of statements.",
//     "Use 'Array.map()' for transforming elements in an array.",
//     "Use 'Array.filter()' for filtering elements in an array.",
//     "Use 'Array.reduce()' for reducing elements in an array.",
//     "Remember to handle asynchronous operations with callbacks, promises, or async/await.",
//     "Always test your code thoroughly before deploying it."
//   ];
  
//   // Display a random tip from the array
//   function displayRandomTip() {
//     var randomIndex = Math.floor(Math.random() * tips.length);
//     var randomTip = tips[randomIndex];
//     alert("Tip of the day: " + randomTip);
//   }
  
//   // Execute a mathematical expression and show the result
//   function calculateExpressionResult(expression) {
//     var result = eval(expression);
//     alert("You entered: " + expression + ", and the result is: " + result);
//   }
  
//   // Array of objects for student data
//   var students = [
//     { name: "John", degree: 85 },
//     { name: "Alice", degree: 92 },
//     { name: "Bob", degree: 75 },
//     { name: "Emily", degree: 98 },
//     { name: "Mike", degree: 60 }
//   ];
  
//   // Find student names with degree between 90 and 100
//   var highAchievers = students.find(function(student) {
//     return student.degree >= 90 && student.degree <= 100;
//   });
//   console.log(highAchievers.name);
  
//   // Filter student names with degree less than 60
//   var lowAchievers = students.filter(function(student) {
//     return student.degree < 60;
//   });
//   lowAchievers.forEach(function(student) {
//     console.log(student.name);
//   });
  
//   // Add a new student to the array
//   students.push({ name: "Sarah", degree: 88 });
  
//   // Print all elements of the array using for...in loop
//   for (var index in students) {
//     console.log(students[index]);
//   }
  
//   // Remove the last student of the array
//   students.pop();
  
//   // Print all elements of the array using for...of loop
//   for (var student of students) {
//     console.log(student);
//   }
  
//   // Sort the array alphabetically based on student name
//   students.sort(function(a, b) {
//     return a.name.localeCompare(b.name);
//   });
  
//   // Add 2 new students after the second element of the array using splice()
//   students.splice(2, 0, { name: "Tom", degree: 79 }, { name: "Lily", degree: 95 });
  
//   // Remove 1 student after the third element in the array using splice()
//   students.splice(4, 1);


