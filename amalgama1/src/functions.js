export function findById(actualArray, id){
    //validaciones
    if(!Array.isArray(actualArray)){
        throw new Error('findById - The first parameter must be an array')
    }
    if(typeof id !== 'string' && typeof id !== 'number'){
        throw new Error('findById - The second parameter must be a string or a number')
    }
    //retornos
    const found=actualArray.find(element => element.id === id);
    if(found){
        return found;
    } 
    return 'not found';
}

export function truncate(sentence, length){
    //validaciones
    if(typeof sentence !== 'string'){
        throw new Error('truncate - The first parameter must be a string to truncate');
    }
    if(sentence.length === 0 || sentence.trim()===''){
        throw new Error("truncate - Sentence can't be empty");
    }
    if(typeof length !== 'number' || !Number.isInteger(length)){
        throw new Error(`truncate - Second parameter ${length} must be an integer number`);
    }
    if(length <= 0){
        throw new Error('truncate - Second parameter must be positive and more than 0');
    }
    //retornos
    if(sentence.length <= length){
        return sentence;
    }
    return sentence.substring(0, length);
    
}
