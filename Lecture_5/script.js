alert("Hello world");

for (let i = 0, x = "!"; i < 7; i++) {
        console.log(x,"\n");
        x += "!";
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
       console.log("FizzBuzz") ;
    }else if(i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

let w = +prompt("give me width", "8");
let h = +prompt("give me height", "8");
let x = "";
for(let i = 0, count = 1; i < h; i++) {
    for(let j = 0; j < w; j++) {
        if (count % 2 !== 0) {
            x += " ";
        } else {
            x += "#";
        }
        count++;
    }
    x += "\n";
    count++;
}
console.log(x);

