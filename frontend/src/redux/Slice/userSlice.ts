import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from "@supabase/supabase-js";

interface UserState {
  user: Session | null;
  username: string;
}

const initialState: UserState = {
  user: null,
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.user = action.payload.user;
      state.username = action.payload.username;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
