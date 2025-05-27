//Function

function sayMyname(){
    console.log("S")
    console.log("h")
    console.log("o")
    console.log("b")
    console.log("h")
    console.log("i")
    console.log("t")
}

// sayMyname()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1,num2){
    let result = (num1 + num2)
    return result
}

addTwoNumbers("a",3)

const result =  addTwoNumbers(5,6)
// console.log("Result: ",result)

function loginUserMessage(username){
    if(!username){
        console.log("enter a valid username");
        return
    }
    return `${username} just logged in`;
    }

// console.log(loginUserMessage(""));

function calculateCartPrice(val1,val2,...num1){
 return num1
}
 
// console.log(calculateCartPrice(20,30,40,50,60,70,80));

const user = {
    username: "Shobhit",
    id: "22022386"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and ID is ${anyobject.id}`);
}

// handleObject(user)
handleObject(
    {
    username: "shobhit",
    id: 22022386
}
)

//Same Can be used for Array in Functions
