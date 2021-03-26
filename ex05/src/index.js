let shopingList = new Map([
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5]
]);

let arrKey = [...shopingList.keys()];
let arrValue = [...shopingList.values()];
for (let key of arrKey) {
    console.log(`groceries: ${key}`);
}
for (let value of arrValue) {
    console.log(`amount: ${value}`);
}


for (let value of shopingList) {
    console.log(value);
}

module.exports = { shopingList, arrKey, arrValue };
