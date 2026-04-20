class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }   

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email=value
    }

    set password(value){
        this._password=value
    }

    get password(){
        return `${this._password}encrypt`
    }
}

const maitri=new User("maitri@madi","abc")
console.log(maitri.email)
