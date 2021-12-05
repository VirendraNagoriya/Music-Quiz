var readlineSync = require('readline-sync');

var score =0;

console.log("*****  Hello  *****\nWellcome to Muisc Quiz\n");
var useranswer = readlineSync.question("which instrumets you like play?\n ");
console.log("okay!!! good taste of music you have,\n even i love to play "+useranswer);

//function
function play(question,answer)
{
  var useranswer = readlineSync.question(question);

  if (useranswer === answer)
  {
    console.log("right");
    score = score+1;
  }
  else
  {
    console.log("oopss!!!");
     console.log("Right answer is:  "+answer);
    score = score-1;
   
  }
  console.log(score);
}
//arr obj question

var questionone ={
  question:"which instrumnet bob marlye played?\n",
  answer:"guitar"
}

var questiontwo ={
  question:"which gener is at top right now?\n",
  answer:"pop"
}

var questionthree ={
  question:"how many notes in music?\n",
  answer:"seven"
}
var questiontfour ={
  question:"most grammy winner artist?\n",
  answer:"georg solti"
}
var questiontfive ={
  question:"top most viewed song on youtube?\n",
  answer:"despacito"
}
var questiontsix ={
  question:"first musical instrument in the world?\n",
  answer:"neanderthal flute"
}
var questionseven ={
  question:"most playing instrumnet in the wolrd?\n",
  answer:"piano"
}


// function call
var myquestion =[questionone,questiontwo,questionthree,questiontfour,questiontfive,questiontsix,questionseven]

for(var i=0; i< myquestion.length;i++)
{
var currentques = myquestion[i];

play(currentques.question,currentques.answer);

}

console.log("your score is : "+score);

console.log("No... high score...Yet\n");

console.log("if you break the high score\n send screenshot  to me -virendaranagoriya11@gmail.com- i will update\n");

console.log("thanks for participation\n");
