import { createSlice } from '@reduxjs/toolkit'

type navPosition = {
    top: string
}

export interface State{
    navbar: {
        open: boolean;
    } & navPosition,
    filter: {
        open: boolean;
    }
}

// type ActionType = Omit< PayloadAction<navPosition | false> , 'type'>
type ActionType<T = never> = {
    payload: boolean | T 
}

const initialState: State = {
    navbar: {open: false, top: '0'},
    filter: {open: false},
}

const modalsSlice = createSlice({
    name:'modalSlice',
    initialState,
    reducers: {
        switchNavOpen: (state, {payload}: ActionType<navPosition>) => {
            if(payload && typeof payload === 'object' && payload?.top) {
                state.navbar.open = !state.navbar.open
                state.navbar.top = payload.top
            } else if(payload === false) {
                state.navbar.open = false
                
            }
        },
        switchFilterOpen: (state, {payload} : ActionType<never>) => {
            if(payload !== undefined) {
                state.filter.open = payload
            } else {
                state.filter.open = !state.filter.open
            }
        }
    }
})

export const { switchNavOpen, switchFilterOpen } = modalsSlice.actions
export default modalsSlice.reducer
