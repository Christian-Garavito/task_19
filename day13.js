async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
}

async function ejemplo() {
    console.log("inicio");
    await sleep(2000);
    console.log("Pasaron 2 segundos");
    await sleep(1000);
    console.log("Paso 1 segundo")

}
ejemplo();