import unsplash from "../../api/unsplashapi";

const unsplashActions = {
  FETCH_PICTURES_SUCCESS: "FETCH_PICTURES-SUCCESS",

  fetchPictures: (query, page) => {
    return function (dispatch) {
      unsplash
        .get("/search/photos", {
          params: { query: query, per_page: 20, page: page },
        })
        .then(({ data }) =>
          dispatch(unsplashActions.fetchPicturesSuccess(data))
        );
    };
  },

  fetchPicturesSuccess: (data) => ({
    type: unsplashActions.FETCH_PICTURES_SUCCESS,
    payload: data,
  }),
};

export default unsplashActions;
