import { Pages } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateTypes {
  navigating: boolean;
  currentPage: Pages;
  navigateTo: Pages;
}

const initialState: InitialStateTypes = {
  navigating: true,
  currentPage: "About",
  navigateTo: "About",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    navigate(state, action: PayloadAction<Pages>) {
      state.navigating = true;
      state.navigateTo = action.payload;
    },
    finishNavigation(state) {
      state.currentPage = state.navigateTo;
      state.navigating = false;
    },
  },
});

export const { finishNavigation, navigate } = navigationSlice.actions;
export default navigationSlice.reducer;
