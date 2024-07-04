const expect = function(val) {
    obj ={
        toBe(val1){
            if(val === val1) return true
            else throw new Error("Not Equal")
        },
        notToBe(val1){
            if(val !== val1) return true
            else throw new Error("Equal")
        }
    }
    return obj
    
};

try{
    console.log(expect(5).toBe(5));
}catch(e){
    console.error(e.message)
}

try{
    console.log(expect(5).notToBe(3));
}catch(e){
    console.error(e.message)
}


