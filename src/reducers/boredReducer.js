import { BORED_ADD,BORED_REMOVE } from "../actions/boredActions"

const initialState = {
    boreds: []
}

const reducer = (state=initialState,action) => {
    const varmiKontrol = (key) => {
        let kontrol = true;
        state.boreds.forEach(b => {
            if (b.key===key){
                kontrol=false
            }
        })
        return kontrol;
    }
    switch(action.type){
        case BORED_ADD:
            return{
                boreds: varmiKontrol(action.payload.key)
                ?
                [...state.boreds,action.payload]
                :
                state.boreds
            }
        case BORED_REMOVE:
            return{
                boreds:state.boreds.filter(b => (action.payload !== b["key"]))
            }
        default:
            return state;
    }
}
export default reducer;