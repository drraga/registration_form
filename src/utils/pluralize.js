/* eslint-disable no-nested-ternary */
export default function pluralize(number, forms) {
  const absNumber = Math.abs(number);
  const lastTwoDigits = absNumber % 100;
  const lastDigit = absNumber % 10;

  const formIndex = lastTwoDigits >= 11 && lastTwoDigits <= 20
    ? 2
    : lastDigit === 1
      ? 0
      : lastDigit >= 2 && lastDigit <= 4
        ? 1
        : 2;

  return `${absNumber} ${forms[formIndex]}`;
}
