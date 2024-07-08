class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value
        
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value
        return this
        
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value
        return this
        
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value
        return this
        
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value === 0){
            throw new Error("Division by zero is not allowed");
        }

        this.result /= value
        return this
        
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value
        return this
        
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result
        
    }
}


// ejemplo 


const calculator = new Calculator(10);


const result = calculator
    .add(5)        // 10 + 5 = 15
    .subtract(3)   // 15 - 3 = 12
    .multiply(2)   // 12 * 2 = 24
    .divide(4)     // 24 / 4 = 6
    .power(2)      // 6 ^ 2 = 36
    .getResult();  // Obtener el resultado final


console.log(result); // Imprime 36




