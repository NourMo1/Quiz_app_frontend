import { configureStore } from '@reduxjs/toolkit'
import questionsSlice from './questionsSlice'
import resultSlice from './resultSlice'

const store = configureStore({
  reducer: {
    questions: questionsSlice,
    result: resultSlice,
  },

})

export default store