"use strict";
import quiz from "./quiz.js";

// console.log(quiz);
const body = document.querySelector(".bodyContet");
const form = document.querySelector(".forma");
const buttonchik = document.querySelector(".forma__butt");

const profile = questionnaire(quiz);
body.appendChild(profile);
function questionnaire() {
  const container = document.createElement("div");
  container.classList.add("container");

  const title = document.createElement("h2");
  title.textContent = quiz.title;
  //   const form = document.querySelector("form");
  let qwnamenumber = 1;
  quiz.questions.forEach(wat => {
    const questionSec = document.createElement("section");
    questionSec.classList.add("questionSecClass");
    const questionName = document.createElement("h3");
    questionName.textContent = wat.question;
    qwnamenumber++;
    const questionAns = document.createElement("ol");
    let index = 1;
    wat.choices.forEach(elem => {
      const eachAnswer = document.createElement("li");
      const label = document.createElement("label");
      label.textContent = elem;
      const inPut = document.createElement("input");
      let AtribName = "choise" + qwnamenumber;
      inPut.setAttribute("type", "radio");
      inPut.setAttribute("name", AtribName);
      inPut.setAttribute("value", index);
      inPut.setAttribute("required", "required");
      index++;
      label.prepend(inPut);
      eachAnswer.append(label);
      questionAns.append(eachAnswer);
    });
    questionSec.prepend(questionName, questionAns);
    // buttonchik.p
    form.append(questionSec, buttonchik);
    // form.prepend(buttonchik);

    container.prepend(title);
    container.append(form);
  });

  console.log(container);

  return container;
}

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const givenAnswers = new FormData(event.currentTarget);
  const data = [];
  givenAnswers.forEach(value => {
    data.push(+value);
  });
  const rigthAnswer = quiz.questions.map(({ answer }) => answer);

  console.log(data);
  console.log(rigthAnswer);

  // const arrca = Object.values(data);
  // arrca.map(evry=>evry.number)
  // console.log(arrca);
  // return data
  //  const answer= data.map(elem=>elem.value)

  const numCorrect = data.reduce((acc, elem, currentIndex, data) => {
    if (elem === rigthAnswer[currentIndex]) {
      acc++;
    }

    return acc;
  }, 0);

  if (numCorrect > 80) {
    alert("Congratulations, you past the exem!");
  } else {
    alert("You should work harder");
  }

  // rigthAnswer.reduce((acc, topa)=>{
  //   let uraa = 0;
  //   let count =0
  //   if(topa===data[count+=1]){
  //     uraa++
  //   }
  //   console.log(uraa);

  // },0)
}
//   for (let i = 0; i < rigthAnswer.length; i++) {
//     // for (let j = 0; j < data.length; j++) {
//     //   if(rigthAnswer[i]===data[j])
//     //   uraa = uraa+1
//     // }
//     if (rigthAnswer[i] === data[i]){
//     uraa = uraa + 1;
//     }

//   }
//   let result =Math.round(100/rigthAnswer.length*uraa);
//   console.log(result);

//   if(result>80){
//     alert('Congratulations, you past the exem!');
//   } else {
//     alert('You should work harder');
//   }
// }
