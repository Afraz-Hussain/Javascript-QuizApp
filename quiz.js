const mcqdata = [
    {
      id: 1,
      question: 'Who is the fastest bowler?',
      answers: [
        { answer: 'Shoaib Akhtar', iscorrect: true },
        { answer: 'Brian Lara', iscorrect: false }, // Brian Lara is a batsman
        { answer: 'Dale Steyn', iscorrect: false },
        { answer: 'Wasim Akram', iscorrect: false },
      ],
    },
    {
      id: 2,
      question: 'Who has the most runs in international cricket?',
      answers: [
        { answer: 'Ricky Ponting', iscorrect: false },
        { answer: 'Sachin Tendulkar', iscorrect: true },
        { answer: 'Virat Kohli', iscorrect: false },
        { answer: 'Jacques Kallis', iscorrect: false },
      ],
    },
    {
      id: 3,
      question: 'Which team has won the most ICC Cricket World Cups?',
      answers: [
        { answer: 'India', iscorrect: false },
        { answer: 'West Indies', iscorrect: false },
        { answer: 'Australia', iscorrect: true },
        { answer: 'Pakistan', iscorrect: false },
      ],
    },
    {
      id: 4,
      question: 'Who holds the record for the highest individual score in an ODI match?',
      answers: [
        { answer: 'Rohit Sharma', iscorrect: true },
        { answer: 'Chris Gayle', iscorrect: false },
        { answer: 'Martin Guptill', iscorrect: false },
        { answer: 'Virender Sehwag', iscorrect: false },
      ],
    },
    {
      id: 5,
      question: 'Who is known as the "Sultan of Swing"?',
      answers: [
        { answer: 'Glenn McGrath', iscorrect: true }, // Corrected from Wasim Akram
        { answer: 'James Anderson', iscorrect: false },
        { answer: 'Wasim Akram', iscorrect: false }, // Wasim Akram is known for his Yorkers
        { answer: 'Shane Warne', iscorrect: false }, // Shane Warne is a leg-spinner
      ],
    },
    {
      id: 6,
      question: 'What is the name of the first ever Cricket World Cup held in 1975?',
      answers: [
        { answer: 'The Prudential Cup', iscorrect: true },
        { answer: 'The Cricket World Championship', iscorrect: false },
        { answer: 'The ICC Cricket World Cup', iscorrect: false },
        { answer: 'The Champion Trophy', iscorrect: false },
      ],
    },
    {
      id: 7,
      question: 'Which country is known as the "Land of the Pharaohs"?',
      answers: [
        { answer: 'India', iscorrect: false },
        { answer: 'Australia', iscorrect: false },
        { answer: 'England', iscorrect: false },
        { answer: 'Egypt', iscorrect: true }, // Trick question! Not cricket related
      ],
    },
    {
      id: 8,
      question: 'What is the protective equipment worn on the batsman\'s legs?',
      answers: [
        { answer: 'Pads', iscorrect: true },
        { answer: 'Gloves', iscorrect: false },
        { answer: 'Helmet', iscorrect: false },
        { answer: 'Bat', iscorrect: false },
      ],
    },
    {
      id: 9,
      question: 'How many wickets are there in a cricket pitch?',
      answers: [
        { answer: '2', iscorrect: false },
        { answer: '3', iscorrect: false },
        { answer: '6', iscorrect: true },
        { answer: '8', iscorrect: false },
      ],
    },
    {
      id: 10,
      question: 'What is the name of the flat bat used to hit the ball in cricket?',
      answers: [
        { answer: 'Ball', iscorrect: false },
        { answer: 'Glove', iscorrect: false },
        { answer: 'Bat', iscorrect: true },
        { answer: 'Wicket', iscorrect: false },
      ],
    },
  ];


// inilitizatins 

let questions=document.querySelector('.heading1')
let showanswer=document.querySelector('.answers')
let submitbtn=document.querySelector('.submitbtn')

let scoreboard=document.querySelector('.scoreboard');
let correctanswer=document.querySelector('.correctanswer');
let wronganswer=document.querySelector('.wronganswer');
let playagain=document.querySelector('.playagain');
let container=document.querySelector('.container')
let totalscore=document.querySelector('.totalscore')
let question_progress=document.querySelector('.question_progress')


let total_questions_count =document.querySelector('.total_questions_count');

//timer 
let timedisplay=document.querySelector('.timer');
let timer;
let maxtime=60
let finishtime=0;



let msg =document.querySelector('.msg')
let answerIndex=0;
let questionIndex=0;
let selected_answers;

let correct_count=0;
let wrong_count=0;
let score=0;

//functions.

const totalquestions=()=>{
    total_questions_count.textContent=`total question ${mcqdata.length}`;
}

// Show question progress
const showQuestionProgress = () => {
    question_progress.textContent = `Question ${questionIndex + 1} of ${mcqdata.length}`;
};

const showresult=()=>{
    clearInterval(timedisplay)
    scoreboard.style.display='block';
    container.style.display='none';
correctanswer.textContent=`correct answers: ${correct_count}`
wronganswer.textContent=`wrong answers: ${wrong_count}`
totalscore.textContent=`score is ${(correct_count-wrong_count)*10}`




}

const play=()=>{
     answerIndex=0;
 questionIndex=0;
 selected_answers;

 correct_count=0;
 wrong_count=0;
 score=0;
 ShowQuestion(questionIndex)
 ShowAnswer(answerIndex)
 finishtime=0
 clearInterval(timer)
  starttimer()
  totalquestions()

}

playagain.addEventListener('click',()=>{
    
    scoreboard.style.display='none';
    container.style.display='block';
    play();
  
})



//1. to show question
const ShowQuestion=(quesnum)=>{
if(questionIndex==mcqdata.length){
    return showresult()
}
else{
    selected_answers=null;
    questions.textContent=(mcqdata[quesnum].question);
    SelectAnswer()
}
showQuestionProgress();

}
//2. to show answers
 const ShowAnswer=(ans)=>{
    showanswer.innerHTML=mcqdata[ans].answers.map((item,index)=>
`
<div class="answer">
    <input type="radio" id="${index}" name="answer" value="${item.answer}">
    <label for="${item+1}">${item.answer}</label>
</div>


`


).join(" ")
SelectAnswer()
 };
//3 to select answers


const SelectAnswer=()=>{

    showanswer.querySelectorAll('input').forEach((element)=>{
    element.addEventListener("click",(e)=>{
selected_answers=e.target.value;
console.log(selected_answers)//result is true and in false form..
    })
})

};


const submitAnswer=()=>{
submitbtn.addEventListener("click",()=>{
    if(selected_answers!==null){
const selectedanswertext=selected_answers;
//finding correct current answer for current question

const correctanswertext=mcqdata[questionIndex].answers

.find(answer=>answer.iscorrect).answer;




if(selectedanswertext===correctanswertext){
    correct_count++;
}
else{
    wrong_count++;
}

questionIndex++
answerIndex++
ShowQuestion(questionIndex)
ShowAnswer(answerIndex)

    }
    else{
        alert('select valid option')
    }

})
};



const starttimer=()=>{
    timer= setInterval(()=>{
        finishtime++;
        timedisplay.textContent=`Time : ${finishtime}'s`
        if(finishtime>=maxtime){
            msg.textContent='time out '
            showresult();
            
        }
    },1000)
}



ShowQuestion(questionIndex)
ShowAnswer(answerIndex)
SelectAnswer()
submitAnswer()
 starttimer()
 totalquestions()