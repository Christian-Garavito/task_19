Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item)=>{
        const key = fn(item)

          if(!grouped[key]){
            grouped[key]=[];
          }

           grouped[key].push(item)

           return grouped
    },{})
};

// Ejemplo

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerospares = numeros.groupBy(num => (num % 2 === 0 ? 'par' : 'impar'));

console.log(numerospares);







