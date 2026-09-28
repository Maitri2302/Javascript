const users = [
    {
        name: "Amisha Rathore",
        pic: "https://plus.unsplash.com/premium_photo-1755004629327-2ccbf9590184?w=700&auto=format&fit=crop&q=60",
        bio: "silent chaos in a loud world"
    },
    {
        name: "Riya Malhotra",
        pic: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&q=60&w=700",
        bio: "finding magic in ordinary days"
    },
    {
        name: "Ananya Kapoor",
        pic: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&q=60&w=700",
        bio: "lost in thoughts, found in dreams"
    },
    {
        name: "Meera Sharma",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=700",
        bio: "soft heart, strong mind"
    },
    {
        name: "Aarohi Singh",
        pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=60&w=700",
        bio: "collecting moments, not things"
    },
    {
        name: "Kavya Nair",
        pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=60&w=700",
        bio: "peace looks good on me"
    },
    {
        name: "Ishita Verma",
        pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=60&w=700",
        bio: "a little sunshine, a little chaos"
    },
    {
        name: "Tanya Mehta",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=700",
        bio: "making memories between deadlines"
    }
];

const container = document.querySelector("#users-container");

function showUsers(arr) {

    container.innerHTML = "";

    arr.forEach(function (user) {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        const content = document.createElement("div");
        content.classList.add("content");

        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;

        content.appendChild(heading);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        container.appendChild(card);
    });
}

showUsers(users);

let inp = document.querySelector(".inp");

inp.addEventListener("input", function () {
    console.log("You typed:", inp.value);
    let newUsers = users.filter(function (user) {
        return user.name
            .toLowerCase()
            .includes(inp.value.toLowerCase());
    });
    showUsers(newUsers);
});