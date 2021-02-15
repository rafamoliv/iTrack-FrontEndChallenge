const initialState = {
  positions: [],
  loading: false,
  errorMsg: "",
};

export const ActionTypes = {
  POSITION_LIST_FAIL: "POSITION_LIST_FAIL",
  POSITION_LIST_LOADING: "POSITION_LIST_LOADING",
  POSITION_LIST_SUCCESS: "POSITION_LIST_SUCCESS",
};

export const ActionCreators = {
  positionListFail: (payload) => ({ type: ActionTypes.POSITION_LIST_FAIL, payload }),
  positionListLoading: (payload) => ({ type: ActionTypes.POSITION_LIST_LOADING, payload }),
  positionListSuccess: (payload) => ({ type: ActionTypes.POSITION_LIST_SUCCESS, payload }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.POSITION_LIST_LOADING:
      return { ...state, loading: true, errorMsg: "" };

    case ActionTypes.POSITION_LIST_FAIL:
      return { ...state, loading: true, errorMsg: "Poxa, seu carro não foi encontrado." };

    case ActionTypes.POSITION_LIST_SUCCESS:
      return { ...state, positions: [...action.payload] };

    default:
      return state;
  }
};
