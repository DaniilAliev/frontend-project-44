/* eslint-disable no-unreachable-loop */
/* eslint-disable import/extensions */
import playGame from '../index.js';
import randomNumbers from '../RandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  let answer;
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumbers();
    if (number % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    return [number, answer];
  }
};

const InitGameEven = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default InitGameEven;
