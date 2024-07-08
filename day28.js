class EventEmitter {

    constructor(){
        this.events={};
    }

    subscribe(eventName, callback) {

        if(!this.events[eventName]){
            this.events[eventName]=[]
        }
        this.events[eventName].push(callback)
        
        return {
            unsubscribe: () => {
                
                this.events[eventName]=this.events[eventName].filter(cb=>cb !== callback)
                if(this.events[eventName].length===0){
                    delete this.events[eventName]
                }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if(!this.events[eventName]){
            return []
        }

        return this.events[eventName].map(callback => callback(...args))
        
    }
}

const emitter = new EventEmitter();


const subscription1 = emitter.subscribe('event1', (arg1, arg2) => {
    console.log(`Callback 1: ${arg1}, ${arg2}`);
    return 'Callback 1 result';
});


const subscription2 = emitter.subscribe('event1', (arg1, arg2) => {
    console.log(`Callback 2: ${arg1}, ${arg2}`);
    return 'Callback 2 result';
});

// ejemplo 
console.log(emitter.emit('event1', [10, 20])); // Llama a los callbacks suscritos 
                                               //y devuelve sus resultados


subscription1.unsubscribe(); // Cancelar suscripción de callback1


console.log(emitter.emit('event1', [30, 40])); // Llama solo a callback2


subscription2.unsubscribe(); // Cancelar suscripción de callback2


console.log(emitter.emit('event1', [50, 60])); // No hay suscriptores, devuelve []




