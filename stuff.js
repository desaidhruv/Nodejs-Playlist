var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};
// console.log(counter(['shaun', 'David', 'ryu']));
var adder = (a,b) => `The sum of 2 numbers is ${a+b}`;
var pi = 3.142; 
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};