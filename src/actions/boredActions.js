export const BORED_ADD = "BORED_ADD";
export const BORED_REMOVE = "BORED_REMOVE";


export const boredAdd = (b)=>{
    return({type: BORED_ADD, payload:b});
}

export const boredRemove = (key)=>{
    return({type: BORED_REMOVE, payload:key});
}
