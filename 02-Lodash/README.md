# Lodash
***Lodash*** is an open source(MIT licensed) modern javascript utility library to ease the programming tasks in a functional programming paradigm. The main goal of this library is modularity, performance and simplicity. This library handles the hard parts of javascript across various types of data such as Arrays, objects, strings, functions, date and so on. This project is inspired by UnderScore utility library.

The module methods are mainly used for

* Iterating Arrays, Objects and Strings
* Manipulating and testing values
* Creating composite functions
* Creating own mixins for Lodash

The major features of this library are,

* Modularity and consistency
* Enhances and compatible with ES6/7
* Compatible build available for IE8 and older
* Available in AMD, ES and CommonJS module formats


The library is available through both offline and online modes. The offline downloads of this library is available in both core build(~4kb gzipped) and full build(~24kb gzipped) variations. Whereas online resources are available through CDN.

To explore all the method examples of Lodash library, I created examples folder based on the official documentation and stored in the below github repository.

Github: https://github.com/sudheerj/awesome-javascript-technologies/tree/master/02-Lodash

# Installation: #

It can be installed in both browser and node environments.

1.  Browser:  Attach script as either offline or online resource.

Offline resource:
```
<script src="lodash.js" ></script >
```
Online resource:
```
<script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.js" ></script>
```

Note: The bower support is removed in the latest version(v4) considering npm.

2.  Node module:  You can install through either npm or yarn package manager.

NPM:
```
 npm i --save lodash
 ```
(YARN:
```
yarn add lodash
```
After installation, you can use the package using require as below ,  
```
var _ = require('lodash');
```
If you are using specific methods then it is recommended to install and use those specific modules instead of downloading the entire library. For example, if you use times method in the project then it is recommended to install and use times module as below.
```
      npm install --save lodash.times

      var times = require('lodash.times');
```
# Why we need Utility functions #

In almost all programming languages, we might heard about utility functions or classes. These utilities are helpful to reduce the repetitive work in an easy and performative approach. In earlier days and even in the current projects, we create utility folder in the project structure to deal with these repetitive and computed operations.

JavaScript utility libraries such as Underscore, Valentine, and wu are most used libraries compared to other libraries in the market. Initially Underscore library created a great impression in the utility libraries world. Thereafter, Lodash, a new library is inspired  and created a Underscore build as a replacement for UnderscoreJS with great enhancements. Currently Lodash is very active and defacto utility library in JS world.

The latest ECMAScript versions provided similar kind of methods by seeing the benefits of these methods. Even though ES6/E7 supported some of these methods natively in their browsers, lodash provides a huge set of methods considering each possible scenario in the real time development.

# Modular methods: #

The lodash modular methods are divided among Array,Collection, Function, Lang, String, Utils, Object, Number, Date, Seq  and Properties types. In the latest version(V4), there are around 320 methods existed. This blog cover one method from each major category to know the power of lodash library compared to plain JS implementation.

### Lang- cloneDeep:

The language specific concepts and utility methods are categorized under Lang module. In this section, we will see how the deep cloning made easy with cloneDeep method. In plain JS development, we normally iterate each property type to clone the object fully. This process is quite cumbersome and difficult in practical usage. The implementation for this case is mentioned in this stack overflow thread(https://stackoverflow.com/questions/4459928/how-to-deep-clone-in-javascript). There is a simpler JS solution by parsing the stringified JS object. But lodash approach is  quite straight forward with single line of code.

JS code snippet: 

The iterative code approach is available here https://stackoverflow.com/questions/4459928/how-to-deep-clone-in-javascript and the simpler version of deep closing on the object which is not having any function as below.
```
var originalObject = [{ 'a': 123 }, { 'b': 456 }];
JSON.parse(JSON.stringify(originalObject))
```
Lodash code snippet:
```
var originalObject =&nbsp;[{&nbsp;'a':&nbsp;123&nbsp;},&nbsp;{&nbsp;'b': 456&nbsp;}];
var&nbsp;clonedObject =&nbsp;_.cloneDeep(originalObject);
console.log(clonedObject[0]&nbsp;===originalObject[0]); 
```
// This return false due to reference
### Util - times: 

The various calculations/computations and common use-case scenarios are categorized under Util module. In this section, we will see how the iteration made simple with times method.  In plain JS development, we normally use basic for loop with nth iteration. This approach pollutes the scope with an additional variable.

JS code snippet:
```
for(var i = 0; i < 5; i++) {
    console.log("The Lodash iteration: count"+i);
}
```
Lodash code snippet:
```
_.times(5, function(i){
    console.log("The Lodash iteration: count"+i);
});
```
### Number- random:

The number specific computations or logic characteristics created under Number helper module. The random number generation with in the particular range is quite verbose in the native JS implementation. But lodash provides a method called random which accepts min and max boundaries as arguments. Moreover, the floating number is generated instead by enabling the third boolean argument.

JS code snippet: 
```
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
generateRandomNumber(10, 40);
```
Lodash code snippet:
```
// Integer
_.random(10, 40); 
// Floating point _.random(10.87, 40.56);
```
### Collection - Map:

To iterate over collection of objects and array types, there is one group of methods which are categorized under Collection section.  The map method is very helpful while iterating over the collection with iteratee function invocation.  For example, iterating over collection of objects and filter the array with specific criteria involves more steps. But this can be easily solved with lodash library.

JS code snippet:
```
var employees = [{

    "name": "raj",
    "address": [{"city":"Hyderabad"}, {"state": "TS"}],
    "phone": 12345678

}, {

    "owner": "mahesh",
    "address": [{"city":"Chennai"}, {"state": "TN"}]
    "phone": 98765432

}];
employees.map(function(employee){ return employee.address[0].state; });
```
Lodash code snippet:
```
_.map(employees, 'employee.address[0].state');
```
### Array- remove:

The common use cases of arrays are simplified with some set of helper methods which are categorized under Array section. For example, the removal of few items from an array based on some conditions involves loops and conditional statements which returns the result. But lodash's remove method  make it simple with single statement by returning the filtered array and deleted array.

JS code snippet:
```
var array = [1, 2, 3, 4];
var filteredArray = [];
    for(var i; i< array.length; i++){
     if(array[i] % 2 == 0){
        filteredArray.push(array[i]);
        delete array[i]
      }
    }
```
Lodash code snippet:
```
var array = [1, 2, 3, 4, 5, 6];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
console.log(array);
// => [1, 3, 5] 
console.log(evens);
// => [2, 4, 6]
```
### Object- inverse:

In javascript everything is treated as object type. Due to this behavior, it involves many computations on object type.  Lodash provided a collection of object helper methods which are used to iterate and manipulate object properties. For example, in vanilla JS, we need to iterate the object to swap key and value pairs but it is simplified with inverse method.

JS code snippet:
```
function swap(object){
    var revObject = {};
    for(var key in object){
      revObject[object[key]] = key;
    }
   return revObject;
}
console.log({A : 1, B : 2, C : 3, D : 4});
console.log(swap({A : 1, B : 2, C : 3, D : 4}));
```
Lodash snippet: 
```
var object = {A : 1, B : 2, C : 3, D : 4} };
_.invert(object);
// => { 1: A,  2: B,  3: C,  4: D }
```
Apart from the above types, lodash provides various other modules such as Functions, Math, Date, Methods, Properties and so on.  Please look at the github examples to cover all the helper methods.

# Summary:

The JavaScript acquired a rapid development in the recent days in both browser and node environments. Even though the latest ECMAScript specifications improved with native utility implementation, it is quite far away from the benefits of Lodash library and especially it's functional programming approach.  Many projects using this library as direct and indirect dependency.  This library is recommended for every JS developer as a code helper and performance booster.
