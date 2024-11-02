import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const tabSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    home: (state) => {
      state.value = 1
    },
    resume: (state) => {
      state.value = 2
    },
    about: (state) => {
      state.value = 3
    },
  },
})

export const { home, resume, about } = tabSlice.actions
export default tabSlice.reducer