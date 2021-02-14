import { configureStore } from "@reduxjs/toolkit";
import positionListReducer from "./Reducers/positionListReducer";
import vehicleListReducer from "./Reducers/vehicleListReducer";

export default configureStore({
  reducer: {
    vehicleListReducer: vehicleListReducer,
    positionListReducer: positionListReducer,
  },
});
