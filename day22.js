Array.prototype.last = function() {
    if(this.length == 0){
        return -1;
    }
    return this[this.length-1]
    
};

let array1 = [1, 2, 3, 4, 5];
let array2 = [];
let array3 = ['a', 'b', 'c'];


console.log(array1.last()); // 5
console.log(array2.last()); // -1
console.log(array3.last()); // 'c'







