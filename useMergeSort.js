const sort = require("./mergeSort");

const elements = [527, 1011, 14, 87, 100];

function compare(left, right) {
    console.log("compare", left, "to", right);
    return left-right;
}

console.log(sort(compare, elements));