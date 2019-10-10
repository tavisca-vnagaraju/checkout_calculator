var Calculator = function (){
    var buttons = [
        {"value":7,"onClick":numberClicked},
        {"value":8,"onClick":numberClicked},
        {"value":9,"onClick":numberClicked},
        {"value":"/","onClick":operatorClicked},
        {"value":4,"onClick":numberClicked},
        {"value":5,"onClick":numberClicked},
        {"value":6,"onClick":numberClicked},
        {"value":"-","onClick":operatorClicked},
        {"value":1,"onClick":numberClicked},
        {"value":2,"onClick":numberClicked},
        {"value":3,"onClick":numberClicked},
        {"value":"+","onClick":operatorClicked},
        {"value":0,"onClick":numberClicked},
        {"value":".","onClick":numberClicked},
        {"value":"=","onClick":operatorClicked},
        {"value":"*","onClick":operatorClicked},
    ]
    var operations = {
        "+":function (a,b){
            return a+b;
        },
        "-":function (a,b){
            return a-b;
        },
        "*":function (a,b){
            return a*b;
        },
        "/":function (a,b){
            return a/b;
        }
    }
    var root  = document.getElementById("root");
    var display = document.createElement("div");
    var buttonDisplay = document.createElement("div");
    let leftNumber = '';
    let rightNumber = '';
    let operator = '';
    let answer = '';
    function numberClicked(event){
        if(answer != ''){
            display.innerHTML = '';
            answer = '';
        }
        if(operator == ''){
            leftNumber += event.target.value;
            display.appendChild(document.createTextNode(event.target.value));
        }
        else if(operator != '' && operator != '='){
            rightNumber += event.target.value;
            display.appendChild(document.createTextNode(event.target.value));
        }
        
    }
    function operatorClicked(event){
        if(event.target.value != '='){
            operator = event.target.value;
            display.appendChild(document.createTextNode(event.target.value));
        }
        if(event.target.value == '='){
            calculate(operator,leftNumber,rightNumber);
            leftNumber = '';
            rightNumber = '';
            operator = '';
        }
    }
    function calculate(operator,leftNumber,rightNumber){
        answer = operations[operator](parseFloat(leftNumber),parseFloat(rightNumber));
        display.innerHTML = answer;
    }
    function prepareUI(){
        display.classList.add("display");
        buttonDisplay.classList.add("flex-container");

        for (let index = 0; index < buttons.length; index++) {
            var button = document.createElement("input");
            button.classList.add("flex-item");
            button.classList.add("button");
            button.setAttribute("type","button");
            button.setAttribute("value",buttons[index].value);
            button.addEventListener("click",buttons[index].onClick);
            button.innerHTML = buttons[index].value;
            buttonDisplay.appendChild(button);
        }
        root.appendChild(display);
        root.appendChild(buttonDisplay);
    }
    return prepareUI;
}