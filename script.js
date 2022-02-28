let screen = document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenValue ='';
//value on the screen

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText=='X'){
            buttonText ='*';
            screenValue +=buttonText;
            screen.value =screenValue;
        }
        //screenValue is a variable and screen.value is a value, screen is an input tag and screenValue is a string
        else if(buttonText=='C'){
            screenValue = "";
            screen.value =screenValue;
        }
        else if(buttonText=='='){
            screen.value = eval(screenValue);
            //eval:- function in javascript to evaluate the screen value
            // The eval() method evaluates or executes an argument.If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.
        }
        else{
            screenValue +=buttonText;
            screen.value =screenValue;
        }
    });
}