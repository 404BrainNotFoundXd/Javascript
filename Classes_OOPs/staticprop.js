class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);   
    }

   static createId(){
        return `123`
    }
}

const shobhit = new User("Shobhit")

console.log(shobhit.createId());
