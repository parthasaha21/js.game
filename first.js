
//......game.....


let userSore = 0;
let comSore = 0;

const choice = document.querySelectorAll(".choice");

const masg = document.querySelector("#massage");

let userSorepara =document.querySelector("#my-score");
let compSorepara =document.querySelector("#com-score");

const genComchoice = ()=>{
     let option = ["rock","papper","sizier"]
     let randomNum = Math.floor(Math.random()*3);
     return option[randomNum];
}

const draeGame = ()=>{
     console.log("the game was draw");
     masg.innerText ="game draw." ;
     masg.style.backgroundColor="black";
}

const showWinner =(userWin)=>{

     if(userWin){
          userSore++
          userSorepara.innerText = userSore;
          masg.innerText = "you win.";
          masg.style.backgroundColor="green";  
     }else{
          comSore++
          compSorepara.innerText = comSore;
          console.log("you loss.");
          masg.innerText = "you lose.";
          masg.style.backgroundColor="red";
     }
}

const playgame=(userChoice)=>{
    console.log("user choise =",userChoice);

    let comChoice = genComchoice();

    console.log("com choise =", comChoice);

    if(userChoice === comChoice){
        //draw game
        draeGame();
    }else{
      let userWin = true;

      if(userChoice === "rock"){
          userWin =  comChoice === "papper" ? false : true

      }else if (userChoice === "papper"){
          userWin =  comChoice === "rock" ? true : false

      }else if (userChoice === "sizier"){
          userWin =  comChoice === "papper" ? true : false
      }
      showWinner(userWin);
    }
}


choice.forEach((choice) => {
     console.log(choice);
     choice.addEventListener("click",()=>{
    let userChoice = choice.getAttribute("id")
          // console.log("button was click" , userChoice);
          playgame(userChoice);
     })
});





























//give the grade of student

// let number = prompt("enter your number betwin 1-100");

// if(number >= 80  &&  number <= 100){
//     console.log(number, "your grade is A");

// }else if(number >= 70  &&  number <= 79){
//     console.log(number, "your grade is B");

// }else if(number >= 60  &&  number <= 69){
//     console.log(number, "your grade is C");

// }else if(number >= 50   &&  number <= 59){
//     console.log(number, "your grade is D");

// }else if(number >= 0   &&  number <= 49){
//     console.log(number, "your grade is F");

// }else{
//     console.log(number, "please enter number betwein 1-100")
// }


//********guse the number game
// let answer = 25;
// let geausGame = prompt("guse a number betwing 1-25");


// while(geausGame != answer){
//     let geausGame = prompt("you gause the wrong number");
// }

// console.log("you enter the write number");


// let userName = prompt("enter your full name");


// let add ="@" + userName + userName.length;

// console.log(add);



// let numbers =[89,67,60,45,35];

// let sum = 0;

// for(val of numbers){
//     sum = sum + val;
// }

// let avg = sum / numbers.length
// console.log(`average of numer is = ${avg}`);



// let items = [200,300,290,420];

// for (let i = 0; i <  items.length; i++) {
     
//      let offer = items[i] / 10;

//      let calculate = items[i] - offer;

//      console.log(`after offer new price was = ${calculate}`)
// }


// let items = ["bloombrag","microsoft","uber","google","ibm","netflix"]

// items.shift();
// items.splice(2,1,"ola")
// items.push("amazon")
// console.log(items);



// function sum(a,b) {
//     console.log(a+b)
// }

// sum(70,30)


// const multiply = (a , b) => {
//     return a * b;
// }



// function countVaul(str){
//     let count = 0;
//     for(let chart of str){
//         if(chart === "a" || chart === "e" || chart === "i" || chart === "o" || chart === "u"){
//             count++;
//         }
//     }
//     return count;
    
// }

// const countVow = (str) =>{
//     let count = 0;
//     for(let chart of str){
//         if(chart === "a" || chart === "e" || chart === "i" || chart === "o" || chart === "u"){
//             count++;
//         }
//     }
//     return count;
    
// }


// let arr = [2,3,4,5];

// arr.forEach(element => {
//     element = element*element;
//     console.log(element);
    
// });


// let arr =[45,94,93,67];

// let outputn = arr.filter((val)=>{
//      return val > 90;
// });

// console.log(outputn);


// let n = prompt("give a number");

// let arr = [];

// for(i=1; i<=n; i++){
//     arr[i-1] = i
// }
// console.log(arr);

// let sum = arr.reduce((res,car)=>{
//     return res + car;
// })

// console.log(sum);

// let fact = arr.reduce((res,car)=>{
//     return res * car;
// })

// console.log(fact);



// let h2 =  document.querySelector("h2");

// h2.innerText = h2.innerText + " apna collage";


// let box = document.getElementsByClassName("box")

// let indx = 1;

// for(div of box){
//     div.innerText = `this a new value ${indx}`
//     indx++
// }

// let btn = document.createElement("button");

// btn.innerText = "click me!";

 
// btn.style.color="white"
// btn.style.backgroundColor="red"

// document.querySelector("body").prepend(btn);


// let pera = document.querySelector("p")

// pera.classList.add("myClass");

// .............dark mode...........

// let btn = document.querySelector("button");
// //let body = document.querySelector("body");

// btn.addEventListener("click" , ()=>{
//      //body.classList.toggle("active");
//      document.querySelector("body").classList.toggle("active");
// });


// let box = document.querySelector(".box");

// box.addEventListener("mouseover",()=>{
//      document.querySelector("body").classList.toggle("hover");
// })
