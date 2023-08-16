const numberButtons = document.querySelectorAll("[data-number]")
const operandButtons = document.querySelectorAll("[data-operand]")
const equalButton = document.querySelector("[data-equal]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperationDisplay = document.querySelector("[data-previous-operation]")
const currentOperationDisplay = document.querySelector("[data-current-operation]")
const deleteButton = document.querySelector("[data-delete]")
const dot = document.querySelector("[data-dot]")

let displayedNum = "";

let currentNumber = 0

let lastOperand = ""

// Clear Button
allClearButton.addEventListener("click", () => {
  previousOperationDisplay.textContent = ""
    currentOperationDisplay.textContent = ""
    displayedNum = ""
    currentNumber = 0
    lastOperand = ""
})

// Delete Button
deleteButton.addEventListener("click", () => {
  displayedNum = displayedNum.toString()
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

// Dot button
dot.addEventListener("click", ()=>{
  displayedNum = displayedNum.toString()
  if (currentOperationDisplay.textContent.length <= 14 && displayedNum.slice(-1)!= '.'){
    displayedNum += '.';
    currentOperationDisplay.textContent = displayedNum;
  }
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
        divide()
        break
      case "*":
        multiply()
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
      currentNumber /= Number(currentOperationDisplay.textContent)
      displayedNum = currentNumber
      currentOperationDisplay.textContent = currentNumber
      previousOperationDisplay.textContent = ""
      lastOperand = "="
      break
    case "*":
      currentNumber *= Number(currentOperationDisplay.textContent)
      displayedNum = currentNumber
      currentOperationDisplay.textContent = currentNumber
      previousOperationDisplay.textContent = ""
      lastOperand = "="
      break
  }
})

function add() {
  switch(lastOperand){
    case "=":
      // how to behave when pressing add button soon after pressing the equal button
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "+"
      displayedNum = ""
      break
    case "-":
      currentNumber -= Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "+"
      break
    case "+":
      currentNumber += Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "+"
      break
    case "*":
      currentNumber *= Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "+"
      break
    case "÷":
      currentNumber /= Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "+"
      break
    case "":
      currentNumber = Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "+"
      break
  }
}

function subtract() {
  switch(lastOperand){
    case "=":
      currentNumber = Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "-"
      break
    case "-":
      currentNumber -= Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "-"
      break
    case "+":
      currentNumber += Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "-"
      break
    case "*":
      currentNumber *= Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "-"
      break
    case "÷":
      currentNumber /= Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "-"
      break
    case "":
      currentNumber = Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "-"
      break
  }
}



function multiply(){
  switch(lastOperand){
    case "=":
      currentNumber = Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "*"
      break
    case "-":
      currentNumber -= Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "*"
      break
    case "+":
      currentNumber += Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "*"
      break
    case "*":
      currentNumber *= Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "*"
      break
    case "÷":
      currentNumber /= Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "*"
      break
    case "":
      currentNumber = Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "*"
      break
  }
}

function divide(){
  switch(lastOperand){
    case "=":
      currentNumber = Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "÷"
      break
    case "-":
      currentNumber -= Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "÷"
      break
    case "+":
      currentNumber += Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "÷"
      break
    case "*":
      currentNumber *= Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "÷"
      break
    case "÷":
      currentNumber /= Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "÷"
      break
    case "":
      currentNumber = Number(currentOperationDisplay.textContent)
      adjustDisplay()
      lastOperand = "÷"
      break
  }
}


function adjustDisplay() {
  displayedNum = ""
  currentOperationDisplay.textContent = ""
  previousOperationDisplay.textContent = currentNumber
}