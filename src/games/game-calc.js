/* eslint-disable no-unreachable-loop */
/* eslint-disable import/extensions */

import playGame from '../index.js';
import randomNumbers from '../RandomNumber.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const getQuestionAndAnswer = () => {
  for (let index = 0; index < 3; index += 2) {
    const firstRandomNumber = randomNumbers();
    const secondRandomNumber = randomNumbers();
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const questionArray = [firstRandomNumber, operation, secondRandomNumber];
    const question = questionArray.join(' ');

    let correctAnswer;

    const calculation = () => {
      switch (operation) {
        case ('+'):
          correctAnswer = firstRandomNumber + secondRandomNumber;
          return correctAnswer;
        case ('-'):
          correctAnswer = firstRandomNumber - secondRandomNumber;
          return correctAnswer;
        case ('*'):
          correctAnswer = firstRandomNumber * secondRandomNumber;
          return correctAnswer;
        default:
          return null;
      }
    };
    calculation();
    return [question, String(correctAnswer)];
  }
};

const InitGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default InitGameCalc;
