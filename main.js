//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    // TODO...
    const array = [12, 55, "2", 22, 11, true];
    console.log(minNumber(array));
}

const ex3 = () => {
    // TODO...
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(shortestString(array));
}

const ex4 = () => {
    let array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

const ex5 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    console.log(countIt(array));
}

const ex6 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    let result = countItems(array);
    console.log("Number of Integers: " + result.numIntegers)
    console.log("Number of Decimal Numbers: " + result.numDecimals)
    console.log("Number of Strings: " + result.numStrings)
}

const ex7 = () => {
    let person1 = { name: "Alice", age: 22 }
    let person2 = { name: "Bob", age: 21 }
    let person3 = { name: "Charlie", age: 23 }
}

//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;
    // TODO...
    for (let i of array) {
        if (Number.isInteger(i) === true && typeof (i) !== 'string') {
            retval++;
        }
    }
    return retval;
}

const minNumber = (array) => {
    let retVal = array[0];
    for (let i of array) {
        if (i < retVal && typeof (i) !== 'string' && typeof (i) !== 'boolean') {
            retVal = i;
        }
    }
    return retVal;
}

const shortestString = (array) => {
    let retVal = array[0];
    for (let i of array) {
        if (i.length < retVal.length) {
            retVal = i;
        }
    }
    return retVal;
}

const countLetters = (array) => {
    let retVal = 0;
    for (let i of array) {
        retVal += i.length;
    }
    return retVal;
}

const countIt = (array) => {
    const countIntegerNumbers = (array) => {
        let retVal = 0;
        for (let i of array) {
            if (Number.isInteger(i) === true && typeof i !== 'string') {
                retVal++;
            }
        }
        return "Number of Integers: " + retVal;
    }

    const countStrings = (array) => {
        let retVal = 0;
        for (let i of array) {
            if (typeof (i) === 'string') {
                retVal++;
            }
        }
        return "Number of Strings: " + retVal;
    }

    const countDecimalNumbers = (array) => {
        let retVal = 0;
        for (let i of array) {
            if (Number.isInteger(array[i]) === true && typeof (array[i]) !== 'string') {
                retVal++;
            }
        }
        return "Number of Decimal Numbers: " + retVal;
    }

    console.log(countIntegerNumbers(array));
    console.log(countDecimalNumbers(array));
    console.log(countStrings(array));
}

const countItems = (array) => {


    const countStrings = (array) => {
        let retVal = 0;
        for (let i of array) {
            if (typeof (i) === 'string') {
                retVal++;
            }
        }
        return retVal;
    }

    const countIntegerNumbers = (array) => {
        let retVal = 0;
        for (let i of array) {
            if (Number.isInteger(i) === true && typeof i !== 'string') {
                retVal++;
            }
        }
        return retVal;
    }
    const countDecimalNumbers = (array) => {
        let retVal = 0;
        for (let i of array) {
            if (Number.isInteger(array[i]) === true && typeof (array[i]) !== 'string') {
                retVal++;
            }
        }
        return retVal;
    }

}

const main = async () => {
    // ex1();
    // ex2();
    // ex3();
    // ex4();
    // ex5();
    // ex6();
    // ex7();
    // ex8();
    // ex9();
    // ex10();
}

main();
