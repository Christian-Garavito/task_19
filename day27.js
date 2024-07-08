const compactObject = function(obj) {
    if(obj===null){
        return obj
    }
    if(typeof obj !== "object"){
        return obj
    }
    if(Array.isArray(obj)){
        return obj.filter(Boolean).map(compactObject)
    }

    const compacted ={}
    for(const key in obj){
        let value = compactObject(obj[key])
        if(value){
            compacted[key]=value
        }
    }
    return compacted
};
// ejemplo
const entrada = {
    a: 1,
    b: null,
    c: undefined,
    d: [0, 1, false, 2, '', 3],
    e: {
        f: false,
        g: 'hola',
        h: null,
        i: [null, 4, '', 5]
    }
};


const compacto = compactObject(entrada);
console.log(compacto);







