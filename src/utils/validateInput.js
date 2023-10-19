export function validateInputString(inputValue) {
  const regex = /^[a-zA-Zа-яА-Я\s]+$/;
  return regex.test(inputValue)
}

export function validateInputNumber(inputValue) {
  const regex = /^(100|[0-9]?[0-9])$/;
  return regex.test(inputValue)
}
