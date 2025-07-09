

// const myArray = [1, 2, 3, 4, 5];
// for (const val of myArray) {
//     console.log(val);  
// }


const map = new Map() 
map.set("IN" , "INDIA") 
map.set("US" , "UNITED STATES") 
map.set ("UK" , " UNITED KINGDOM") 

// console.log(map);

 


// for (const [key , value] of map){
//     console.log(key  +":"+  value);
// }

 



// let myArray= ["apple", "banana", "cherry", "date"];

// myArray.forEach((value) => {
//        console.log(`the value is ${value}`);
       
// })


let myobj = [
    {name: "John", 
        age: 30},
    {name: "Jane", 
        age: 30},
    {name: "Doe", 
        age: 30},
]

myobj.forEach((values) => {
            console.log(`${values.name }`);
            
})