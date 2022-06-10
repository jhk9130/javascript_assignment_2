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

    let peopleAge = [];
    peopleAge.push(person1, person2, person3);
    peopleAge.sort(function (a, b) { return a.age - b.age });

    console.table(peopleAge);
}

const ex8 = () => {
    let p1 = createPerson("Alice", 11)
    let p2 = createPerson("Bob", 22)
    let p3 = createPerson("Charlie", 33)

    let personArray = [];
    personArray.push(p1)
    personArray.push(p2)
    personArray.push(p3)

    console.log(countOver20(personArray))
}

const ex9 = () => {
    let item1 = { quantity: 1, cost: 1.00 }
    let item2 = { quantity: 2, cost: 2.00 }
    let item3 = { quantity: 3, cost: 3.00 }

    let itemArray = [];
    itemArray.push(item1);
    itemArray.push(item2);
    itemArray.push(item3);

    console.log(calculateTotal(itemArray));
}

const ex10 = () => {
    let usageData = [
        { userId: 1111, minutes: 10.0 },
        { userId: 2222, minutes: 20.0 },
        { userId: 3333, minutes: 30.0 }
    ]

    let person = { userId: 3333, fullName: "Charlie" }
    let result = calcCellBillForPerson(usageData, person)
    console.log(result)
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

    let result = {
        numIntegers: countIntegerNumbers(array),
        numDecimals: countDecimalNumbers(array),
        numStrings: countStrings(array)
    }

    return result;

}

const createPerson = (stringName, numberAge) => {
    let result = {
        fullname: stringName,
        age: numberAge
    }

    return result;

}

const countOver20 = (personArray) => {
    let retVal = 0;
    for (let i of personArray) {
        if (i.age > 20) {
            retVal++;
        }
    }
    return retVal;
}

const calculateTotal = (itemArray) => {
    let retVal = 0;
    let tempTotal = 0;
    for (let i of itemArray) {
        tempTotal = tempTotal + i.quantity * i.cost;
    }
    retVal += tempTotal;
    return retVal;
}

const calcCellBillForPerson = (usageData, person) => {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    let usageMinutes = 0;

    for (let i of usageData) {
        if (i.userId === person.userId) {
             usageMinutes += i.minutes;
        }
    }

    let retVal = { 
        userId: person.userId, 
        fullname: person.fullName, 
        minutes: usageMinutes,
        perMinuteCharge: 0.1, 
        charges: formatter.format(usageMinutes * 0.1)
    }

    return retVal;
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
    ex10();
}

main();
