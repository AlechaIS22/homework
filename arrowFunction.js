function myFilter(array, callback) {
    return array.reduce((result, element) => {
        callback(element) && result.push(element);
        return result;
    }, [])
}

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = myFilter(numbers, function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers, numbers);

const greaterThanThree = myFilter(numbers, function(num) {
    return num > 3;
});
console.log(greaterThanThree, numbers);
