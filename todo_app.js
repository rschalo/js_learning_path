let to_do_list = [];
let response = "";
let new_item = "";
let delete_item = "";
const greet = function(){
    while (response !== "Exit"){
        response = prompt("Thank you for using ToDo List! What would you like to do?");
        if(response.toLowerCase() === "new"){
            new_item = prompt("What item would you like to add?");
            to_do_list.push(new_item);
            //prompt user for new entry in todo list
        } else if (response.toLowerCase() === "list"){
            console.log(to_do_list);
            //prompt user to view todo list in console
        } else if (response.toLowerCase() === "delete"){
            delete_item = prompt("What item would you like to delete?");
            deletion_index = to_do_list.indexOf(delete_item);
            delete to_do_list[deletion];
            to_do_list = to_do_list.filter(function(el) {
                return el != "";
            });
            //delete an item in the array based on text, not just index
        } else {
            break;
            //exit while loop
        };
    } console.log("Thanks for using this app!")
}

document.addEventListener("DOMContentLoaded", greet())
