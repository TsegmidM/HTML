const numberEls = document.getElementsByClassName("numbers");
const operatorEls = document.getElementsByClassName("operator");
const equalKey = document.getElementById("equal-key");
const clearKey = document.getElementById("clear-key");
const currentOp = document.getElementById("current-op");
const previousOp = document.getElementById("previous-op");
const operation = document.getElementById("operation");
// const allkeys = document.getElementsByClassName("btn-style");

const calculator = () => {
  let op = "";
  let prevOp = 0;
  let currOp = 0;
  //let calcFirstTime = true;
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
    previousOp.innerHTML = "";
    checkOperator = false;
  }

  function equal() {
    console.log("= pressed");
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
          // currOp = currentOp.innerHTML;
          // prevOp = previousOp.innerHTML;
          // // if(operation.innerHTML==="+")
          // add();
          //previousOp.innerHTML = "";
          operation.innerHTML = "";
          add();
          currentOp.innerHTML = "";
          checkOperator = true;
          break;
        case "-":
          currOp = currentOp.innerHTML;
          prevOp = previousOp.innerHTML;
          //  previousOp.innerHTML = null;
          operation.innerHTML = "";
          minus();
          currentOp.innerHTML = "";
          checkOperator = true;
          break;
        case "*":
          currOp = currentOp.innerHTML;
          prevOp = previousOp.innerHTML;
          //   previousOp.innerHTML = null;
          operation.innerHTML = null;
          times();
          currentOp.innerHTML = "";
          break;
        case "/":
          currOp = currentOp.innerHTML;
          prevOp = previousOp.innerHTML;
          // previousOp.innerHTML = null;
          operation.innerHTML = null;
          divide();
          currentOp.innerHTML = "";
          break;
        default:
      }
    }
  }
  clearKey.addEventListener("click", (event) => {
    clear();
  });
  equalKey.addEventListener("click", (event) => {
    equal();
  });

  // document.addEventListener("keydown", (event) => {
  //   let name = event.key;
  //   let code = event.code;
  //   // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  //   console.log(name, code);
  //   if (
  //     name === "1" ||
  //     name === "2" ||
  //     name === "3" ||
  //     name === "4" ||
  //     name === "5" ||
  //     name === "6" ||
  //     name === "7" ||
  //     name === "8" ||
  //     name === "9" ||
  //     name === "0" && checkOperator === false
  //   ) {
  //     if(previousOp.innerText !==null){
  //     if (previousOp.innerHTML === "0") previousOp.innerHTML = name;
  //     else previousOp.innerHTML += name;
  //     }
  //     else if(checkOperator===true){
  //      currentOp.innerHTML += keyNum;
  //     }
  //   } 
  //   else if(name === "*"){
  //      // alert("Insert operation first");
  //      operation.innerHTML = "*";
  //      checkOperator = true;
  //     }
  //   else 
  //   return;
    
  // });

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
          console.log("+ clicked");
          operation.innerHTML = "+";
          op = "+";
          prevOp = previousOp.innerHTML;
          checkOperator = true;
          break;
        case "-":
          console.log("- clicked");
          operation.innerHTML = "-";
          op = "-";
          prevOp = previousOp.innerHTML;
          checkOperator = true;
          break;
        case "*":
          console.log("* clicked");
          operation.innerHTML = "*";
          op = "*";
          prevOp = previousOp.innerHTML;
          checkOperator = true;
          break;
        case "/":
          console.log("/ clicked");
          operation.innerHTML = "/";
          op = "/";
          prevOp = previousOp.innerHTML;
          checkOperator = true;
          break;
          
        default:
      }
    });
  }
};
calculator();
