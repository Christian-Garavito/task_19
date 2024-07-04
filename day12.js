const addTwoPromises = async function (promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2])

    return val1 + val2

};

// ejemplo de promesa que se resuelve en un tiempo espesifico 
function espera(ms) {
    return new Promise(resolver => setTimeout(resolver, ms));
}

async function ejemplo(){
    const promise1 = espera(1000).then(()=>10);
    const promise2 = espera(2000).then(()=>20);

    const resultado = await addTwoPromises(promise1,promise2);
    console.log(resultado);
}
ejemplo();
