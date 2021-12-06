import { configureStore } from '@reduxjs/toolkit'
import phloReducer from './rootSlice'

export default configureStore({
  reducer: {
    phlo: phloReducer,
  },
})
