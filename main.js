const numberButtons = document.querySelectorAll("[data-number]")
const operandButtons = document.querySelectorAll("[data-operand]")
const equalButton = document.querySelector("data-equal")
const allClearButton = document.querySelector("data-all-clear")
const previousOperationDisplay = document.querySelector("data-previous-operation")
const currentOperationDisplay = document.querySelector("data-current-operation")


class Calculator {
  constructor(previousOperationDisplay, currentOperationDisplay){
    this.currentOperationDisplay = currentOperationDisplay
    this.previousOperationDisplay = previousOperationDisplay
  }

    clear(){

    }

    delete(){

    }
    
    appendNumber(){

    }
    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
      
    }
}