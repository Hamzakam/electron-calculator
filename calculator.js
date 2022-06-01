const operation = (number1, number2, operation) => {
    switch (operation) {
        case "/":
            return number2 == 0 ? "Division By Zero" : number1 / number2;
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
    }
    return "Internal Error";
}
const solve = (event) => {
    const number1 = Number(document.querySelector("#number1").value);
    const number2 = Number(document.querySelector("#number2").value);
    if (Number.isNaN(number1) || Number.isNaN(number2)) {
        document.querySelector("#alert").innerText = "The Numbers are in incorrect format.";
        setTimeout(() => {
            document.querySelector("#alert").innerText = "";
        }, 3000);
        document.querySelector("#number1").value = 0;
        document.querySelector("#number2").value = 0;
        return;
    }
    operand = event.innerHTML.trim();
    console.log(event)
    document.querySelector(".result").innerText = operation(number1, number2, operand);
}