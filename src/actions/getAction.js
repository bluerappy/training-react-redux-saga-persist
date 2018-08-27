
export function axiosGetPosts() {
    console.log("Action")
    return {
        type : AXIOS_GET_POSTS_REQUEST   
    };
}

export function axiosGetPostsById(id) {
    console.log("Action by id", id)
    return {
        type : AXIOS_GET_POSTS_BY_ID_REQUEST,
        payload : {id},
    };
}

export const AXIOS_GET_POSTS_REQUEST  = 'AXIOS_GET_POSTS_REQUEST';
export const AXIOS_GET_POSTS_SUCCESS  = 'AXIOS_GET_POSTS_SUCCESS';
export const AXIOS_GET_POSTS_FAILURE = 'AXIOS_GET_POSTS_FAILURE';

export const AXIOS_GET_POSTS_BY_ID_REQUEST  = 'AXIOS_GET_POSTS_BY_ID_REQUEST';
export const AXIOS_GET_POSTS_BY_ID_SUCCESS  = 'AXIOS_GET_POSTS_BY_ID_SUCCESS';
export const AXIOS_GET_POSTS_BY_ID_FAILURE = 'AXIOS_GET_POSTS_BY_ID_FAILURE';


