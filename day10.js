const once = function (fn) {
    let called = false

    return function (...args) {
        if (called) {
            return undefined
        }
        called = true;
        return fn(...args)
    };
};

const suma = function (a, b) {
    return a + b;
};

const sumarnumeros = once(suma);
console.log(sumarnumeros(2, 3));
console.log(sumarnumeros(4, 5));

