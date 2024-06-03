
let currentValue = "";

// updating the inputs
function updateValue(){
    document.querySelector("#display-value").value = currentValue;
}

// clearing the inputs
function clearValue(){
    currentValue = '';
    updateValue();
}

// appending values as a inputs
function appendValue(value){
    currentValue += value;
    updateValue();
}

// evaluating values
function evaluateExpression(){
    try{
        currentValue = eval(currentValue);
        updateValue();
    }
    catch(error){
        currentValue = "Infinity";
        updateValue();
    }
}

// backspace functionality
function backSapce(){
    currentValue = currentValue.slice(0, -1);
    updateValue();
}