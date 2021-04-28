// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.



function evenLast(numbers) {
  
    if(numbers.length === 0){
        return 0
    }
    
    let sumOfEvens = 0
    let lastDigit = numbers[numbers.length - 1]
    
    for(let i = 0; i < numbers.length; i++){
        if( i % 2 === 0){
            sumOfEvens += numbers[i]
        }
    }  
    return sumOfEvens * lastDigit
    }