import axios from "axios";

import * as types from "./actionTypes";

export const userLogin = (body, navigate) => (dispatch) => {
  dispatch({ type: types.GET_LOGIN_REQUEST });

  axios
    .post("http://localhost:8080/user/login", body)
    .then((res) => {
      dispatch({ type: types.GET_LOGIN_SUCCESS, payload: res.data });
      alert("Login SuccessFull");
      navigate("/");
    })
    .catch((err) => {
      dispatch({ type: types.GET_LOGIN_FAILURE });
      console.log(err);
    });
};
