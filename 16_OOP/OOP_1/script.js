function CreatePencil(name,price,color){
    this.name=name;
    this.price=price;
    this.write=function(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=color;
        document.body.appendChild(h1);
    };
}

let pencil1=new CreatePencil("Apsara",10,"blue")
pencil1.write("Hello")