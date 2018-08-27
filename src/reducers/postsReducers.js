
const initialState = {list : []}
export default function( state = initialState, action) {
    switch(action.type) {
        case 'AXIOS_GET_POSTS_SUCCESS':
          return {...state, 
        list : action.payload}
        default: return state;
    }
    
}
