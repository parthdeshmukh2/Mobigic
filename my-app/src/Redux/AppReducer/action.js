import * as types from "./actionTypes";
import axios from "axios";

export const getData = (token) => (dispatch) =>  {
    dispatch({type:types.GET_DATA_REQUEST});

    axios
    .get("http://localhost:8080/project", {
      headers:{
        "token": "Bearer " + token,
        "Content-type":'application/json'
      },

    })
    .then((res) =>
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_DATA_FAILURE }));
}

export const postData = (body, token) => (dispatch)  => {
    dispatch({type:types.POST_DATA_REQUEST});
//  console.log(body);
//  console.log(token);
    axios
    .post("http://localhost:8080/project/post", body, {
      headers: {
        token: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res)=> {
        console.log(res);
        dispatch({type:types.POST_DATA_SUCCESS })
        console.log({type:types.GET_DATA_SUCCESS});
        alert("Posted Successfully")
    })
    .catch((err)=> dispatch({type:types.POST_DATA_FAILURE}))
}

export const deleteData = (id, token) => (dispatch) => {
  dispatch({type:types.DELETE_DATA_REQUEST});

  console.log(id);

  axios.delete(`http://localhost:8080/project/delete/${id}`, {
    headers:{
        "token": "Bearer " + token,
        "Content-type":'application/json'
      },
})
.then((res)=> dispatch({type:types.DELETE_DATA_SUCCESS}))
.then((res)=> alert("Deleted SuccessFully"))
.catch((err)=> dispatch({type:types.DELETE_DATA_FAILURE}));
}