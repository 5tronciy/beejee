import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  currentTask: null,
  edit: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    makeVisible: (state, action) => {
      state.visible = true;
      state.currentTask = action.payload;
      if (action.payload) {
        state.edit = true;
      }
    },
    makeInvisible: (state) => initialState,
  },
});

export const { makeVisible, makeInvisible } = formSlice.actions;

export const selectFormVisibility = (state) => state.form.visible;

export default formSlice.reducer;
