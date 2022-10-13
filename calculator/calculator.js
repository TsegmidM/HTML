const numberEls = document.getElementsByClassName("numbers");
const operatorEls = document.getElementsByClassName("operator");
const display = document.getElementById("total");
const btnEls = document.getElementsByClassName("btn-style");
let op = "";
let count = 0;
let secondNum = 0;

for (let i = 0; i < btnEls.length; i++) {
  btnEls[i].addEventListener("click", (event) => {
    const displayedNum = display.innerHTML;
    const keyNum = event.target.innerHTML;

    if (displayedNum === "0") display.innerHTML = keyNum;
    else display.innerHTML = displayedNum + keyNum;

    if (btnEls[i].innerText === "+") {
      temp = parseInt(displayedNum);
      op = "+";
      display.innerHTML = "";
      // debugger
      console.log("first number" + temp);
    } else if (btnEls[i].innerHTML === "-") {
      temp = parseInt(displayedNum);
      op = "-";
      display.innerHTML = "";
    } else if (btnEls[i].innerHTML === "/") {
      temp = parseInt(displayedNum);
      op = "/";
      display.innerHTML = "";
    } else if (btnEls[i].innerHTML === "X") {
      temp = parseInt(displayedNum);
      op = "*";
      display.innerHTML = "";
    }

    else if (btnEls[i].innerHTML === "=") {
      if (op == "+") {
        secondNum = parseInt(display.innerHTML);
        display.innerHTML = temp + parseInt(displayedNum);
      } else if (op == "-") {
        secondNum = parseInt(display.innerHTML);
        display.innerHTML = temp - parseInt(displayedNum);
      } else if (op == "/") {
        secondNum = parseInt(display.innerHTML);
        display.innerHTML = temp / parseInt(displayedNum);
      } else if (op == "*") {
        secondNum = parseInt(display.innerHTML);
        display.innerHTML = temp * parseInt(displayedNum);
      }
      count++;
    }
   
  });
}
// for(let i = 0; i < operatorEls.length; i++){
//     operatorEls[i].addEventListener('click',(event) => {
//         let temp=0;
//         let total=0;
//         // console.log(operatorEls[i].innerText ==="+");
//         console.log(typeof result.innerText)
//         if(operatorEls[i].innerText === "+"){
//             temp = parseInt(result.innerText);
// //            console.log(temp);
// //            result.innerHTML = 0;
// //            result.innerHTML = 0;
//             // debugger
//             total = temp + event.target.innerText;
//             console.log(temp);
// //            result.innerHTML = total;
//         }
//         else if(operatorEls[i].innerHTML === "="){
//             result.innerHTML = total;
//         }
//     })
// }
