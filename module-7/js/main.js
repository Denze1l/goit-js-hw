"use strict";
import quiz from "./quiz.js";

console.log(quiz);

const form = document.querySelector("form");
const title = document.createElement("h2");
form.before(title);
title.textContent = quiz.title;

function oneQuestion() {
  const questionSec = document.createElement("section");
  questionSec.classList.add('questionSection');
  
  const questions = document.createElement("h3");
  
}

questionName.textContent = quiz.questions;
questionSec.append(questions);

// const questionName = createElement("h3");
// questionName.textContent = quiz.question;
// questionSec.append(questionName);

