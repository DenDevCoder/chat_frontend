import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatInfoState {
  chatName: string | null;
  userId: string | null;
}

const initialState: ChatInfoState = {
  chatName: null,
  userId: null,
};

const chatInfoSlice = createSlice({
  name: "chatInfo",
  initialState,
  reducers: {
    setChatInfo(state, action: PayloadAction<ChatInfoState>) {
      state.chatName = action.payload.chatName;
      state.userId = action.payload.userId;
    },
    cleanChatInfo(state) {
      state.chatName = null;
      state.userId = null;
    },
  },
});

export const { setChatInfo, cleanChatInfo } = chatInfoSlice.actions;
export default chatInfoSlice.reducer;
