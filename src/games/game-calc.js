
import playGame from '../index.js';
import randomNumbers from '../RandomNumber.js';

const rule = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const arrRandom = randomNumbers();

const getQuestionAndAnswer = () => {
  for (let index = 0; index < 6; index += 2) {
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const questionArray = [arrRandom[index], operation, arrRandom[index + 1]];
    const question = questionArray.join(' ');

    let correctAnswer;

    const calculation = () => {
      switch (operation) {
        case ('+'):
          correctAnswer = arrRandom[index] + arrRandom[index + 1];
        case ('-'):
          correctAnswer = arrRandom[index] - arrRandom[index + 1];
          return correctAnswer;
        case ('*'):
          correctAnswer = arrRandom[index] * arrRandom[index + 1];
          return correctAnswer
        default:
          return null;
      }
   }
   calculation();
   return [question, String(correctAnswer)]
  } 
};

const InitGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default InitGameCalc;