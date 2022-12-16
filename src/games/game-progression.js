/* eslint-disable import/extensions */
import playGame from '../index.js';
import randomNumbers from '../RandomNumber.js';

const rule = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  let randomNumber = randomNumbers();
  const progressionArray = [];
  progressionArray.push(randomNumber);
  const increaseNumber = randomNumbers();
  for (let i = 1; i < 10; i += 1) {
    const nextNumber = randomNumber + increaseNumber;
    randomNumber = nextNumber;
    progressionArray.push(nextNumber);
  }
  const a = Math.floor(Math.random() * progressionArray.length);
  const correctAnswer = progressionArray[a];
  progressionArray[a] = '..';
  const question = progressionArray.join(' ');
  return [question, String(correctAnswer)];
};

const InitGameProgression = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default InitGameProgression;
