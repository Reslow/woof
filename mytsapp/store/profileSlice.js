import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    presentation: "",
    bg: "",
    textColor: "",
    font: "",
  },

  reducers: {
    update(state, action) {
      state.presentation = action.payload.text;
      state.bg = action.payload.bgColor;
      state.textColor = action.payload.textColor;
      state.font = action.payload.font;
      state.userId = action.payload.userId;
    },
  },
});

export const { update } = profileSlice.actions;
export default profileSlice.reducer;
