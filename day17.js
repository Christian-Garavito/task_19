class TimeLimitedCache{
    constructor(){
        this.cache= new Map();
    }
    set(key,value,duration){

        const alreadyExists = this.cache.get(key);
        if(alreadyExists)
        {
            clearTimeout(alreadyExists.timeoutId);
        }

        const timeoutId = setTimeout(()=>{
            this.cache.delete(key);
        },duration);

        this.cache.set(key,{value,timeoutId});
        return Boolean(alreadyExists)
    }
    get(key){
        if(this.cache.has(key)){
            return this.cache.get(key).value;
        }
        return -1;
    }
    count(){
        return this.cache.size;
    }
}

const cache = new TimeLimitedCache();

console.log(cache.set(1,42,1000));
console.log(cache.get(1));

setTimeout(()=>{
    console.log(cache.get(1));
    console.log(cache.count());
},1500);

console.log(cache.set(1,42,1000));
console.log(cache.set(1,43,3000));
console.log(cache.get(1));

setTimeout(()=>{
    console.log(cache.get(1));
},1500);

setTimeout(()=>{
    console.log(cache.get(1));
    console.log(cache.count());
},2500);