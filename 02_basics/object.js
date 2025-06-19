const obj1 = {1:"a", 2:"b", 3:"c"};
const obj2 = {1:"a", 2:"b", 3:"c"};
// const obj3 = {...obj1, ...obj2};
const obj3 = Object. assign({}, obj1 , obj2)
// console.log(obj3);



// Destructuring of objects

const course = {
name: "javascript",
price: 100,
duration: 30
}

const {price : pri} = course;

console.log( pri);
