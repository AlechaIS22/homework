let myMethod = {
    mySlice (array, start = 0, end = array.length) {

        start < 0 ? start += array.length : start;
        end < 0 ? end += array.length : end;

        let resultArray = [];

        for (let i = start; i < end; i++) {
            resultArray.push(array.at(i));
        }
        return resultArray;
    },
    myIndexOf(array, item, from = 0) {
        for (let i = from; i < array.length; i++){
            if (array[i] === item){
                return i;
            }
        }
        return -1;
    },
    myIncludes(array, item, from){

    },
};

let array = ['t', 'e', 's', 't'];

console.log("Сравнение slice и mySlice");
console.log("Изначальный массив", array);
console.log("Без start и end: ", myMethod.mySlice(array), array.slice());
console.log("Start = 1: ", myMethod.mySlice(array, 1), array.slice(1));
console.log("Start = undefined, end = 3: ", myMethod.mySlice(array, undefined, 3), array.slice(undefined, 3));
console.log("Start = 1, end = 3: ", myMethod.mySlice(array, 1, 3), array.slice(1, 3));
console.log("Start = 3, end = 1: ", myMethod.mySlice(array, 3, 1), array.slice(3, 1));
console.log("Start = -3: ", myMethod.mySlice(array, -3), array.slice(-3));
console.log("Start = undefined, end = -3: ", myMethod.mySlice(array, undefined, -3), array.slice(undefined, -3));
console.log("Start = -4, end = -2: ", myMethod.mySlice(array, -4, -2), array.slice(-4, -2));
console.log("Start = -2, end = -4: ", myMethod.mySlice(array, -2, -4), array.slice(-2, -4));

console.log("Сравнение myIndexOF и indexOf");
console.log("Item = '1', from = undefined: ", myMethod.myIndexOf(array, "1"), array.indexOf("1"));
console.log("Item = 't', from = undefined: ", myMethod.myIndexOf(array, "t"), array.indexOf("t"));
console.log("Item = 'T', from = undefined: ", myMethod.myIndexOf(array, "T"), array.indexOf("T"));
console.log("Item = 't', from = 2: ", myMethod.myIndexOf(array, "t", 2), array.indexOf("t", 2));
console.log("Item = '1', from = 2: ", myMethod.myIndexOf(array, "1", 2), array.indexOf("1", 2));