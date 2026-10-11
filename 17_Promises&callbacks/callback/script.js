function profile(username,cb){
    console.log("Fetching profile data...");
    setTimeout(()=>{
        cb({_id:121,username,age:26,email:"hdh@djh.com"});
    },2000);
}

function Posts(id,cb){
    console.log("Fetching all posts...");
    setTimeout(()=>{
        cb({_id:id, saved:[1,2,87,3,22,923]});
    },3000);
}

function savedPosts(id,cb){
    console.log("fetcing saved posts...");
    setTimeout(()=>{
        cb({_id:id,saved:[1,5,3,2,33,321]});
    },3000);
}

profile("adi",function(data){
    console.log(data);
    Posts(data._id,function(posts){
        console.log(posts);
        savedPosts(data._id,function(saved){
            console.log(saved);
        })
    })
})