import { fetchPostsRequest, fetchPostsSuccess, fetchPostsError } from "../store/actions"

export const fetchPostsWithRedux = (dispatch) => (url) => {
    dispatch(fetchPostsRequest());
    return fetchPosts(url).then(([response, json]) =>{
        if(response.status === 200){
            dispatch(fetchPostsSuccess(json))
        }
        else{
            dispatch(fetchPostsError())
        }
    })
}

function fetchPosts(url) {
    const URL = url;
    return fetch(URL, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}