/*
inputs:array of numbers and a number


*/

'user strict'
var arraynumbers=[4,2,3,1];
var larger=3;
var numberofnumbers=0;
function greaterThan(arr, elem) {

    for(var i=0;i<arr.length;i++)
    if(arr[i]>larger)
    {
        numberofnumbers++;
    }
    return numberofnumbers;
    
  }
var result=greaterThan(arraynumbers,larger);
console.log("result",result);