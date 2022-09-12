'use strict'; 

var click_button = document.getElementsByClassName('button');
var display = document.getElementById('display');

var operator = "";
var operand1 = "";
var operand2 = "";

for(var i=0; i<click_button.length; i++)
{
    click_button[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        var text = display.innerText;
        
        if(value == '*' || value == '/' || value == '+' || value == '-')
        {
            if(operand1 == "")
            {
                operand1 = text;
            }
            operator = value;
            display.innerText = "";

        }
        else if(value == 'sign')
        {
            if(operand1 == "")
            {
                operand1 = -1 * text;
                console.log(operand1);
                display.innerText = operand1;
            }
            else
            {
                operand2 = -1 * text;
                console.log(operand2);
                display.innerText = operand2;
            }
        }
        else if(value == '.')
        {
            if(text.length && !text.includes('.'))
            {
                display.innerText = text + '.';
            }
        }
        else if(value == '%')
        {
            operand1 = text/100;
            display.innerText = operand1;
        }
        else if(value == '=')
        {
            if(operand1 == "")
            {
                operand1 = text;
            }
            // else if(operand2 == "")
            else
            {
                operand2 = text;
            }
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            display.innerText = result;
            operand1 = "";
            // operand2 = "";
        }
        else if(value == 'ac')
        {
            display.innerText = "";
            operand1 = "";
            operand2 = "";
            operator = "";
        }
        else
        {
            display.innerText += value;
        }
    });

}