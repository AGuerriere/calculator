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
    lastOperand = ""
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
  if(lastOperand == "="){
    // how to behave when pressing add button soon after pressing the equal button
    previousOperationDisplay.textContent = currentNumber
    lastOperand = "+"
    displayedNum = ""
  } else if (lastOperand === "+") {
    currentNumber += Number(currentOperationDisplay.textContent)
    displayedNum = ""
    currentOperationDisplay.textContent = ""
    previousOperationDisplay.textContent = currentNumber
    lastOperand = "+"
  } else if(lastOperand === "-"){
    currentNumber -= Number(currentOperationDisplay.textContent)
    displayedNum = ""
    currentOperationDisplay.textContent = ""
    previousOperationDisplay.textContent = currentNumber
    lastOperand = "+"
  } else {
    currentNumber += Number(currentOperationDisplay.textContent)
    displayedNum = ""
    currentOperationDisplay.textContent = ""
    previousOperationDisplay.textContent = currentNumber
    lastOperand = "+"
  }
}


function subtractOld() {
  if(lastOperand === "="){
    // how to behave when pressing minus button soon after pressing the equal button
    previousOperationDisplay.textContent = currentNumber
    lastOperand = "-"
    displayedNum = ""
  } else if(lastOperand === "") {
      currentNumber = Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "-"
  } else if(lastOperand === "-") {
      currentNumber -= Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "-"
  } else if(lastOperand === "+") {
      currentNumber += Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "-"
  }
}

function subtract() {
  switch(lastOperand){
    case "=":
      currentNumber = Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "-"
      break
    case "-":
      currentNumber -= Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "-"
      break
    case "+":
      currentNumber += Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "-"
      break
    case "*":
      currentNumber *= Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "-"
      break
    case "÷":
      currentNumber /= Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "-"
      break
    case "":
      currentNumber = Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "-"
      break
  }
}



function multiply(){
  switch(lastOperand){
    case "=":
      currentNumber = Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "*"
      break
    case "-":
      currentNumber -= Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "*"
      break
    case "+":
      currentNumber += Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "*"
      break
    case "*":
      currentNumber *= Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "*"
      break
    case "÷":
      currentNumber /= Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "*"
      break
    case "":
      currentNumber = Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "*"
      break
  }
}

function divide(){
  switch(lastOperand){
    case "=":
      currentNumber = Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "÷"
      break
    case "-":
      currentNumber -= Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "÷"
      break
    case "+":
      currentNumber += Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "÷"
      break
    case "*":
      currentNumber *= Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "÷"
      break
    case "÷":
      currentNumber /= Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "÷"
      break
    case "":
      currentNumber = Number(currentOperationDisplay.textContent)
      displayedNum = ""
      currentOperationDisplay.textContent = ""
      previousOperationDisplay.textContent = currentNumber
      lastOperand = "÷"
      break
  }
}