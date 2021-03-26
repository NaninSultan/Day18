let fifteenArray = [];

function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    for (let i = 1; i <= 5; i++) {
        var x = "";
        x += i;
        yield x;
        fifteenArray.push(x);
    }
    return x;
}

function* insideGenerator2() {
    for (let i =10; i <= 15; i++) {
        var x = "";
        x += i;
        yield x;
        fifteenArray.push(x);
    }
    return x;
}

function* insideGenerator3() {
    for (let i = 6; i <= 9; i++) {
        var x = "";
        x += i;
        yield x;
        fifteenArray.push(x);
    }
    return x;
}

var iterator = myGenerator();


for (i =0; i <= 15; i++) {
    if (i === 15) {
        fifteenArray.push("undefined!");
    } else {
    fifteenArray[i] = iterator.next().value;
    }
}
console.log(fifteenArray.join("#, "));


module.exports = { fifteenArray, myGenerator };