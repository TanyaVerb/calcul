// window.setTimeout(() => {
//   window.document.body.style.background = "green";
// }, 1000);

// console.log(document.documentElement);
// console.log(document.documentElement.innerHTML);
// console.log(document.documentElement.innerText);
// console.log(document.documentElement.outerHTML);
// console.log(document.documentElement.outerText);

// console.log(document.documentElement.childNodes);
// console.log(document.documentElement.firstChild);
// console.log(document.documentElement.lastChild);
// console.log(document.documentElement.lastChild.nextSibling);
// console.log(document.documentElement.firstChild.nextSibling);
// console.log(document.documentElement.lastChild.previousSibling);

// console.log(document.documentElement.childNodes[0]);
// console.log(document.documentElement.childNodes[1]);
// console.log(document.documentElement.childNodes[2]);
// console.log(document.documentElement.childNodes[3]);

// console.log(document.documentElement.children);

// const body = document.body;
// console.log(body.parentElement);

// _______________________________________________________
// console.log(navigator.userAgent);
// console.log(location.href);

// const containerBtn = document.querySelector(".calc__btn-container");
// console.log(containerBtn);
// console.log(containerBtn.childNodes); //все дочерние узлы
// console.log(containerBtn.childNodes[11]);
// console.log(containerBtn.hasChildNodes()); //проверка наличия дочерних узлов
// console.log(containerBtn.children); // все дочерние элементы (тэги)

// const btns = document.querySelectorAll(".btn");
// console.log(btns);
// console.log(btns[4]);

// for (const num of btns) {
//   console.log(num);
// }

// console.dir(containerBtn); // список доступных свойств
// ____________________________________________________________

// const cleanEntry = document.getElementById("clearCE");
// console.log(cleanEntry);

// const clear = document.getElementById("clearC");
// console.log(clear);

// const point = document.getElementById("point");
// console.log(point);
// const equal = document.querySelector(".btn_equal");
// console.log(equal);
// const divide = document.querySelector(".btn-divide");
// console.log(divide);
// const multiply = document.querySelector(".btn-multiply");
// console.log(multiply);
// const plus = document.querySelector(".btn-plus");
// console.log(plus);
// const minus = document.querySelector(".btn-minus");
// console.log(minus);

// const input = document.querySelector(".calc__screen");
// console.log(input);

// const num1 = document.querySelector(".btn-num-1");
// console.log(num1);
// const num2 = document.querySelector(".btn-num-2");
// console.log(num2);
// const num3 = document.querySelector(".btn-num-3");
// console.log(num3);
// const num4 = document.querySelector(".btn-num-4");
// console.log(num4);
// const num5 = document.querySelector(".btn-num-5");
// console.log(num5);
// const num6 = document.querySelector(".btn-num-6");
// console.log(num6);
// const num7 = document.querySelector(".btn-num-7");
// console.log(num7);
// const num8 = document.querySelector(".btn-num-8");
// console.log(num8);
// const num9 = document.querySelector(".btn-num-9");
// console.log(num9);
// const num0 = document.querySelector(".btn-num-0");
// console.log(num0);
// console.log(num0.innerHTML);
// console.log(num0.tagName);
// console.log(num0.nodeName);
//___________________________________________________________
//  const screen = document.getElementsByTagName('input')
//  let index = 0
//  console.log(screen);

//  console.dir(screen[index].atributes);

//  const screen = document.getElementsByClassName('calc__screen temp')

// const clearBtn = document.getElementById('clearCE')
//  console.log(clearBtn.attributes);

// const nums = document.getElementsByName('Vlad')
// console.log(nums);

// const sum = document.querySelector('.calc .calc__btn-container .btn-plus' )
// console.log(sum);
// const sum = document.querySelectorAll('.btn' )
// console.log(sum);

// = 3мя способами
//  const equal = document.getElementsByTagName('button ')

//  console.log(screen);
//  console.log(equal);

//  const equal = document.querySelector('.btn_equal' )
//  console.log(equal);

//  const equal2 = document.getElementsByClassName('.btn_equal')
//  console.log(equal2);
//______________________________________________________

//События

// const printLog = function () {
//   console.log("Yraaa! CLICK");
// };
// printLog();

// let  userName ={
//     firstName: null,
//     sayHi(){
//         console.log('Привет')
//     }
// }

// console.log(clearBtn.onclick)
// clearBtn.onclick = printLog;

//_________________
// console.dir(clearBtn);

// const digits = document.querySelectorAll('.digit')
// console.log(digits);
// ___________________________________________________

// const equal = document.querySelector(".btn_equal");
// console.log(equal);

// equal.addEventListener("click", function (event) {
//   console.log(event.target.textContent);
// }); //клик на кнопку =

//__________________________________________________

// const digits = document.querySelectorAll(".digit");
// console.log(digits);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
const clearBtn = document.getElementById("clearC");
const screen = document.querySelector(".calc__screen");
const calc = document.querySelector(".calc__btn-container");

const OPERATION = {
  sum: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
};

const calculateData = {
  num1: "",
  num2: "",
  sign: "",
  result: "",
};

function sum(num1, num2) {
  return +num1 + +num2;
}
function subtract(num1, num2) {
  return +num1 - +num2;
}
function multiply(num1, num2) {
  return +num1 * +num2;
}
function divide(num1, num2) {
  return +num1 / +num2;
}

function calculate(num1, num2, sign) {
  switch (sign) {
    case OPERATION.sum:
      calculateData.result = String(sum(num1, num2));
      break;
    case OPERATION.subtract:
      calculateData.result = String(subtract(num1, num2));
      break;
    case OPERATION.multiply:
      calculateData.result = String(multiply(num1, num2));
      break;
    case OPERATION.divide:
      calculateData.result = String(divide(num1, num2));
      break;
  }
}

clearBtn.addEventListener("click", function (event) {
  console.log("Star Clear");

  calculateData.num1 = "";
  calculateData.num2 = "";
  calculateData.sign = "";
  screen.value = "";
});

function onClickDigits(event) {
  if (event.target.classList.contains("digit")) {
    const pressNum = event.target.textContent;

    if (calculateData.sign === "") {
      screen.value += pressNum;
      calculateData.num1 = screen.value;
    } else {
      calculateData.num2 += pressNum;
      screen.value = calculateData.num2;
    }
  }
}

function onClickOperations(event) {
  if (event.target.classList.contains("btn_operation")) {
    const pressOperator = event.target.textContent;
    calculateData.sign = pressOperator;
    screen.value = pressOperator; //записываем знак
  }

  if (event.target.classList.contains("btn_equal")) {
    console.log("btn_equal");
    calculateData.num1 = calculateData.result;
    calculateData.num2 = "";
    calculateData.sign = "";
    screen.value = calculateData.num1;
  }
}

calc.addEventListener("click", function (event) {
  // if (event.target.classList.contains("digit")) {
  //   const pressNum = event.target.textContent;
  //   if (calculateData.sign === "") {
  //     screen.value += pressNum;
  //     calculateData.num1 = screen.value;
  //   } else {
  //     calculateData.num2 += pressNum;
  //     screen.value = calculateData.num2
  //   }
  // }
  // if (event.target.classList.contains("btn_operation")) {
  //   const pressOperator = event.target.textContent;
  //   calculateData.sing = pressOperator;
  //   screen.value = pressOperator;
  // }

  onClickDigits(event);
  onClickOperations(event);
  calculate(calculateData.num1, calculateData.num2, calculateData.sign);

  // console.log(calculateData);
});

// for (let i = 0; i < digits.length; i++){
// digits[i].addEventListener('click',function(event){
//     console.log(event.target.textContent);
//     screen[0].value = event.target.textContent

// })
// }
