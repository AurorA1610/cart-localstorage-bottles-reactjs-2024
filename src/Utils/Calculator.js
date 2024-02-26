const add = (first, second) => {
  return first + second;
};
const multiply = (first, second) => {
  return first * second;
};
const divideTheFirstNumberByTheSecondNumber = (first, second) => {
  return first / second;
};
// export default add; // in a file, only 1 default export
export { add, multiply, divideTheFirstNumberByTheSecondNumber }; // exporting after destructuring, exporting multiple things
