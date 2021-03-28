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
    }
    return x;
}

function* insideGenerator2() {
    for (let i = 10; i <= 15; i++) {
        var x = "";
        x += i;
        yield x;
    }
    return x;
}

function* insideGenerator3() {
    for (let i = 6; i <= 9; i++) {
        var x = "";
        x += i;
        yield x;
    }
    return x;
}
var iterator = myGenerator();

let fifteenArray = [];
for (let i = 0; i < 16; i++) {
    let iter = iterator.next();
    fifteenArray[i] = iter.value + (iter.done ? "!" : "#");
}

console.log(fifteenArray.join(", "));

module.exports = {
    fifteenArray,
    myGenerator
};