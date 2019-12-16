var options = document.querySelectorAll(".option-bar")
for(var i=0;i<options.length;i++){
    options[i].addEventListener("mouseover", function(){
        this.classList.add("highlight-choice");
    })
    options[i].addEventListener("mouseout", function(){
        this.classList.remove("highlight-choice");
    })
}

var easy = document.querySelector("#easy")
easy.addEventListener("click", function(){
    this.classList.add("currently-selected");
    hard.classList.remove("currently-selected")
});
var hard = document.querySelector("#hard")
hard.addEventListener("click", function(){
    this.classList.add("currently-selected");
    easy.classList.remove("currently-selected");
});

var boxes = document.querySelectorAll(".box-color")
for(var i=0;i<boxes.length;i++){
    boxes[i].addEventListener("mouseover", function(){
        this.classList.remove("box-color")
        this.classList.add("box-color-highlight");
    })
    boxes[i].addEventListener("mouseout", function(){
        this.classList.remove("box-color-highlight");
        this.classList.add("box-color");
    })
}