

function Myfunction (Number1 , Number2){
// console.log("k")
// console.log("o")
// console.log("m")
// console.log("a")
// console.log("l")
//   console.log(Number1 + Number2);;
}

// Myfunction(10, 20);


function myNumber(num1,num2){
//        let result= num1 +num2;
// return result;

     return num1 + num2;
}
const result = myNumber(10,20);

// console.log("result", result);

function  userloggin(user){
     return  (`${user} just logged in`);
}

// console.log(userloggin("komal"));

function  userloggin2(user){
     if(!user){
            console.log(`${user} just logged in`);
          return "please enter user name";
          
     }
   
     
     return(user);

}

// console.log(userloggin2("komal"));

// const  userdetails={
//      name:"komal",
//      age: 20,
//      email: "komal@example.com"
// }

function userfullDetail(anyobject){
     return  (`name is ${anyobject.name} and age is ${anyobject.age}`)

}
// console.log(userfullDetail({
//      name:"komal",
//      age: 20,
//      email: "komal@example.com"
// }));

// Rest operator
function  user1( num, num0 , ...num1 ){
     return num1
}
// console.log(user1(10 ,20 , 30 ,40))



const myArray =[10,20,30,40,50,60,70,80,90,100];

function myArrayFunction(secondvalue){
     return secondvalue[1]
}

console.log(myArrayFunction(myArray));

