// (1) Introduction:
//                     // JavaScript is a high-level, interpreted programming language primarily 
//                     // used for client-side web development.
//                     // To make a dynamic behavier of web page


// (2) Differ B/W Vav and let:

//                     function exampleFunction() {
//                     var x = 10;
//                     if (true) {
//                         var y = 20;
//                         let z = 30;
//                         console.log(x); // Output: 10
//                         console.log(y); // Output: 20
//                         console.log(z); // Output: 30
//                     }
//                     console.log(x); // Output: 10
//                     console.log(y); // Output: 20 (var is function-scoped)
//                     console.log(z); // Error: z is not defined (let is block-scoped)
//                     }

//                     (a) Hoisting

//                         // Variables declared with var are hoisted to the top of their scope,
//                         // which means they can be used before their declaration. However,
//                         // their assignment is not hoisted, so they will have an initial value of undefined.

//                         // Variables declared with let are also hoisted, but they are not initialized
//                         // (they are in a "temporal dead zone" before their declaration), so attempting 
//                         // to use them before declaration results in a ReferenceError.

//                         console.log(a); // Output: undefined
//                         var a = 5;

//                         console.log(b); // Error: Cannot access 'b' before initialization
//                         let b = 10;
                    
//                     (b) Redeclaration:
                    
//                         // Variables declared with var can be redeclared within the same scope without any errors.
//                         // The latest declaration will take precedence.

//                         // Variables declared with let cannot be redeclared within the same block or function scope,
//                         // and attempting to do so will result in a SyntaxError.

//                         var x = 5;
//                         var x = 10; // No errors, x is reassigned to 10

//                         let y = 5;
//                         let y = 10; // Error: Identifier 'y' has already been declared

//                     (c) Global Object Property:

//                         If you declare a variable with var in the global scope (outside any function),
//                          it becomes a property of the global object (e.g., window in browsers).

//                         Variables declared with let in the global scope do not become properties
//                          of the global object.

//                          var globalVar = 42;
//                         console.log(window.globalVar); // Output: 42

//                         let globalLet = 100;
//                         console.log(window.globalLet); // Output: undefined


// (3) what is curring:

//                     // currying allows you to transform a function that takes multiple arguments into 
//                     // a sequence of unary (single-argument) functions, making it more flexible and composable.

//                     // A regular function that takes three arguments
//                     function add(a, b, c) {
//                         return a + b + c;
//                     }
                    
//                     // Now, let's create a curried version of the 'add' function
//                     function curryAdd(a) {
//                         return function(b) {
//                         return function(c) {
//                             return a + b + c;
//                         };
//                         };
//                     }
                    
//                     // Usage of the curried function
//                     const curriedAdd = curryAdd(5);
//                     const result = curriedAdd(10)(20); // Equivalent to: add(5, 10, 20)
//                     console.log(result); // Output: 35

// (4) closure:
//                     function outerFunction() {
//                         let outerVariable = 'Hello, ';
                    
//                         function innerFunction(name) {
//                         return outerVariable + name;
//                         }
                    
//                         return innerFunction; // Returning the inner function creates a closure
//                     }
                    
//                     const greet = outerFunction();
//                     console.log(greet('John')); // Output: "Hello, John"
                    
// (5) push() / pop():

//                     PUSH()
//                         // is used to add one or more elements to the end of an array

//                     POP()
//                         // is used to remove the last element from the array

// (6) unshift() / shift():

//                     UNSHIFT()
//                         // The unshift() method is used to add one or more elements to the beginning of an array

//                     SHIFT()
//                         // The shift() method removes the first element from an array    
                        
// (7) spread (...) / rest (this is  parameter):

//                     spread

//                         // The spread operator is used for combining two or more arrays, objects and for function call 
                        
//                         function myFunction(a, b, c) {
//                             console.log(a, b, c);
//                         }
                        
//                         const values = [1, 2, 3];
//                         myFunction(...values); // Output: 1 2 3


//                         const arr1 = [1, 2, 3];
//                         const arr2 = [4, 5, 6];

//                         const combinedArray = [...arr1, ...arr2];
//                         console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]


//                         const person = { name: 'John', age: 30 };
//                         const address = { city: 'New York', country: 'USA' };

//                         const mergedObject = { ...person, ...address };
//                         console.log(mergedObject);
//                         // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }


//                     rest(parameter):

//                         function myFunction(param1, param2, ...restParameters) {
//                             // param1 and param2 are regular function parameters
//                             // ...restParameters is the rest parameter, which represents all the remaining arguments as an array
                        
//                             console.log(param1);
//                             console.log(param2);
//                             console.log(restParameters);
//                         }
                        
//                         myFunction(1, 2, 3, 4, 5);
//                         // Output:
//                         // 1
//                         // 2
//                         // [3, 4, 5]