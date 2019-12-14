window.onload = function(){
    var body = document.querySelector("body")
    var colorMe = function(){
        return(body.style.backgroundColor != "purple" ? (body.style.backgroundColor = "purple") : (body.style.backgroundColor = "white"))
    };
    document.querySelector("button").addEventListener("click", colorMe);
};
