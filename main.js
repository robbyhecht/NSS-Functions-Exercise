
// // Lightning 1.

// let dog = (breed) => {
//   if (breed !== ''){
//     return `My favorite dog breed is ${breed}`
//   } else {
//     return `I like cats`
//   }}

// console.log("When it comes to pets, " + dog("schnoodle"));

// // 1.Write a function that takes a string of a dog breed as an argument (like ‘border collie’)

// // 2.Have the function return “my favorite dog breed is” plus the passed in string. If no argument is passed to the function, return “I like cats”.

// // 3.Execute the function in a way that captures the returned value in a variable.

// // 4.Console.log the string “When it comes to pets,” plus the returned value of the function.

// // ---

// // const getMyFullName = (first, last) => `${first} ${last}`

// // console.log(getMyFullName("Robby","Hecht"))

// // const sayMyFullName = (firstName, lastName, action) => action(firstName, lastName)

// // console.log(sayMyFullName( "Robby", "Hecht", getMyFullName));

// // Lightning 2.



// let worker = (array) => {
//   let workerObj = {}
//   let properties = ["name", "age", "profession"]
//   properties.forEach((property, index) => {
//     workerObj[property] = array[index]
//   });
//   return console.table(workerObj)
// }

// let workerInfo = (name, age, profession) => {
//   let workerArray = [name, age, profession]
//   worker(workerArray)
// }

// workerInfo("robby", "39", "developer");

// console.table(worker)

// let stats = (name, age, profession) => worker([name, age, profession]);

// objectives:

// function object
// loop
// console.table()
// create an object

// function array
// create an array
// call function object

// 1.Create a function that creates an object with three properties: name, age, profession. Have the function take an array as an argument. In the body of the function, loop over the array to set the values of the object’s properties. log the result to the console as a table.

// 2.Create a second function that takes three arguments: name, age, profession. Have the function place the three arguments into an array and pass that array to the first function by calling it.

// ---

// let add = (a,b) => {
//   return a+b;
// }

// let subtract = (a,b) => {
//   return a - b
// }

// let performAction = (a,b,action) => {
//   return action(a,b);
// }

// let test = performAction(5,8,add);
// let test2 = performAction(5,8,subtract);

// console.log(test);
// console.log(test2);

// ---

// Lightning 3.

let addition = (a,b) => { 
  return a+b;
}

let calculate = (a,b,action) => {
  return action(a,b)
}

let result = calculate(-1,6,addition)
console.log(result)


// 1. Create a function that logs the result of adding two numbers

// 2. Create a second function called calculate that takes three arguments: two numbers and a function

// 3. Execute the second function and make it output 5

