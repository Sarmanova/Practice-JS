const quizQuestion1 = [
   ['How to refresh the browser on keyboard?', ['F5','F3','F4','F6'], "F5"],
   ['What country has the highest life expectancy?', ['Hong Kong','USA','Kazakhstan','Russia'],'Hong Kong'],
   ['What country has won the most World Cups?', ['Spain','Brazil','Mexica','America'],'Brazil'],
   ['How many minutes are in a full week?', ['10,800','10,010','10,080','10,070'],'10,080'],
];


const question = document.getElementById('question');
const answerButton = document.getElementById('btn');
const nextButton = document.getElementById('nextBtn');

 

    //  for (let i = 0; i < quizQuestion1.length; i++) {
    //     for (let j = 0; j< quizQuestion1[i].length; j++) {
    //        const answers = quizQuestion1[i][j];
    //        console.log(quizQuestion1[j][1]);
    //        const questions = quizQuestion1[i][0];
    //      //  console.log(questions);
    //       // const answers = quizQuestion1[i];
    //       // console.log(answers[1]);
    //        const correctAnswer = quizQuestion1[i][1];
    //       // console.log(correctAnswer);
    //      //  console.log(questions);
    //        question.innerHTML= questions;
    //     //    quizAnswers = `<button>${answers}</button>  <button>${answers}</button> <button>${answers}</button> <button>${answers}</button>`;
    //     //    answerButton.innerHTML = quizAnswers;
    //        //console.log( answers);
    //        const button = document.createElement('button');
    //        button.innerHTML = answers;
    //        answerButton.appendChild(button)
    //     }
       
    // //  if(answers[1] === correctAnswer){
    // //     score++;
    // //     console.log(typeof answers);
    // //     console.log(score);
        
    // //  }
    //  }




    // for (let i = 0; i < quizQuestion1.length; i++) {
    //     const currentQuestions = quizQuestion1[i][0];
    //     console.log(currentQuestions)
    //     let quizAnswers = "";

    //     for (let j = 0; j < quizQuestion1[i].length; j++) {        
    //         const choice = quizQuestion1[i][j];
    //         question.innerHTML = currentQuestions;
    //         quizAnswers += `<button>${choice}</button>`;
    //         //quizAnswers.join(" ");
    //         answerButton.innerHTML= quizAnswers;
    //         //console.log(quizAnswers.join(""));
    //     }
    //   //const currentAnswers = quizQuestion1[i];
        
    //     // const button = document.createElement('button');
    //     // button.innerHTML = quizAnswers;
    //     // answerButton.appendChild(button)

    // }

    let score = 0;
    function quizDisplay(arr){
        for (let i = 0; i < arr.length; i++) {
            const questions = arr[i][0];
            const choice = arr[i][1];          
            const correctAnswer = arr[i][2];
            let quizAnswers = "";
            let userResponse = questions.userResponse;
            console.log(userResponse)
           

 for (let j = 0; j < choice.length; j++) {
    question.innerHTML = questions;
    quizAnswers+= `<button>${choice[j]}</button>`;
    answerButton.innerHTML = quizAnswers;
    console.log(question)
    console.log(choice);
    console.log(userResponse);
    if(userResponse === choice.indexOf(correctAnswer)+1){
        score++;
        console.log('Correct!');
    
     }else{
        score--;
        console.log('Incorrect. The correct answer is: ' + correctAnswer);
     }
 }
           
 
            
        }


    }

    quizDisplay(quizQuestion1);