function mergeSort(compare, elements) {
    if (Array.isArray(elements)) {
        if (elements.length <= 1) {
            return elements;
        }

        const middle = Math.floor(elements.length / 2);

        const left = elements.slice(0, middle);
        const right = elements.slice(middle);

        const leftSorted = mergeSort(compare, left);
        const rightSorted = mergeSort(compare, right);

        return merge(compare, leftSorted, rightSorted);
        
    }
    return elements;
}

function merge(compare, left, right) {
    const sorted = [];
    console.log("left", left, "right", right)

    while (left.length && right.length) {
        const comparison = compare(left[0], right[0]);

        if(comparison < 0) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return sorted.concat(left, right);
}

module.exports = mergeSort;