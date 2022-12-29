/* eslint-disable import/extensions */

import playGame from '../index.js';
import generateRandomNumber from '../RandomNumber.js';

const rule = 'What is the result of the expression?';

const calculation = (firstNumber, operation, secondNumber) => {
  switch (operation) {
    case ('+'):
      return firstNumber + secondNumber;
    case ('-'):
      return firstNumber - secondNumber;
    case ('*'):
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[generateRandomNumber(0, (operations.length - 1))];
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const correctAnswer = calculation(firstNumber, operation, secondNumber);
  const question = [firstNumber, operation, secondNumber].join(' ');
  return [question, String(correctAnswer)];
};

const initGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGameCalc;
