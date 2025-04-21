import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { post } from "@/utils/request";

type Token = string;
type Infos = {
  [index: string]: unknown;
};
type UsersState = {
  token: Token;
  infos: Infos;
};
type Login = {
  username: string;
  password: string;
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    token: "",
    infos: {},
  } as UsersState,
  reducers: {
    updateToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    updateInfos(state, action: PayloadAction<Infos>) {
      state.infos = action.payload;
    },
    clearToken(state) {
      state.token = "";
    },
  },
});

// 导出同步方法
export const { updateToken, updateInfos, clearToken } = usersSlice.actions;

// 导出异步方法
export const loginAction = createAsyncThunk(
  "users/loginAction",
  async (payload: Login) => {
    const response = await post({ url: "/api/auth/login", data: payload });
    return response;
  }
);

export default usersSlice.reducer;
