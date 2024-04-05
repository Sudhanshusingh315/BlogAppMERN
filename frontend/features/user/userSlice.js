import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authUser } from "./userAPI";
export const userAuth = createAsyncThunk(
  "users/useAuth",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await authUser(userCredentials);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  isLoading: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut:(state) =>{
      state.userInfo = null;
      localStorage.removeItem("userInfo");

    }
  },
  extraReducers: (builder) => {
    builder.addCase(userAuth.fulfilled, (state, action) => {
      console.log("accepted value",action.payload)
      if(action.payload){
        localStorage.setItem("userInfo",JSON.stringify(action.payload));
      }
      state.userInfo = action.payload;
      state.isLoading = false;
      state.error = null;
    }).addCase(userAuth.pending,(state)=>{
      state.isLoading = true
      state.error = null
    }).addCase(userAuth.rejected,(state,action)=>{
      console.log("rejected Error ",action.payload)
      state.userInfo = null
      state.isLoading = false
      state.error = action.payload.Error;
    })
  },
});

// Action creators are generated for each case reducer function
export const { logOut } = userSlice.actions;

export default userSlice.reducer;
