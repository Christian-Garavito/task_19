const timeLimit = function (fn, t) {

    return async function (...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => { reject("Time Limit Exceeded") }, t);

            fn(...args).then(resolve).catch(reject);
        })

    }
};

// ejemplo
const ejemploFuncion = async (x) => {
    return new Promise((resolve) => setTimeout(() => resolve(x*x), 3000))
};

const limiteTimepo = timeLimit(ejemploFuncion, 4000);

limiteTimepo(2)
    .then(resultado => console.log("resultado: ", resultado))
    .catch(error => console.log("Error: ", error));
