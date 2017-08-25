# CoderBabez

##  Week Eleven - Arrays

### Objectives
Learn about the array data type and how to use it to store multiple 

### Vocab
* var/variable
* array
* index

### Lesson - Arrays!

The variables we've seen so far have been able to store numbers...
```
var n = 10;
var f = 1.5;
```

...or strings
```
var str1 = "coderbabez";
var str2 = 'classes are so much fun i love them this is the best';
```

The above variables each store a single value.

What if you want to store a lot of data that goes together?

You can keep them together in an array!

An array is an **<span title='like pages in a book'>ordered</span>**, **<span title='e.g., can be changed. add stuff, remove stuff, update a single thing in the set, etc'>mutable<span>** set of variables.

```
var numbers = [6, 1, 4.3, 500];
var strings = ['bowie', 'tonks', 'andie', 'stella', 'benji'];
var mixed = [1, 'coder', 67, 10, 'babez'];
var deeplyMixed = [[1, 2, 3], ['a', 'b', 'c']];
```

To access an element of an array, you refer to it by its **<span title='reference to a position in the array'>index</span>**. One trick: the first index is 0, not 1.
```
var data = ['a', 'b', 'c', 'd', 'e'];
data[0]; // get the element of data at index 0 (aka the first thing in the array)
console.log(data[0]);  // 'a'
console.log(data[1]);  // 'b'
console.log(data[4]);  // ??
console.log(data[10]); // ??
console.log(data[-1]); // ??
```

Open jsfiddle.net and try running the above.

You can get the length of an array:
```
var data = ['a', 'b', 'c', 'd', 'e'];
console.log(data.length);
```

You can add elements to an array:
```
var data = ['a', 'b', 'c', 'd', 'e'];
data.push('f');  // add 'f' to the end
console.log(data);
data.unshift('-'); // add '-' to the beginning
console.log(data);
```

You can remove elements from an array:
```
var data = ['a', 'b', 'c', 'd', 'e'];
data.shift(); // remove the first element
console.log(data); 
data.splice(1, 1); // remove the 2nd element
console.log(data); 
data.pop(); // remove the last element
console.log(data); 
```

You can change the value of an element:
```
var data = ['a', 'b', 'c', 'd', 'e'];
data[0] = 'A'; // change the first element
console.log(data); 
```

### Project

Let's build an image carousel.

Take a look: https://becsegal.github.io/coderbabez-wk11-js-7/solution/

There will be forward and back arrows for navigation.

When you are on the first picture, clicking Back should do nothing.

When you are on the last element, clicking Next should do nothing.

## Homework

Display a custom caption for each image.

Bonus: Disable the navigation buttons when you reach the end. If you're at the beginning, disable Back. If you're at the end, disable Next.

# Reference:

* https://jsfiddle.net/
* https://www.w3schools.com/jsref/jsref_obj_array.asp
* https://www.w3schools.com/jsref/jsref_push.asp
* https://www.w3schools.com/jsref/jsref_pop.asp
* https://www.w3schools.com/jsref/jsref_shift.asp
* https://www.w3schools.com/jsref/jsref_unshift.asp
* https://www.w3schools.com/jsref/jsref_splice.asp

