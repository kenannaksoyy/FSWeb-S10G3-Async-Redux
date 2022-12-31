import { DOG_ADD,DOG_REMOVE } from "../actions/dogActions"

const initialState = {
    dogs: []
}

const reducer = (state=initialState,action) => {
    const varmiKontrol = (message) => {
        let kontrol = true;
        state.dogs.forEach(d => {
            if (d.message===message){
                kontrol=false
            }
        })
        return kontrol;
    }
    switch(action.type){
        case DOG_ADD:
            return{
                dogs: varmiKontrol(action.payload.message)
                ?
                [...state.dogs,action.payload]
                :
                state.dogs
            }
        case DOG_REMOVE:
            return{
                dogs:state.dogs.filter(d => (action.payload !== d["message"]))
            }
        default:
            return state;
    }
}
export default reducer;