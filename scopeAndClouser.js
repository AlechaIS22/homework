function createLogger() {
    let logMessage = new Array();
    return {
        log: function(message) {
            logMessage.push(message);
        },
        getLogs: function() {
            console.log(logMessage);
        }
    }
}

let func = createLogger();

func.log("123");
func.getLogs();

try {
    console.log(logMessage);
} catch (error) {
    console.log(error.name, error.message);
}

function createRandomGenerator(min, max) {
    return function () {
        return  min + Math.floor(Math.random() * (max - min + 1));
    }
}
randomGenerator = createRandomGenerator(12, 32);
let testMap = new Map();

for (let i = 0; i < 1000; i++) {
    testMap.set(randomGenerator(), "True");
}

console.log(Array.from(testMap.keys()).sort(
    (a, b) => {
        return a - b;
    }
));

try {
    console.log(min, max);
} catch (error) {
    console.log(error.name, error.message);
}

/*
Замыкание необходимо для сохранения переданных параметров в функцию не смотря на точку ее дальнейшего вызова и
изменения внешнего окружения или переменных которые являлись параметрами для функции.
*/
