import * as types from "./actionTypes";

const initialState = {
    profileData : [],
    isLoading:false,
    isError:false
}

export const reducer = (state = initialState, action) => {

    const {type, payload} = action;

    switch(type){
        default: return state;
    }
}