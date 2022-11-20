import { configureStore } from '@reduxjs/toolkit'
import rightSlice from '../features/rightSlice'
import leftSlice from '../features/leftSlice'
import animalSlice from '../features/animalSlice'

export const store = configureStore({
  reducer: {
    right: rightSlice,
    left: leftSlice,
    animal: animalSlice,
  },
})