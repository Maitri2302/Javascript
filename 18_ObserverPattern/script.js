class YoutubeChannel{
    constructor(){
        this.subscribers=[];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name} You have subscribed the channel.`);
    }
    unsubscribe(user){
        this.subscribers=this.subscribers.filter((sub)=>sub!==user);
        user.update(`You have un-subscribed from the channel`);
    }
    notify(message){
        this.subscribers.forEach((sub)=> sub.update(message));
    }
}

class User{
    constructor(name){
        this.name=name;
    }
    update(data){
        console.log(`${this.name}, ${data}`);
    }
}

let sheriyans=new YoutubeChannel();
let user1=new User("Harsh");

sheriyans.subscribe(user1);
sheriyans.notify("Hiii")