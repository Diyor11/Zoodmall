import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type navPosition = {
    top: string
}

export interface State{
    navOpen: boolean;
    navPosition: navPosition
}

const initialState: State = {
    navOpen: false,
    navPosition: {top: '0'}
}

const modalsSlice = createSlice({
    name:'modalSlice',
    initialState,
    reducers: {
        switchNavOpen: (state, {payload}: PayloadAction<navPosition>) => {
            if(state.navOpen) {
                state.navOpen = false
            } else {
                state.navOpen = true
                state.navPosition.top = payload.top
            }
        }
    }
})

export const { switchNavOpen } = modalsSlice.actions
export default modalsSlice.reducer
