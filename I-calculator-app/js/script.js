'use strict';
const output = document.querySelector('.output');
const inputContainer = document.querySelector('.input__container');
const reset = document.querySelector('.reset');
const deleteBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('.equal');
const operators = ['+', '-', '/', '*', '.'];

// to handle user input multiple periods
function matchPeriod() {
  const matchAllNum = /\d+(\.|)\d*/g;
  const lastNum = output.textContent.match(matchAllNum).slice(-1)[0];
  return /\./.test(lastNum);
}

// to perform delete operation
const del = () => {
  if (output.textContent === '') return;
  output.textContent = output.textContent.slice(
    0,
    output.textContent.length - 1
  );
};
deleteBtn.addEventListener('click', del);

// to handle user input
const userInput = function (btn) {
  let lastInput = output.textContent.slice(-1);
  if (btn.classList.contains('operation') && output.textContent === '') return;

  if (btn.classList.contains('period')) {
    if (matchPeriod()) return;
  }

  if (
    btn.classList.contains('operation') &&
    operators.some((el) => el === lastInput)
  )
    del();

  if (btn.textContent === 'x') {
    output.textContent += '*';
    return;
  }

  output.textContent += btn.textContent;
};

inputContainer.addEventListener('click', (e) => {
  if (!e.target.classList.contains('input')) return;
  let btn = e.target;
  if (btn.classList.contains('num')) userInput(btn);
});

// Evaluate equation
equalBtn.addEventListener('click', () => {
  try {
    output.textContent = eval(output.textContent);
  } catch {
    console.error('Something went wrong with evaluation 💥');
  }
});

// reset the calculator
reset.addEventListener('click', () => {
  output.textContent = '';
});

// button animations
inputContainer.addEventListener('mousedown', (e) => {
  if (!e.target.classList.contains('input')) return;
  e.target.classList.add('pressed');
});

inputContainer.addEventListener('mouseup', (e) => {
  if (!e.target.classList.contains('input')) return;
  e.target.classList.remove('pressed');
});
