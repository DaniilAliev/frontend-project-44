/* eslint-disable no-unreachable-loop */
/* eslint-disable import/extensions */
import playGame from '../index.js';
import randomNumbers from '../RandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  for (let index = 0; index < 3; index += 1) {
    const firstRandomNumber = randomNumbers();
    const secondRandomNumber = randomNumbers();
    const questionArray = [`${firstRandomNumber} ${secondRandomNumber}`];
    const question = questionArray.join(' ');
    let correctAnswer;
    let smallestNumber;
    if (firstRandomNumber < secondRandomNumber) {
      smallestNumber = firstRandomNumber;
    } else if (secondRandomNumber < firstRandomNumber) {
      smallestNumber = secondRandomNumber;
    }
    for (let i = smallestNumber; i > 0; i -= 1) {
      if (firstRandomNumber % i === 0 && secondRandomNumber % i === 0) {
        correctAnswer = i;
      }
    }
    return [question, String(correctAnswer)];
  }
};

const InitGameGcd = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default InitGameGcd;
