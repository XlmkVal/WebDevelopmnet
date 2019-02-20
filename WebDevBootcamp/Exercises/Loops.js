var num = 1;

while(num <= 10) {
    console.log(num);
    num += 2;
}

console.log("\n" + "this is the next one");

var num = 1; 

while(num <= 20){
    if(num % 4 === 0){
        console.log(num);
    }
    num++;
}

console.log("\n" + "this is the third one and an infinite loop")

num = 100;

while(num < 150) {
    console.log(num + 1);
    num--;
}