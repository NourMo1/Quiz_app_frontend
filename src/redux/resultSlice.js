import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: {
    username: "",
    result: [],
    earnPoints: 0
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEarnPoints: (state, action) => {
      state.earnPoints = action.payload
    },
    pushResult: (state, action) => {
      state.result.push(action.payload);
    },
    updateResult: (state, action) => {
      const { trace, answer } = action.payload;
      state.result[trace] = answer;
    },
    resetResultActions: () => {
      return {
        username: "",
        result: [],
      }
    },
  },
});

export const { setUsername, setEarnPoints, pushResult, updateResult, resetResultActions } = resultSlice.actions;
export default resultSlice.reducer;