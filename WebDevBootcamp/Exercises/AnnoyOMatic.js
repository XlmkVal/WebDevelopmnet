var status = false;
var answer = null;

while(status === false) {
    answer = prompt("Are we there yet");
    if (answer === "yes" || answer === "yeah"){
        status = true;
        alert("Yes, we finally made it")
    } else {
        alert("No, we are not yet")
    }
}