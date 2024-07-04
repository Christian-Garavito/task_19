const createCounter = function(init) {
    const n = init
    const obj ={
        increment(){
            return init +=1

        },
        decrement(){
            return init -=1

        },
        reset(){
            return init = n 

        }
    }
    return obj
};

console.log(createCounter(5).increment());
console.log(createCounter(5).reset());
console.log(createCounter(5).decrement());

