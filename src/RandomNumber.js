const randomNumbers = () => {
  const arrRandom = []; // Вводим массив с рандомными числами
  for (let i = 0; i < 6; i += 1) {
    arrRandom.push(Math.round(Math.random() * 100));
  }
  console.log(arrRandom);
  return arrRandom;
};

export default randomNumbers;
