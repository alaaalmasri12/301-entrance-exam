/*
inputs:array of numbers and a number


*/

'user strict'

function greaterThan(arr, elem) {

    for(var i=0;i<arr.length;i++)
    if(arr[i]<elem)
    {
        return arr[i];
    }
    
  }
  console.log(greaterThan([4,2,3,1],8));
