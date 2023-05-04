do {
    operator = prompt("Select an operation (+, -, *, /)?");
  } while (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/");
  
  do {
    numOfOperands = parseInt(prompt("How many operands do you want to use ? You can use from 2 to 7:"));
  } while (isNaN(numOfOperands) || numOfOperands < 2 || numOfOperands > 7);
  
  result = 0;
  operandsCounter = 1;
  
  do {
    operand = parseFloat(prompt(`Enter value for operand №${operandsCounter}:`));
    if (isNaN(operand)) {
      alert("Please enter a valid number for the operand.");
    } else {
      if (operandsCounter === 1) {
        result = operand;
      } else {
        switch (operator) {
          case "+":
            result += operand;
            break;
          case "-":
            result -= operand;
            break;
          case "*":
            result *= operand;
            break;
          case "/":
            result /= operand;
            break;
          default:
            break;
        }
      }
      operandsCounter++;
    }
  } while (operandsCounter <= numOfOperands);
  
  alert(result);