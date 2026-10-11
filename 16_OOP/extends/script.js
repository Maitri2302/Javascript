class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
        this.role="user";
    }

    write(text){
        let h1=document.createElement("h1")
        h1.textContent=`${this.name}: ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
        this.role="admin";
    }

    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        });
    }
}

let u1=new User("Harsh","aabfh@gmail.com")
let a1=new Admin("Rohit","rohit@outlook.com")