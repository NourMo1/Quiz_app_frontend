import { createSlice } from '@reduxjs/toolkit'

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startQuiz: (state, action) => {
      let {questions, answers} = action.payload
      return { ...state, questions, answers };
    },
    nextQuestion: (state) => {
      return { ...state, trace: state.trace + 1 };
    },
    prevQuestion: (state) => {
      return { ...state, trace: state.trace - 1 };
    },
    resetQeustionActions: () => {
      return {
        questions: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export const { startQuiz, nextQuestion, prevQuestion, resetQeustionActions } = questionsSlice.actions;
export default questionsSlice.reducer