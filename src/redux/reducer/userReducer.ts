import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UProps {
  token: string | null;
}
const initialState: UProps = {
  token: null,
};
const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    updateToken(state: UProps, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
  },
});
export const {
  updateToken,
} = userSlice.actions;

export default userSlice.reducer;
