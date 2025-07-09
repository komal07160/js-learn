
// let nums = [1,2,3,4,5];

// let newnums = nums.filter((Num) => Num >3 )
// // console.log(newnums);




let books = [
    {title: "Book One", author: "Author A", year: 2001},
    {title: "Book Two", author: "Author B", year: 2005},
    {title: "Book Three", author: "Author C", year: 2010},
    {title: "Book Four", author: "Author D", year: 2015},
    {title: "Book Five", author: "Author E", year: 2020}
];

// let findbooks = books.filter( (bk) => {
//     return  bk .year > 2005  ||  bk.title== "Book Three";

    
// })

    // console.log(findbooks);
 



    // let findbooks = books.map((bk) => {
    //     return bk.title== "Book Three" ;
    // })

    //  console.log(findbooks);
     
   // will return an array of boolean values indicating whether each book matches the condition or not

// Map method

// let nums = [1, 2, 3, 4, 5];

// let nwnums = nums.map((item) => {
//     return  item + 2
// })

// console.log(nwnums);




// reduce method


let shoppingCart = [
    {item: "Apple", price: 100, quantity: 3},
    {item: "Banana", price: 456, quantity: 5},
    {item: "Cherry", price: 780, quantity: 2},
    {item: "Date", price: 4354, quantity: 1}
];

let totalcost = shoppingCart.reduce((acc , crrval) => {
    return acc + crrval.price  ;
},0)


console.log(totalcost);
