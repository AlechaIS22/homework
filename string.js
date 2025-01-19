let myMethods = {
    firstSymbolUp (string) {
        return string[0].toUpperCase() + string.slice(1);
    },

    stringClipping (string, limitation = 40) {
        if (string.length <= limitation) return string
        else return string.slice(0, string.lastIndexOf(" ", limitation)) + "...";
    },

    isSubstring (firstString, secondString) {
        switch (firstString.localeCompare(secondString)) {
            case -1:
                return secondString.indexOf(firstString) >= 0;
            case 1:
                return firstString.indexOf(secondString) >= 0;
            default:
                return true;
        }
    },
};
stringTest = "qwerty qwerty; qwerty, qwerty. qwertyaa! qwerty ";
substring = "qwerty";
noSubString = "123";
console.log(myMethods.firstSymbolUp(stringTest));
console.log(myMethods.stringClipping(stringTest));
console.log(myMethods.isSubstring(stringTest, substring),
    myMethods.isSubstring(stringTest, noSubString), 
    myMethods.isSubstring(stringTest, stringTest),
    myMethods.isSubstring(substring, stringTest), 
    myMethods.isSubstring(noSubString, stringTest),
);