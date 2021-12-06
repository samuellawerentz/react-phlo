import { createSlice } from '@reduxjs/toolkit'

export const phloSlice = createSlice({
  name: 'root',
  initialState: {
    rightBarVisible: false,
    selectedComponent: null,
  },
  reducers: {
    setRightBarVisible: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.rightBarVisible = payload
    },
    setSelectedComponent: (state, { payload }) => {
      state.selectedComponent = payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRightBarVisible, setSelectedComponent } = phloSlice.actions

export default phloSlice.reducer
