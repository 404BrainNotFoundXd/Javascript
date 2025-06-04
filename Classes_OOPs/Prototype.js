let myName = "Shobhit   "
let myChannel ="chai   "



let myHeros = ["Thor","Spiderman"]


let heroPower = {
    Thor: "hammer",
    Spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.Shobhit = function(){
    console.log(`Shobhit is present in all objects`);
    
}

Array.prototype.sayHello = function(){
    console.log(`Hello`);
}


heroPower.Shobhit()
// heroPower.sayHello()
myHeros.Shobhit()
myHeros.sayHello()


//Inheritance

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    _proto_:TeachingSupport
}
Teacher._proto_ = heroPower

//Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiaurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
  
}
 
anotherUsername.trueLength()
"Shobhit".trueLength()