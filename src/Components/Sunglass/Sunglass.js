import React from "react";
import Watch from "../Watch/Watch";
// import add from "../../Utils/Calculator";
import {
  add,
  multiply,
  divideTheFirstNumberByTheSecondNumber as divide,
} from "../../Utils/Calculator";

const Sunglass = () => {
  const first = 55;
  const second = 299;
  const sum = add(first, second);
  const product = multiply(first, second);
  const divide = divide(first, second);
  return (
    <div>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;
