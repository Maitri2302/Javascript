function createToaster(config) {

    // ONE container for all notifications
    let parent = document.createElement("div");

    // Position the container
    parent.className = `
        fixed
        ${config.positionX === "right" ? "right-10" : "left-10"}
        ${config.positionY === "top" ? "top-20" : "bottom-10"}
        flex
        flex-col
        gap-3
    `;

    document.body.appendChild(parent);


    // Function returned by createToaster
    return function(notification) {

        let div = document.createElement("div");

        div.className = `
            ${config.theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-black"}
            px-6
            py-3
            rounded
            shadow-lg
        `;

        div.textContent = notification;

        // Add new notification to the SAME container
        parent.appendChild(div);


        // Remove THIS notification after duration
        setTimeout(() => {
            div.remove();
        }, config.duration * 1000);
    };
}


let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3
});


toaster("This is a dummy notification");

setTimeout(() => {
    toaster("Harsh accepted your request");
}, 1500);