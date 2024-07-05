const isEmpty = function (obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0
    }
    else {
        let arr = Object.keys(obj)
        return arr.length === 0
    }
};

console.log(isEmpty([]));
console.log(isEmpty([1, 2, 3, 4]));
console.log(isEmpty({}));
console.log(isEmpty({ a: 1, b: 2 }));