var secret = Math.random()*10;
secret = Math.floor(secret);

function guess(n){
    if (Number(n) === secret){
        return alert("You guessed it");
    } else {
        n = prompt("Try again" + secret);
        guess(n);
    }
}

var number = prompt("What is your number");
guess(number);