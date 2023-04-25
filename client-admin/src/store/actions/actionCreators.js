import { redirect, useNavigate } from "react-router-dom";
import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT_SUCCESS,
  CATEGORIES_FETCH_ALL_SUCCESS,
  CATEGORIES_FETCH_ONE_SUCCESS,
  LOADING_START,
  LOADING_STOP,
  POST_FETCH_ALL_SUCCESS,
  POST_FETCH_ONE_SUCCESS,
} from "./actionTypes";
const baseUrl = "https://scnews-server.foxhub.space";

// User
export function login(loginForm) {
  return (dispatch) => {
    return fetch(baseUrl + "/admin/login", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    })
      .then((response) => {
        if (!response.ok) throw { name: "login_error" };
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: ADMIN_LOGIN_SUCCESS,
          payload: true,
        });
        return data.access_token;
      });
  };
}

export function register(registerForm) {
  return (dispatch) => {
    return fetch(baseUrl + "/admin/register", {
      method: "POST",
      headers: {
        access_token: localStorage.access_token,
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerForm),
    }).then((response) => {
      if (!response.ok) throw { name: "user_register_error" };
      return response.json();
    });
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem("access_token");
    dispatch({
      type: ADMIN_LOGOUT_SUCCESS,
      payload: false,
    });
  };
}

// Posts
export function fetchPosts() {
  return (dispatch) => {
    return fetch(baseUrl + "/posts", {
      method: "GET",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        if (!response.ok) throw { name: "fetch_all_post_error" };
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: POST_FETCH_ALL_SUCCESS,
          payload: data.posts,
        });
        return data;
      })
      .catch((err) => console.log(err))
  };
}

export function fetchPostById(id) {
  return (dispatch) => {
    return fetch(baseUrl + `/posts/${id}`, {
      method: "GET",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        if (!response.ok) throw { name: "post_not_found" };
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let currentTags = data.post.Tags.map((el) => {
          return el.name;
        }).join(", ");

        data.post.Tags = currentTags;

        dispatch({
          type: POST_FETCH_ONE_SUCCESS,
          payload: data.post,
        });
        return data;
      })
      .catch((err) => console.log(err));
  };
}

export function addPost(postForm) {
  return (dispatch) => {
    return fetch(baseUrl + "/posts", {
      method: "POST",
      headers: {
        access_token: localStorage.access_token,
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postForm),
    }).then((response) => {
      if (!response.ok) throw { name: "new_post_error" };
      return response.json();
    });
  };
}

export function updatePost(postForm, id) {
  return (dispatch) => {
    return fetch(baseUrl + "/posts/" + id, {
      method: "PUT",
      headers: {
        access_token: localStorage.access_token,
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postForm),
    }).then((response) => {
      if (!response.ok) throw { name: "update_post_error" };
      return response.json();
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    return fetch(baseUrl + "/posts/" + id, {
      method: "DELETE",
      headers: {
        access_token: localStorage.access_token,
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw { name: "delete_post_error" };
        return response.json();
      })
      .then(() => {
        return dispatch(fetchPosts());
      });
  };
}

// Categories
export function fetchCategories() {
  return (dispatch) => {
    return fetch(baseUrl + "/categories", {
      method: "GET",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        if (!response.ok) throw { name: "fetch_categories_error" };
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: CATEGORIES_FETCH_ALL_SUCCESS,
          payload: data.categories,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function fetchCategoryById(id) {
  return (dispatch) => {
    return fetch(baseUrl + "/categories/" + id, {
      method: "GET",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        if (!response.ok) throw { name: "categories_fetch_one_error" };
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: CATEGORIES_FETCH_ONE_SUCCESS,
          payload: data.category,
        });
        return data.category;
      });
  };
}

export function addCategory(form) {
  return (dispatch) => {
    return fetch(baseUrl + "/categories", {
      method: "POST",
      headers: {
        access_token: localStorage.access_token,
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      if (!response.ok) throw { name: "add_category_error" };
      return response.json();
    });
  };
}

export function deleteCategory(id) {
  return (dispatch) => {
    return fetch(baseUrl + "/categories/" + id, {
      method: "DELETE",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        if (!response.ok) throw { name: "delete_category_error" };
        return response.json();
      })
      .then(() => {
        dispatch(fetchCategories());
      });
  };
}

export function updateCategory(form, id) {
  return (dispatch) => {
    return fetch(baseUrl + "/categories/" + id, {
      method: "PUT",
      headers: {
        access_token: localStorage.access_token,
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) throw { name: "update_category_error" };
        return response.json();
      })
      .then(() => {
        dispatch(fetchCategories());
      });
  };
}

export function loadingStart() {
  return (dispatch) => {
    dispatch({
      type: LOADING_START
    })
  }
}

export function loadingStop() {
  return (dispatch) => {
    dispatch({
      type: LOADING_STOP
    })
  }
}