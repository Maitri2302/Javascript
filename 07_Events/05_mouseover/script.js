let main = document.querySelector("#main");

main.addEventListener("mouseover", function () {
    main.style.backgroundColor = "yellow";
});

// Optional: restore color when mouse leaves
main.addEventListener("mouseleave", function () {
    main.style.backgroundColor = "rgb(243, 70, 70)";
}); 

window.addEventListener("mousemove",function(dets){
    main.style.top=dets.clientY+"px";
    main.style.left=dets.clientX+"px";
})