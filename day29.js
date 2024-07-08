const ArrayWrapper = function(nums) {
    this.array = nums
    
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.array.reduce((sum,num)=>(sum+num),0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return "["+this.array.join(",")+"]"
    
}


const nums = [1, 2, 3, 4];
const matrizEnvuelta = new ArrayWrapper(nums);


console.log(matrizEnvuelta + 0);       // Utiliza valueOf -> 10
console.log(String(matrizEnvuelta));   // Utiliza toString -> "[1,2,3,4]"
console.log(matrizEnvuelta.valueOf()); // Llama explícitamente a valueOf -> 10
console.log(matrizEnvuelta.toString());// Llama explícitamente a toString -> "[1,2,3,4]"




