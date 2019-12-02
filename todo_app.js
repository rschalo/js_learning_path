let to_do_list = [];
let response = "";
let new_item = "";
let delete_item = "";
const greet = function(){
    while (response != "Exit"){
        response = prompt("Thank you for using ToDo List! What would you like to do?");
        if(response === "New"){
            new_item = prompt("What item would you like to add?");
            to_do_list.push(new_item);
        } else if (response === "List"){
            console.log(to_do_list);
        } else if (response === "Delete"){
            delete_item = prompt("What item would you like to delete?");
            deletion = to_do_list.indexOf(delete_item);
            delete to_do_list[deletion];
            to_do_list = to_do_list.filter(function(el) {
                return el != "";
            });
        } else {
            break;
        };
    }
}

document.addEventListener("load", greet())
