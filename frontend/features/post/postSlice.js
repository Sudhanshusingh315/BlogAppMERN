import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPost } from "./postAPI"; 
// todo: createing[done], reading,updating,deleting  -> all needs to be done with thunk
// creating the post
export const postCreation = createAsyncThunk(
  "post/postCreation",
  async (postData, { rejectWithValue }) => {
    try {
        console.log("inside the thunk")
      const response = await createPost(postData);
      console.log("created the post and response",response);
      return response.data;
    } catch (err) {
        console.log("rejected value", err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);
const initialState = {
  postLoading: null,
  postError: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCreation.fulfilled, (state, action) => {})
      .addCase(postCreation.pending, (state) => {})
      .addCase(postCreation.rejected, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function

export default postSlice.reducer;
