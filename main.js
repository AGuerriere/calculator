const numberButtons = document.querySelectorAll("[data-number]")
const operandButtons = document.querySelectorAll("[data-operand]")
const equalButton = document.querySelector("[data-equal]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperationDisplay = document.querySelector("[data-previous-operation]")
const currentOperationDisplay = document.querySelector("[data-current-operation]")
const deleteButton = document.querySelector("[data-delete]")

let displayedNum = "";

let currentNumber = 0

let lastOperand = ""

// Clear Button
allClearButton.addEventListener("click", () => {
  previousOperationDisplay.textContent = ""
    currentOperationDisplay.textContent = ""
    displayedNum = ""
    currentNumber = 0
})

// Delete Button
deleteButton.addEventListener("click", ()=>{
  displayedNum = displayedNum.slice(0, -1)
  currentOperationDisplay.textContent = displayedNum
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
        break
      case "-":
        subtract()
        break
      case "÷":
        console.log("/")
        break
      case "*":
        console.log("*")
        break
  }})
})


// Equal button
equalButton.addEventListener("click", ()=> {
  switch(lastOperand){
    case "+":
      currentNumber += Number(currentOperationDisplay.textContent)
      displayedNum = currentNumber
      currentOperationDisplay.textContent = currentNumber
      previousOperationDisplay.textContent = ""
      lastOperand = "="
      break
    case "-":
      currentNumber -= Number(currentOperationDisplay.textContent)
      displayedNum = currentNumber
      currentOperationDisplay.textContent = currentNumber
      previousOperationDisplay.textContent = ""
      lastOperand = "="
      break
    case "÷":
      console.log("/")
      break
    case "*":
      console.log("*")
      break
  }
})

function add() {
  if(lastOperand == "="){
    previousOperationDisplay.textContent = currentNumber
    lastOperand = "+"
    displayedNum = ""
  } else {
    currentNumber += Number(currentOperationDisplay.textContent)
    displayedNum = ""
    currentOperationDisplay.textContent = ""
    previousOperationDisplay.textContent = currentNumber
    lastOperand = "+"
  }
}


function subtract() {
  if(lastOperand == "="){
    previousOperationDisplay.textContent = currentNumber
    lastOperand = "-"
    displayedNum = ""
  } else {
    currentNumber -= Number(currentOperationDisplay.textContent)
    displayedNum = ""
    currentOperationDisplay.textContent = ""
    previousOperationDisplay.textContent = currentNumber
    lastOperand = "-"
  }
}
