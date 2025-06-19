// let newDate = new Date()
// let newDate = new Date( "01-23-2025")
 
// console.log(newDate.toString());

let myCreateddate = new Date( 2023, 0, 24,18 ,3)
// console.log(myCreateddate.toLocaleString());


let myTimestamps= Date. now()

// console.log(Math.floor(myTimestamps/1000))

let newInfo = new Date()

// console.log(newInfo.getMonth()+1);
// console.log(

// newInfo.toLocaleString ('default' , {
// weekday : "long"

// })
// );
   

const  Arr = [1,2,3,4,5,6]

// console.log(Arr.slice(1 , 3));
// console.log(Arr);

// console.log(Arr.splice(1 , 3));
// console.log(Arr);



const myHeros = ["Shiva", "Rama", "Krishna", "Hanuman", "Buddha"]

const myHeros2 = ["mahadev", "laxmi", "saraswati", "ganesh", "karthik"]
//  console.log(myHeros);
// console.log(myHeros2);
// console.log(myHeros.concat(myHeros2));
// const myHeros3 = [...myHeros, ...myHeros2]
// 0

const Arrauy1=[1,2,3,[4,5,6,],4,[4,5,,6,7,[8,9,10]]]
const Another_Array= Arrauy1.flat(Infinity)

// console.log(Another_Array);
//  console.log(Array.isArray("komal"));
 

 let score1=100
 let score2=200
 let score3=300
//  console.log(Array.of(score1, score2, score3));

const mysym1=  Symbol("mykey1")

 let userinfo = {
 
    name: "komal",
    age: 25,
    city: "pune",
  [mysym1]: "mykey1"

 }

 console.log(userinfo);

 userinfo.greetings = function (){
     console.log("hello world");
 }

 userinfo.greetingsTwo = function (){
    console.log(`hello ${this.name}`);
 }
 console.log(userinfo.greetings ());
    console.log(userinfo.greetingsTwo())
 


