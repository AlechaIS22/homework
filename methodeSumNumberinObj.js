function isNumber(variable){
    return (typeof variable) == "number";
}

let methodObject = {
    sumNumberInObject(object) {
        let sum = 0;
        for (let value of Object.values(object)) {
            if (isNumber(value)){
                sum += value;
            }
        }
        return sum;
    },
    objHsaNumberInArray(){

    },
};

let testObject = {
    name: 'Ole',
    friends: 5,
    likes: 19,
    projects: 7,
};
console.log(methodObject.sumNumberInObject(testObject));
