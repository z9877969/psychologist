export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Випадкове число від 0 до i
    [array[i], array[j]] = [array[j], array[i]]; // Переставляємо елементи місцями
  }
  return array;
};
