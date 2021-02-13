const InitialState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const VehicleListReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "VEHICLE_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };

    case "VEHICLE_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Poxa, seu carro não foi encontrado.",
      };

    case "VEHICLE_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: action.payload,
      };

    default:
      return state;
  }
};

export default VehicleListReducer;
