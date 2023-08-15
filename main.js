const numberButtons = document.querySelectorAll("[data-number]")
const operandButtons = document.querySelectorAll("[data-operand]")
const equalButton = document.querySelector("[data-equal]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperationDisplay = document.querySelector("[data-previous-operation]")
const currentOperationDisplay = document.querySelector("[data-current-operation]")

let displayedNum = "";

let currentNumber = ""

let operandButtonPressed = false

// Clear Button
allClearButton.addEventListener("click", () => {
  previousOperationDisplay.textContent = ""
  currentOperationDisplay.textContent = ""
  displayedNum = ""
})



// Append numbers when clicked
numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    if (currentOperationDisplay.textContent.length <= 14){
      displayedNum += number.textContent;
      currentOperationDisplay.textContent = displayedNum;
    }
  })
})

// Add event listener for each opearand
operandButtons.forEach((operand) => {
  operand.addEventListener("click", () => {
    switch(operand.textContent){
      case "+":
        add()
      case "-":
        console.log('Operands')
      case "÷":
        console.log('Operands')
      case "*":
        console.log('Operands')
  }})
})

function add() {
  currentNumber += currentOperationDisplay.textContent
}