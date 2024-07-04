const createCounter = function(n) {
    
    return function() {
        return n++;
        
    };
};

const contador = createCounter(10);

console.log(contador()); //11
console.log(contador());// 12
console.log(contador());//13
