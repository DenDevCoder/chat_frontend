import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  chatId: string | null;
  exist: boolean | null;
}

const initialState: ChatState = {
  chatId: null,
  exist: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat(state, action: PayloadAction<ChatState>) {
      state.chatId = action.payload.chatId;
      state.exist = action.payload.exist;
    },
    cleanChat(state) {
      (state.chatId = null), (state.exist = null);
    },
  },
});

export const { setChat, cleanChat } = chatSlice.actions;
export default chatSlice.reducer;
