import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    presentation: undefined,
    bg: undefined,
    textColor: undefined,
    font: undefined,
  },

  reducers: {
    update(state, action) {
      console.log(action.payload);
      (state.presentation = action.payload.presentation),
        (state.bg = action.payload.bg),
        (state.textColor = action.payload.textColor),
        (state.font = action.payload.font);

      state.userId = action.payload.userId;
    },
  },
});

export const { update } = profileSlice.actions;
export default profileSlice.reducer;
