const numberEls = document.getElementsByClassName("numbers");
const operatorEls = document.getElementsByClassName("operator");
const equalKey = document.getElementById("equal-key");
const clearKey = document.getElementById("clear-key");
const currentOp = document.getElementById("current-op");
const previousOp = document.getElementById("previous-op");
const dotKey = document.getElementById("dot-key");
const operation = document.getElementById("operation");

let op = "";
let prevOp = null;
let currOp = null;
let checkOperator = false;
let isEqualPressed = false;

const calculator = () => {
  //-------------------DOT KEY EVENT------------------
  dotKey.addEventListener("click", (event) => {
    if (
      operation.innerHTML === "" &&
      previousOp.innerHTML.indexOf(".") === -1
    ) {
      if (checkOperator === false)
        previousOp.innerHTML += event.target.innerHTML;
      else {
        currentOp.innerHTML = "0" + event.target.innerHTML;
      }
    } else if (
      currentOp.innerHTML === "" &&
      operation.innerHTML !== "" &&
      currentOp.innerHTML.indexOf(".") === -1 &&
      checkOperator === true
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
      //parseFloat(keyNum);
      if(!isEqualPressed){
      if (checkOperator === false) {
        if (previousOp.innerHTML === "0") {
          previousOp.innerHTML = keyNum;
          prevOp = parseFloat(previousOp.innerHTML);
        } else {
          previousOp.innerHTML += keyNum;
          prevOp = parseFloat(previousOp.innerHTML);
        }
      } else {
        if (operation.innerHTML === "") {
          window.alert("Insert operation first");
          // return;
        }
        if (currentOp.innerHTML === "0") {
          currentOp.innerHTML = keyNum;
          currOp = parseFloat(currentOp.innerHTML);
        } else {
          currentOp.innerHTML += keyNum;
          currOp = parseFloat(currentOp.innerHTML);
        }
      }
    }
    else{
      clear();
      currOp = currentOp.innerHTML; /// ENE DEEER AJILLAJ BSN SHUUU!
      previousOp.innerHTML = keyNum ;
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
      prevOp = parseFloat(previousOp.innerHTML);
      checkOperator = true;
    });
  }

  function add() {
    prevOp += currOp;
    previousOp.innerHTML = prevOp;
  }
  function minus() {
    prevOp -= currOp;
    previousOp.innerHTML = prevOp;
  }
  function times() {
    prevOp *= currOp;
    previousOp.innerHTML = prevOp;
  }
  function divide() {
    prevOp /= currOp;
    previousOp.innerHTML = prevOp;
  }
  function clear() {
    currentOp.innerHTML = "";
    operation.innerHTML = "";
    previousOp.innerHTML = 0;
    checkOperator = false;
  }
  clearKey.addEventListener("click", (event) => {
    clear();
  });
  equalKey.addEventListener("click", (event) => {
    isEqualPressed = true;
    equal();
  });

  function equal() {
    // if (
    //   currentOp.innerHTML === "" &&
    //   operation.innerHTML !== "" &&
    //   previousOp.innerHTML !== ""
    // ){
    //   currOp = 0;
    //   console.log(currOp)
    // }

    // if (
    //   currentOp.innerHTML === "" &&
    //   operation.innerHTML === "" &&
    //   previousOp.innerHTML === ""
    // ) {
    //   window.alert("Insert all numbers and operation");
    // } else if (
    //   currentOp.innerHTML === "" &&
    //   operation.innerHTML === "" &&
    //   previousOp.innerHTML !== ""
    // ){
    // currOp = 0;}
    //      window.alert("Insert operation and second number");
    //window.alert("Insert second number");
    if (currOp === null) currOp = prevOp;
    // else currOp = currentOp.innerHTML;
    switch (op) {
      case "+":
        console.log(currOp);
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
    //      operation.innerHTML = "";
    currentOp.innerHTML = null;
  }
};

calculator();
