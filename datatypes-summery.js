//primitiv

// 7 types:
//string ,number ,boolean ,null,undefined,symbol
//BigInt



//refrence (Non primitive)
//array , objects functions
//+++++++++++++++++++++++++++++++++++++++++++++++++
//stack memory heap memmory
//stack(primitive),Heap (Non-primitive)


let myYoutubename ="dev"
let anothername = myYoutubename
anothernmae="chaiaurcode"


console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);