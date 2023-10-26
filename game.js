;// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1Box = document.getElementById("number1");
let number2Box = document.getElementById("number2");

let number1 = Math.round(Math.random()*100)
let number2 = Math.round(Math.random()*100)

number1Box.textContent = number1;
number2Box.textContent = number2;

// Iteration 3: Creating variables required to make the game functional
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let mul = document.getElementById("mul")
let divide = document.getElementById("divide")
let modulus = document.getElementById("modulus")
let score = 0;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3Box = document.getElementById("number3");
let number3;
// Iteration 5: Creating a randomise function to make the game
let abs;
function randomise(){

    
    number1 = Math.round(Math.random()*100);
    number2 = Math.round(Math.random()*100);
    if(number1 < number2){
        abs = number1
        number1 = number2;
        number2 = abs;
    }

    let operator = Math.ceil(Math.random()*5);
    switch(operator){
        case 1 : number3 = number1 + number2;break;
        case 2 : number3 = number1 - number2;break;
        case 3 : number3 = number1 * number2;break;
        case 4 : number3 = Math.floor(number1 / number2);break;
        case 5 : number3 = number1 % number2;break;

    }
    number1Box.textContent = number1;
    number2Box.textContent = number2;
    number3Box.textContent = number3;

}

randomise()
// Iteration 6: Making the Operators (button) functional
//plus operator
plus.onclick = () =>{
    if(number1 + number2 == number3){
        score++
        randomise()
        console.log(score)
        clearInterval(interval);
        startInterval()
        update();
    }else{
        gameOver();
    }
}

function gameOver(){
    window.location.href = "./gameover.html"
}

//minus operator
minus.onclick = () =>{
    if(number1 - number2 == number3){
        score++
        randomise()
        console.log(score)
        clearInterval(interval);
        startInterval()
        update();
    }else{
        gameOver();
    }
}

function gameOver(){
    window.location.href = "./gameover.html"
}

//multiplication operator
mul.onclick = () =>{
    if(number1 * number2 == number3){
        score++
        randomise()
        console.log(score)
        clearInterval(interval);
        startInterval()
        update();
    }else{
        gameOver();
    }
}

function gameOver(){
    window.location.href = "./gameover.html"
}

//divide operator
divide.onclick = () =>{
    if(number1 / number2 == number3){
        score++
        randomise()
        console.log(score)
        clearInterval(interval);
        startInterval()
        update();
    }else{
        gameOver();
    }
}

function gameOver(){
    window.location.href = "./gameover.html"
}

//modulus operator
modulus.onclick = () =>{
    if(number1 % number2 == number3){
        score++
        randomise()
        console.log(score)
        clearInterval(interval);
        startInterval()
        update();
    }else{
        gameOver();
    }
}

function gameOver(){
    window.location.href = "./gameover.html"
}
// Iteration 7: Making Timer functional
let time = 10;
let timer_box = document.getElementById("timer")
let interval;

function startInterval(){
    time = 15;
    interval = setInterval(()=>{

        if(time==0){
            clearInterval(interval);
            location.href="./gameover.html";
        }

        timer_box.textContent = time;
        time--;
    }, 1000)
}

function update(){
    console.log(score);
    localStorage.setItem("score", score);
    clearInterval(interval);
    startInterval()
}

startInterval()

localStorage.setItem("score", score)