import * as types from "./actionTypes";
import axios from "axios";

// Function to get all the data of a particular user.
export const getData = (token) => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });

  axios
    .get("http://localhost:8080/project", {
      headers: {
        token: "Bearer " + token,
        "Content-type": "application/json",
      },
    })
    .then((res) =>
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_DATA_FAILURE }));
};

//Function for posting a data for a specific user.
export const postData = (body, token, setImage, setTitle) => (dispatch) => {
  dispatch({ type: types.POST_DATA_REQUEST });
  console.log(body);
  let config = {
    method: "post",
    url: "http://localhost:8080/project/post",
    headers: {
      token: `bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    data: body,
  };

  return axios(config)
    .then((res) => {
      dispatch({ type: types.POST_DATA_SUCCESS });
      alert("Data Posted SuccessFully");
      alert("Click on Profile To View Images");
      setImage("");
      setTitle("");
    })

    .catch((err) => dispatch({ type: types.POST_DATA_FAILURE }));
};

// Function for deleting an Item if it is present in the user's account.
export const deleteData = (id, token) => (dispatch) => {
  dispatch({ type: types.DELETE_DATA_REQUEST });

  console.log(id);

  axios
    .delete(`http://localhost:8080/project/delete/${id}`, {
      headers: {
        token: "Bearer " + token,
        "Content-type": "application/json",
      },
    })
    .then((res) => dispatch({ type: types.DELETE_DATA_SUCCESS }))
    .then((res) => alert("Deleted SuccessFully"))
    .catch((err) => dispatch({ type: types.DELETE_DATA_FAILURE }));
};
