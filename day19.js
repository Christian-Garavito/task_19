const promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        let res = Array(functions.length)
        let waitingFor = functions.length

        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then((result) => {
                    res[i] = result;
                    waitingFor--
                    if (waitingFor === 0) resolve(res)
                }).catch(reject)
        }
    })

};

const promise1 = () => new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = () => new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = () => new Promise((resolve,) => setTimeout(() => resolve(3), 3000));
//const promise4 = () => new Promise((resolve,reject) => setTimeout(() => reject("error"), 3000));

// usar pormesa 
promiseAll([promise1, promise2, promise3]).then((result) => {
    console.log(result); // [1,2,3] despues de 3 seg
}).catch((error) => {
    console.error(error);
});