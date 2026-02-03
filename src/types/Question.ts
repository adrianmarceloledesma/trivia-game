export type Question = {
    category:string,
    question:{
        text:string
    },
    correctAnswer:string,
    incorrectAnswers:string[],
   
}