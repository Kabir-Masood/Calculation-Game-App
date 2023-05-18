const randomNum1 = Math.ceil(Math.random() * 20);
const randomNum2 = Math.ceil(Math.random() * 20);

const qElement = document.getElementById("question");
const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");

qElement.innerText = `What is ${randomNum1} multiply by ${randomNum2}?`;

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}

scoreElement.innerText = `score : ${score}`;

const correctAns = randomNum1 * randomNum2;

formElement.addEventListener("submit", ()=>{
    const userAns = +inputElement.value;
    console.log(userAns, typeof userAns);

    if(correctAns === userAns){
        score++;
        updateScoreStorage();
    }else{
        score--;
        updateScoreStorage();
    }
})

function updateScoreStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}