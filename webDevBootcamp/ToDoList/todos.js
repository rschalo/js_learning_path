var LIs = document.querySelectorAll("li")

for(i=0;i<LIs.length;i++){
    LIs[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
    LIs[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    })
    LIs[i].addEventListener("click", function(){
        this.classList.toggle("done");
    })
};

