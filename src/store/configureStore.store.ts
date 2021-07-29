import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers'

export const store = configureStore({
    reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof reducer>
