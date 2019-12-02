let to_do_list = [];
let response = "";
let new_item = "";
const greet = function(){
    response = prompt("Thank you for using ToDo List! What would you like to do?");
    if(response === "New"){
        new_item = prompt("What item would you like to add?");
        to_do_list.push(new_item);
    }
}

document.addEventListener("load", greet())
