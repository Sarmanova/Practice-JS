// 1. Create a multidimensional array to hold quiz questions and answers
const quizQuestion = [
{question:'How to refresh the browser on keyboard?', answer:'Ctrl F5'},
{ question:"What country has the highest life expectancy?",answer:"Hong Kong"},
{question: "What country has won the most World Cups?", answer:"Brazil"},
{ question: "How many minutes are in a full week?",answer:"10,080"}
];

//console.log(quizQuestion.indexOf('Ctrl F5'));
// 2. Store the number of questions answered correctly

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
// Present each question to the user

// // 4. Display the number of correct answers to the user

    let answers = 0;
    const wrongAnsw = [];
    const rightAnsw = [];
    for (let i = 0; i < quizQuestion.length; i++) {
        let questionShow = quizQuestion[i].question;
        let answersQuiz = quizQuestion[i].answer;
        let userResponse = prompt(questionShow);
     /*  - Compare the user's response to answer in the array
          - If the response matches the answer, the number of correctly
            answered questions increments by 1 
    */   
       if(+userResponse === answersQuiz){
            answers++;
            rightAnsw.push(quizQuestion) 
        
        } else {
            wrongAnsw.push(quizQuestion) 
            
        }
            
    }


function createQuestioItems(arr){
    let item = '';
for (let i = 0; i < arr.length; i++) {
  item+= `<li>${arr[i]}</li>`;

    
}
   return item;
}
createQuestioItems(quizQuestion);
// display number of user answers
prompt(`${createQuestioItems(rightAnsw)} and ${createQuestioItems(wrongAnsw)}`);