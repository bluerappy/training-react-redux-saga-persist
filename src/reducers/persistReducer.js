
function getHistory(state, action) {
    let newItem = true;
    let newList = [...state];
    newList.find(x => {if(x.id === action.payload.id) newItem = false});
    if (newItem) newList.push(action.payload);
    return newList
}

const initialState2 = {listByClick : []}
export default function( state = initialState2, action) {
    switch(action.type) {
        case 'AXIOS_GET_POSTS_BY_ID_SUCCESS':
          return getHistory(state, action)
        default: return state;
    }
    
}