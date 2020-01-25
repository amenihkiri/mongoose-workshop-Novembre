
const initialState={
    contacts:[]
}

const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case "GET-CONTACT":
            return {contacts:action.payload}
             default:
                 return state
    }
}
 export default Reducer