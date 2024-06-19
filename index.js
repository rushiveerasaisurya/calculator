let equation= document.getElementById("equation");
let result= document.getElementById("result");
let calculator=document.getElementById("calculator");
let checkbox=document.getElementById("check");
let mode=document.getElementById("content");
let keys=document.getElementById("keys");
let body=document.getElementById("body");
let calculated=false;
function darkmode(){
    if(checkbox.checked){
        body.style.background="#222";
        calculator.style.boxShadow =" inset 0 8px 60px rgba(255, 255, 255, 0.1),inset 0 8px 8px rgba(255, 255, 255, 0.1),inset 0 -4px 4px rgba(255, 255, 255, 0.1)";
        equation.style.color="white";
        result.style.color="white";
        mode.style.color="white";
        calculator.style.background="linear-gradient(to bottom, #444,#222)";
        mode.textContent="Dark Theme";
        keys.style.color="white"

       
    }
    else{
        calculator.style.background="linear-gradient(150deg,#fffff0, #ffffff)";
        mode.textContent="Light Theme";
        equation.style.color="black";
        result.style.color="black";
        mode.style.color="black";
        keys.style.color="black"
        body.style.background="#ff00";
        calculator.style.boxShadow =" inset 0 8px 60px rgba(0, 0, 0, 0.1),inset 0 8px 8px rgba(0, 0, 0, 0.1),inset 0 -4px 4px rgba(0, 0, 0, 0.1)";

    }
}
Array.from(keys.children).forEach(button => {
    if (button.classList.contains('operator')) {
        button.style.color = "rgb(255, 139, 23)";
    }
    if (button.classList.contains('equalto')) {
        button.style.background = "rgb(255, 139, 23)";
    }
});
function appendToDisplay(input){
    result.value+=input;
}

function clearDisplay(){
    result.value="";
    equation.value="";
    calculated=false;
}
function clearLast(){
    if(!calculated){
        result.value=result.value.slice(0,-1);
    }
}
function calculate(){
    equation.value=result.value;
    calculated=true;
    try{
        
        result.value=eval(result.value);
        
    }
    catch(error){
        result.value="syntax error";
    }
}
