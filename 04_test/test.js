const profile =[
    {
        id:"1",
        name:"komal",
        age: 20,    
    },
    {
        id:"2",
        name:"komal2",
        age: 22,    
    },
    {
        id:"3",
        name:"komal3",
        age: 23,    
    },
    {
        id:"4",
        name:"komal4",
        age: 24,    
    },
    {
        id:"5",
        name:"komal5",
        age: 25,    
    },
    {
        id:"6",
        name:"komal6",
        age: 26,    
    },
    {
        id:"7",
        name:"komal7",
        age: 27,    
    },
    {
        id:"8",                                                                 
        name:"komal8",
        age: 28,    
    },
    {
        id:"9",
        name:"komal9",
        age: 29,    
    }
]

 


let trimmedprofile= function() {
 
 return profile.splice(3,1);

}


 



const newprofile = function(){
    if (profile.length <10) {
        return {
            id: profile.length + 1,
            name: `komal${profile.length + 1}`,
            age: profile.length + 21
        }
    }
}
// console.log(newprofile());

console.log(profile.push(newprofile()));

console.log(profile);


console.log(trimmedprofile());
// console.log(profile);

const newname = function(index){

    return profile.map( ) 
    
}

 
 
 
 
 
 
