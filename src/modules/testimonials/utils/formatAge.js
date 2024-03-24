export function formatAge(age) {
  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `${age} рік`;
  } else if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    (lastTwoDigits < 10 || lastTwoDigits >= 20)
  ) {
    return `${age} роки`;
  } else {
    return `${age} років`;
  }
}
