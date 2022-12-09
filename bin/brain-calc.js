import readlineSync from 'readline-sync';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  console.log('What is the result of the expression?');

  const arrRandom = []; // Вводим массив с рандомными числами
  for (let i = 0; i < 6; i += 1) {
    arrRandom.push(Math.round(Math.random() * 100));
  }
  console.log(arrRandom);

  let i = 0;
  const operations = ['+', '-', '*'];
  for (let index = 0; index < 6; index += 2) {
    let operation = operations[Math.floor(Math.random() * operations.length)];
    var resultArray = [arrRandom[index], operation, arrRandom[index + 1]];
    console.log(resultArray);
    let resultString = resultArray.join(' ');
    console.log(resultString);
  }
};

brainCalc()