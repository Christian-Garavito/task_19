function createHelloWorld(){
    function f(){
        
        return "Hello World"   
    }
    return f
    
} 
const mirar = createHelloWorld();
console.log(mirar())
