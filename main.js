var calculateString = '';
var flag = 0;

var calculator = createCalculator();
render(calculator);

var calculator2 = createCalculator();
render(calculator);


function render(element){
    addElement("root",element.html);
}
function addElement(id,element){
    var app_root = document.getElementById(id);
    app_root.insertAdjacentHTML("beforeend",element);
}
function remove(id){
    var element = document.getElementById(id);
    element.innerHTML = '';
}
function getCalculateString(button){
    var display = button.parentElement.parentElement.parentElement.parentElement.previousSibling;
    if(button.value == '='){
        calculate(calculateString,display);
        calculateString='';
        flag=1;
    }else{
        if(flag==1){
            display.innerHTML = '';
            flag=0;
        }
        calculateString += button.value;
        display.insertAdjacentHTML("beforeend",button.value);
    }
}

function calculate(operation,display){
    var answer = eval(operation);
    display.innerHTML = answer;
}
function createCalculator(){
    var displayHtml = '<div class="display" id="display"></div>';
    var calculatorHtml = '<table>\
    <tr>\
        <td><input onclick="getCalculateString(this)" type="button" value="7"></td>\
        <td><input onclick="getCalculateString(this)" type="button" value="8"></td>\
        <td><input onclick="getCalculateString(this)" type="button" value="9"></td>\
        <td><input onclick="getCalculateString(this)" type="button" value="/"></td>\
    </tr>\
    <tr>\
        <td><input onclick="getCalculateString(this)" type="button" value="4"></td>\
        <td><input onclick="getCalculateString(this)" type="button" value="5"></td>\
        <td><input onclick="getCalculateString(this)" type="button" value="6"></td>\
        <td><input onclick="getCalculateString(this)" type="button" value="-"></td>\
    </tr>\
    <tr>\
        <td><input onclick="getCalculateString(this)" type="button" value="1"></td>\
        <td><input onclick="getCalculateString(this)" type="button" value="2"></td>\
        <td><input onclick="getCalculateString(this)" type="button" value="3"></td>\
        <td><input onclick="getCalculateString(this)" type="button" value="+"></td>\
    </tr>\
    <tr>\
        <td><input onclick="getCalculateString(this)" type="button" value="0"></td>\
        <td><input onclick="getCalculateString(this)" type="button" value="."></td>\
        <td><input onclick="getCalculateString(this)" type="button" value="="></td>\
        <td><input onclick="getCalculateString(this)" type="button" value="*"></td>\
    </tr>\
</table>';
    return {
        "html":displayHtml+calculatorHtml
    };
}