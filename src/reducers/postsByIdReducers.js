
const initialState2 = {listByID : []}
export default function( state = initialState2, action) {
    switch(action.type) {
        case 'AXIOS_GET_POSTS_BY_ID_SUCCESS':
          return {...state, 
        listById : action.payload}
        default: return state;
    }
    
}