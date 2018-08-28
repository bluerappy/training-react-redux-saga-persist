
export function axiosGetPosts() {
    return {
        type : AXIOS_GET_POSTS_REQUEST   
    };
}

export function axiosGetPostsById(id) {
    return {
        type : AXIOS_GET_POSTS_BY_ID_REQUEST,
        payload : {id},
    };
}

export function pushPostsByClick(){
    return {
        type : GET_POSTS_BY_CLICK,
    }
}

export const AXIOS_GET_POSTS_REQUEST  = 'AXIOS_GET_POSTS_REQUEST';
export const AXIOS_GET_POSTS_SUCCESS  = 'AXIOS_GET_POSTS_SUCCESS';
export const AXIOS_GET_POSTS_FAILURE = 'AXIOS_GET_POSTS_FAILURE';

export const AXIOS_GET_POSTS_BY_ID_REQUEST  = 'AXIOS_GET_POSTS_BY_ID_REQUEST';
export const AXIOS_GET_POSTS_BY_ID_SUCCESS  = 'AXIOS_GET_POSTS_BY_ID_SUCCESS';
export const AXIOS_GET_POSTS_BY_ID_FAILURE = 'AXIOS_GET_POSTS_BY_ID_FAILURE';

export const GET_POSTS_BY_CLICK = 'GET_POSTS_BY_CLICK'



