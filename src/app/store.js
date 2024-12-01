import { configureStore } from '@reduxjs/toolkit'
import rightSlice from '../features/rightSlice'
import leftSlice from '../features/leftSlice'
import animalSlice from '../features/animalSlice'
import inventorySlice from '../features/inventorySlice'
import storeSlice from '../features/storeSlice'
import forestSlice from '../features/forestSlice'

export const store = configureStore({
  reducer: {
    right: rightSlice,
    left: leftSlice,
    animal: animalSlice,
    inventory: inventorySlice,
    store: storeSlice,
    forest: forestSlice,
  },
})