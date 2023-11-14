function getLength(arr){
    return arr.length;
}

function getSum(arr){
    let sum = 0;
    for(let i=0; i < getLength(arr); i=i+1){
        sum = sum + arr[i];
    }
    return sum;
}
function getMean(arr){
    mean = getSum(arr) / getLength(arr) 
    return mean;
}
function getMin(arr){
    let min = arr[0];
    for(let i=1; i < getLength(arr); i=i+1){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min;
}
function getMax(arr){
    let max = arr[0];
    for(let i=1; i < getLength(arr); i=i+1){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

function getRange(arr){
    range = getMax(arr) - getMin(arr)
    return range;
}

function getEvens(arr){
    evens = [];
    for(let i=0; i < getLength(arr); i=i+1){
        if(arr[i] % 2 === 0){
            evens.push(arr[i])
        }
    }
    return evens;
}

function getOdds(arr){
    odds = [];
    for(let i=0; i < getLength(arr); i=i+1){
        if(arr[i] % 2 === 1){
            odds.push(arr[i])
        }
    }
    return odds;
}

numbers = [9, 15, 24, 8, 7, 16]
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);