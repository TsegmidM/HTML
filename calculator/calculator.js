const numberEls = document.getElementsByClassName("numbers");
const operatorEls = document.getElementsByClassName("operator");
const equalKey = document.getElementById("equal-key");
const clearKey = document.getElementById("clear-key");
const currentOp = document.getElementById("current-op");
const previousOp = document.getElementById("previous-op");
const dotKey = document.getElementById("dot-key");
const operation = document.getElementById("operation");

const calculator = () => {
  let op = "";
  let prevOp = 0;
  let currOp = 0;
  let checkOperator = false;

  function add() {
    previousOp.innerHTML = parseFloat(prevOp) + parseFloat(currOp);
  }
  function minus() {
    previousOp.innerHTML = parseFloat(prevOp) - parseFloat(currOp);
  }
  function times() {
    previousOp.innerHTML = parseFloat(prevOp) * parseFloat(currOp);
  }
  function divide() {
    previousOp.innerHTML = parseFloat(prevOp) / parseFloat(currOp);
  }
  function clear() {
    currentOp.innerHTML = "";
    operation.innerHTML = "";
    previousOp.innerHTML = 0;
    checkOperator = false;
  }

  function equal() {
    currOp = currentOp.innerHTML;
    prevOp = previousOp.innerHTML;
    if (
      currentOp.innerHTML === "" &&
      operation.innerHTML === "" &&
      previousOp.innerHTML === ""
    ) {
      window.alert("Insert all numbers and operation");
    } else if (
      currentOp.innerHTML === "" &&
      operation.innerHTML === "" &&
      previousOp.innerHTML !== ""
    )
      window.alert("Insert operation and second number");
    else if (
      currentOp.innerHTML === "" &&
      operation.innerHTML !== "" &&
      previousOp.innerHTML !== ""
    )
      window.alert("Insert second number");
    else {
      switch (op) {
        case "+":
          add();
          break;
        case "-":
          minus();
          break;
        case "*":
          times();
          break;
        case "/":
          divide();
          break;
        default:
      }
      operation.innerHTML = "";
      currentOp.innerHTML = "";
    }
  }
  clearKey.addEventListener("click", (event) => {
    clear();
  });
  equalKey.addEventListener("click", (event) => {
    equal();
  });
  dotKey.addEventListener("click", (event) => {
    if (
      operation.innerHTML === "" &&
      previousOp.innerHTML.indexOf(".") === -1
    ) {
      previousOp.innerHTML += event.target.innerHTML;
    } else if (
      currentOp.innerHTML === "" &&
      operation.innerHTML !== "" &&
      currentOp.innerHTML.indexOf(".") === -1
    ) {
      currentOp.innerHTML = "0" + event.target.innerHTML;
    } else if (
      operation.innerHTML !== "" &&
      currentOp.innerHTML.indexOf(".") === -1
    ) {
      currentOp.innerHTML += event.target.innerHTML;
    }
  });

  //-----------!NUMBERS EVENT------------------
  for (let i = 0; i < numberEls.length; i++) {
    numberEls[i].addEventListener("click", (event) => {
      const keyNum = event.target.innerHTML;
      if (checkOperator === false) {
        if (previousOp.innerHTML === "0") previousOp.innerHTML = keyNum;
        else previousOp.innerHTML += keyNum;
      } else {
        if (operation.innerHTML === "") {
          window.alert("Insert operation first");
          return;
        }
        if (currentOp.innerHTML === "0") currentOp.innerHTML = keyNum;
        else currentOp.innerHTML += keyNum;
      }
    });
  }

  //-----------OPERATOR EVENT!!-----------
  for (let i = 0; i < operatorEls.length; i++) {
    operatorEls[i].addEventListener("click", (event) => {
      if (previousOp.innerHTML === "") {
        window.alert("Insert first number");
        operation.innerHTML = null;
        return;
      } else if (
        currentOp.innerHTML !== "" &&
        operation.innerHTML !== "" &&
        previousOp.innerHTML !== ""
      ) {
        equal();
      }
      operatorEls.innerHTML = event.target.innerHTML;
      prevOp = previousOp.innerHTML;
      switch (event.target.innerHTML) {
        case "+":
          operation.innerHTML = "+";
          op = "+";
          break;
        case "-":
          operation.innerHTML = "-";
          op = "-";
          break;
        case "*":
          operation.innerHTML = "*";
          op = "*";
          break;
        case "/":
          operation.innerHTML = "/";
          op = "/";
          break;
        default:
      }
      if (prevOp[prevOp.length - 1] === ".") {
        prevOp = prevOp.slice(0, -1);
        console.log(prevOp);
        previousOp.innerHTML = prevOp;
      }
      prevOp = previousOp.innerHTML;
      checkOperator = true;
    });
  }
};
calculator();
