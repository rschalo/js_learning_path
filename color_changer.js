/*
window.onload = function(){
    var body = document.querySelector("body")
    var colorMe = function(){
        return(body.style.backgroundColor != "purple" ? (body.style.backgroundColor = "purple") : (body.style.backgroundColor = "white"))
    };
    document.querySelector("button").addEventListener("click", colorMe);
};
*/

// toggle by adding class
window.onload = function(){
    var button = document.querySelector("button");
    button.addEventListener("click", function(){
        document.body.classList.toggle("purple");
    })
}
