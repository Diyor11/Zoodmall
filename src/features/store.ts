import { configureStore } from '@reduxjs/toolkit'
import modals from './modalsSlice/modalsSlice'

const store = configureStore({
    reducer: {
        modals
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch