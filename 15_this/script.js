let form = document.querySelector("form");

let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userMangaer = {

    users: [],

    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },

    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },

    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });
        form.reset();
        this.renderUi();
    },
    renderUi: function () {
        document.querySelector(".users").innerHTML="";
        this.users.forEach(function (user,index) {

            const card=document.createElement("div");
            card.className =
            "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hove:scale-105, transition w-full max-w-sm break-words";

            card.addEventListener("click",function(){
                userMangaer.removeUser(index)
            })

            const img = document.createElement("img");
            img.className =
            "w-28 h-28 rounded-full object-cover mb-3 border-4 border-blue-200 shadow";
            img.src = user.photo;
            img.alt = "User Photo";
            card.appendChild(img);

            const name=document.createElement("h2");
            name.className="text-2xl font-bold mb-1 text-blue-700 text-center break-words w-full";
            name.textContent=user.username;
            card.appendChild(name);

            const role=document.createElement("p");
            role.className="font-medium mb-2 text-purple-500 text-center break-words w-full";
            role.textContent=user.role;
            card.appendChild(role);

            const desc=document.createElement("p");
            desc.className="font-medium mb-2 text-purple-500 text-center break-words w-full";
            desc.textContent=user.bio;
            card.appendChild(desc);

            document.querySelector(".users").appendChild(card);
        });
    },
    removeUser: function (index) { 
        this.users.splice(index,1);
        this.renderUi();
    }
};

userMangaer.init();