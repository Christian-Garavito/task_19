const argumentsLength = function (...args) {
    let count = 0;
    for (let i = 0; i < args.length; i++) {
        count += 1;
    }
    return count;
};

// ejeplo tamaño del arry
const tamañoarr = argumentsLength(1, 2, 3, 4, 5, null, undefined);
console.log(tamañoarr);