var list = [];
let state = null;

while(state !== "quit" ){
    state = prompt("What do you whant to do");
    if(state === "new"){
        list.push(prompt("What to add"));
    } else if (state === "list") {
        alert("Hi");
    } else if (state === "delete") {
        list.splice(list.indexOf(prompt("What do you need removed")),1);
    } else if (state === "quit"){
        alert("Bye");
    }
}