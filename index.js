console.log("Привет! Это версия 2.0.0");

function rpnCalculate(exp) {
    const elements = exp.split(" ");
    const stack = [];
  
    elements.forEach(el => {
      if (!isNaN(el)) {
        // Если число -> преобразуем в число и помещаем в стек
        stack.push(parseInt(el, 10)); 
      } else {
        // Иначе извлекаем 2 последних числа из стека
        const b = stack.pop();
        const a = stack.pop();
  
        switch (el) {
          case '+':
            stack.push(a + b);
            break;
          case '-':
            stack.push(a - b);
            break;
          case '*':
            stack.push(a * b);
            break;
          case '/':
            if (b === 0) {
              throw new Error("Division by zero is not allowed.");
            }
            stack.push(Math.trunc(a / b));
            break;
          default:
            throw new Error(`Unknown operator: ${el}`);
        }
      }
    });
  
    return stack.pop();
}

  
module.exports = rpnCalculate;