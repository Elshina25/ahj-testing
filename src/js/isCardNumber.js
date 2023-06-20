export function isCardNumber(cardNumber) {
  //убираем пробелы и другие символы из номера карты
  cardNumber = cardNumber.replace(/[\s]/g, "").split("").reverse();

  //проверка допустимой длины номера карты
  if (cardNumber.length !== 15 && cardNumber.length !== 16) {
    return false;
  }

  //преобразование строки в массив чисел
  const cardNumberArr = cardNumber.map(Number);

  //считаем проверочную сумму всех цифр номера карты
  const checkSum = cardNumberArr.reduce((acc, num, i) => {
    let isEven = (cardNumberArr.length + i) % 2 === 0;

    if (
      (cardNumberArr.length === 15 && isEven) ||
      (cardNumberArr.length === 16 && !isEven)
    ) {
      num *= 2;
      if (num > 9) {
        num -= 9;
      }
    }
    return acc + num;
  }, 0);

  return checkSum % 10 === 0;
}
