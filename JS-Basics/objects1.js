// singleton
//Object.create


//onject literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shobhit",
    [mySym]: "mykey1",
    age:  22,
    location: "Kochi",
    email: "shobhit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


//Change Values of Onjects

JsUser.email = "shobhit@google.com"
// Object.freeze(JsUser)
JsUser.email = "shobhit@yahoo.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
 console.log(JsUser.greeting())
 console.log(JsUser.greetingTwo())