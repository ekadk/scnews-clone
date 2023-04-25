import { POST_FETCH_ALL_SUCCESS, POST_FETCH_ONE_SUCCESS } from "./actionTypes";

const baseUrl = "https://scnews-server.foxhub.space/pub";

export function fetchPosts() {
  return (dispatch) => {
    return fetch(baseUrl + "/posts")
      .then((response) => {
        if (!response.ok) throw { name: "fetch_post_error" };
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: POST_FETCH_ALL_SUCCESS,
          payload: data.posts,
        });
        return data.posts;
      });
  };
}

export function fetchPostsById(id) {
  return (dispatch) => {
    return fetch(baseUrl + '/posts/' + id).then(response => {
      if(!response.ok) throw { name: "fetch_post_by_id_error"}
      return response.json()
    }).then((data) => {
      dispatch({
        type: POST_FETCH_ONE_SUCCESS,
        payload: data.post
      })
      return data.post
    })
  }
}

export function fetchCategories() {}
