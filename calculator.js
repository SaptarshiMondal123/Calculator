let displayValue = '0';
function updateDisplay(){
    const display = document.getElementById('display');
    display.textContent=displayValue;
}
function clearDisplay(){
    displayValue='0';
    updateDisplay();
}
function appendToDisplay(value){
    if(displayValue==='0' || displayValue==='Error'){
        displayValue=value;
    }
    else{
        displayValue+=value;
    }
    updateDisplay();
}
function deleteLast(value){
    displayValue=displayValue.slice(0,-1);
    if(displayValue===''){
        displayValue='0';
    }
    updateDisplay();
}
function calculate(){
    try{
        displayValue=eval(displayValue).toString();
        updateDisplay();
    }
    catch (error){
        displayValue='Error';
        updateDisplay();
    }
}
updateDisplay();