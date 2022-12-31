export const DOG_ADD = "DOG_ADD";
export const DOG_REMOVE = "DOG_REMOVE";


export const dogAdd = (d)=>{
    return({type: DOG_ADD, payload:d});
}

export const dogRemove = (message)=>{
    return({type: DOG_REMOVE, payload:message});
}
