var logo = document.querySelector("#hplogo");
logo.setAttribute("src", "http://www.eastcovettvets.co.uk/uploads/Animals/gingerkitten.jpg");

logo.style.width = "500 px";
logo.style.height = "100 px";
logo.style.border = "2px solid purple";

var links = document.getElementsByTagName("a");

//boilerplate for loop

for(var i=0;i<links.length;i++){
    links[i].setAttribute("target", "update");
    links[i].getAttribute("target");
}
