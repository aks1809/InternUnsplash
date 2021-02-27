import actions from "./actions";

const initState = {
  imageList: null,
};

const unsplashReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.FETCH_PICTURES_SUCCESS:
      return {
        ...state,
        imageList: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default unsplashReducer;
