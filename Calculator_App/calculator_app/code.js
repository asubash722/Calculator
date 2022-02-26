setScreen("homeScreen");
//Result of the final operation, mainly used to recall from memory
var answer = 0;

//Checking if a number has been pressed
var click = false;

//Checking if the equals button has been pressed
var equals = true;

//Number that goes through the operation
var num1 = 0;

//Essentially another num1, just another variable that gets the number on the screen and does an operation to it
var num2 = 0;

//The text of the output display
var outputText = getText("outputDisplay");

//checks if multipication button has been pressed
var multclick = false;

//checks if the subtraction button has been pressed
var subclick = false;

//checks if the addition button has been pressed
var addclick = false;

//checks if the division button has been pressed
var divclick = false;


//Variable that makes the press of a number 
//(after the equals button is pressed) clear the output display
var flag = false;


onEvent("goToCalculator", "click", function( ) {
 
 setScreen("calculatorScreen");
   
});


onEvent("offButton", "click", function( ) {
  setScreen("homeScreen");
  num1 = 0;
  multclick = false;
  divclick = false;
  subclick = false;
  addclick = false;
  flag = false;
  equals = true;
  num2 = 0;
  answer = 0;
  click = false;
  outputText = "";
  updateOutput();
});

onEvent("0", "click", function( ) {
  if (flag == true)
  {
    outputText = "";
    flag = false;
  }
  
  
  if(getText("outputDisplay").length <= 6)
  {
    outputText += 0;
    updateOutput();
    click = true;
  }
});

onEvent("1", "click", function( ) {
  if (flag == true)
  {
    outputText = "";
    flag = false;
  }
  
  if(getText("outputDisplay").length <= 6)
  {
    outputText += 1;
    updateOutput();
    click = true;
  }
});

onEvent("2", "click", function( ) {
  if (flag == true)
  {
    outputText = "";
    flag = false;
  }
  
  if(getText("outputDisplay").length <= 6)
  {
    outputText += 2;
    updateOutput();
    click = true;
  }
});

onEvent("3", "click", function( ) {
  if (flag == true)
  {
    outputText = "";
    flag = false;
  }
  
  if(getText("outputDisplay").length <= 6)
  {
    outputText += 3;
    updateOutput();
    click = true;
  }
});

onEvent("4B", "click", function( ) {
  if (flag == true)
  {
    outputText = "";
    flag = false;
  }
  
  if(getText("outputDisplay").length <= 6)
  {
    outputText += 4;
    updateOutput();
    click = true;
  }
});

onEvent("5B", "click", function( ) {
  if (flag == true)
  {
    outputText = "";
    flag = false;
  }
  
 if(getText("outputDisplay").length <= 6)
  {
    outputText += 5;
    updateOutput();
    click = true;
  }
});

onEvent("6B", "click", function( ) {
  if (flag == true)
  {
    outputText = "";
    flag = false;
  }
  
  if(getText("outputDisplay").length <= 6)
  {
    outputText += 6;
    updateOutput();
    click = true;
  }
});

onEvent("7Button", "click", function( ) {
  if (flag == true)
  {
    outputText = "";
    flag = false;
  }
  
  if(getText("outputDisplay").length <= 6)
  {
    outputText += 7;
    updateOutput();
    click = true;
  }
});

onEvent("8Button", "click", function( ) {
  if (flag == true)
  {
    outputText = "";
    flag = false;
  }
  
  if(getText("outputDisplay").length <= 6)
  {
    outputText += 8;
    updateOutput();
    click = true;
  }
});

onEvent("9Button", "click", function( ) {
  if (flag == true)
  {
    outputText = "";
    flag = false;
  }
  
  if(getText("outputDisplay").length <= 6)
  {
    outputText += 9;
    updateOutput();
    click = true;
  }
});

onEvent("decimalButton", "click", function( ) {
  if (flag == true)
  {
    outputText = "";
    flag = false;
  }
  
  if(getText("outputDisplay").length <= 6)
  {
    outputText += ".";
    updateOutput();
    click = true;
  }
});


onEvent("percentButton", "click", function ( ) {
  num1 = Number(getText("outputDisplay"));
  num1 /= 100;
  click = false;
  equals = false;
  round();
  outputText = num1;
  updateOutput();
});

onEvent("squareRootButton", "click", function ( ){
   num2 = Number(getText("outputDisplay"));
   num2 = Math.sqrt(num2);
   round2();
   click = true;
   //equals = false;
   outputText = num2;
   updateOutput();
});

onEvent("plusMinusButton", "click", function ( ){
  num2 = Number(getText("outputDisplay"));
  num2 *= -1;
  click = true;
  //equals = false;
  outputText = num2;
  updateOutput();
});

onEvent("answerButton", "click", function ( ){
  num2 = answer;
  outputText = num2;
  updateOutput();
  if(click == false)
  {
    equals == true;
  }
  else
  {
    equals = false;
  }
  click = true;
});

onEvent("fullCancelButton", "click", function ( ){
  num1 = 0;
  multclick = false;
  divclick = false;
  subclick = false;
  addclick = false;
  flag = false;
  equals = true;
  num2 = 0;
  click = false;
  outputText = "";
  updateOutput();
  
});

onEvent("MCButton", "click", function ( ){
  answer = 0;
});

onEvent("multiplicationButton", "click", function( ) {
  multclick = true;
  
  if(equals == true && click == true)
  {
    num1 = 1;
  }

  if(click == true && multclick == true && addclick == false && subclick == false && divclick == false)
  {
    console.log(num1);
    num1 *= Number(getText("outputDisplay"));
  }
  
  else if(click == true && multclick == true && addclick == true && subclick == false && divclick == false)
  {
    num1 += Number(getText("outputDisplay"));
  }
  
  else if(click == true && multclick == true && addclick == false && subclick == true && divclick == false)
  {
    num1 -= Number(getText("outputDisplay"));
  }
  
  else if(click == true && multclick == true && addclick == false && subclick == false && divclick == true)
  {
    num1 /= Number(getText("outputDisplay"));
  }
  
  addclick = false;
  divclick = false;
  subclick = false;
  equals = false;
  click = false;
  outputText = "";
  updateOutput();
  
  //click = true;
});

onEvent("divisionButton", "click", function( ) {

  if(equals == true && click == true)
  {
    num1 = Number(getText("outputDisplay"));
  }

  
  if(click == true && multclick == false && addclick == true && subclick == false && divclick == false)
  {
    num1 += Number(getText("outputDisplay"));
  }
  
  else if(click == true && multclick == false && addclick == false && subclick == false && divclick == true)
  {
    num1 /= Number(getText("outputDisplay"));
  }
  
  else if(click == true && multclick == false && addclick == false && subclick == true && divclick == false)
  {
    num1 -= Number(getText("outputDisplay"));
  }
  
  else if(click == true && multclick == true && addclick == false && subclick == false && divclick == false)
  {
    num1 *= Number(getText("outputDisplay"));
  }
  
  divclick = true;
  addclick = false;
  multclick = false;
  subclick = false;
  equals = false;
  click = false;
  outputText = "";
  updateOutput();
});

onEvent("additionButton", "click", function( ) {
  addclick = true;
  if(equals == true && click == true)
  {
    num1 = 0;
  }
  
  if(click == true && multclick == true && addclick == true && subclick == false && divclick == false)
  {
    num1 *= Number(getText("outputDisplay"));
  }
  
  else if(click == true && multclick == false && addclick == true && subclick == false && divclick == false)
  {
    num1 += Number(getText("outputDisplay"));
  }
  
  else if(click == true && multclick == false && addclick == true && subclick == true && divclick == false)
  {
    num1 -= Number(getText("outputDisplay"));
  }
  
  else if(click == true && multclick == false && addclick == true && subclick == false && divclick == true)
  {
    num1 /= Number(getText("outputDisplay"));
  }
  
  multclick = false;
  divclick = false;
  subclick = false;
  equals = false;
  click = false;
  outputText = "";
  updateOutput();
});

onEvent("subtractionButton", "click", function( ) {
  
  if(equals == true && click == true)
  {
    num1 = Number(getText("outputDisplay"));
  }
  
  if(click == true && multclick == true && addclick == false && subclick == false && divclick == false)
  {
    num1 *= Number(getText("outputDisplay"));
  }
  
  else if(click == true && multclick == false && addclick == true && subclick == false && divclick == false)
  {
    num1 += Number(getText("outputDisplay"));
  }
  
  else if(click == true && multclick == false && addclick == false && subclick == true && divclick == false)
  {
    num1 -= Number(getText("outputDisplay"));
  }
  
  else if(click == true && multclick == false && addclick == false && subclick == false && divclick == true)
  {
    num1 /= Number(getText("outputDisplay"));
  }
  
  subclick = true;
  multclick = false;
  divclick = false;
  addclick = false;
  equals = false;
  click = false;
  outputText = "";
  updateOutput();
});

//////////////////////////////////////////////////////////////////
//conditionals for the operation calclulations

/////////////////////////////////////////////////////////////////


onEvent("equalsButton", "click", function( ) {
  //num2 = Number(getText("outputDisplay"));
  if(multclick == true)
  {
   num1 *= Number(getText("outputDisplay"));
   outputText = num1;
   multclick = false;
  }

  else if (divclick == true)
  {
    num1 /= Number(getText("outputDisplay"));
    outputText = num1;
    divclick = false;
  }
  
  else if (addclick == true)
  {
    num1 += Number(getText("outputDisplay"));
    outputText = num1;
    addclick = false;
  }
  
  else if (subclick == true)
  {
    num1 -= Number(getText("outputDisplay"));
    outputText = num1;
    subclick = false;
  }
  
  else
  {
    num1 = 0;
    outputText = num1;
  }
  
  //outputText = answer;
  if (num1 >= 10000000)
  {
    outputText = "Error";
    num1 = 0;
  }
  
  round();
  
  updateOutput();
  answer = num1;
  equals = true;
  click = false;
  flag = true;
});

onEvent("cancelButton", "click", function( ) {
  outputText = "";
  updateOutput();
  
});

//abstraction, called multiple times in the code so the function simplifies the process and reduces redundancy
//sets the text the user sees to the value of the operations they inputted
function updateOutput()
{
  setProperty("outputDisplay", "text", outputText);
}

//abstraction, called multiple times in the code so the function simplifies the process and reduces redundancy
//rounds the value to stop the output text from having too many decimal places
function round()
{
  if(num1.toString().length > 8)
     {
      
      var i;
      var copy = num1;
      for(i = copy.toString().length; i > 0; i--)
      {
        num1 = Number(num1.toFixed(i));
        if(num1.toString().length <= 8)
        {
          outputText = num1;
          break;
        }
      }
     }
}

//abstraction, called multiple times in the code so the function simplifies the process and reduces redundancy
//rounds num2 to stop the output text from having too many decimal places
function round2()
{
  if(num2.toString().length > 8)
     {
      
      var i;
      var copy = num2;
      for(i = copy.toString().length; i > 0; i--)
      {
        num2 = Number(num2.toFixed(i));
        if(num2.toString().length <= 8)
        {
          outputText = num2;
          break;
        }
      }
     }
}