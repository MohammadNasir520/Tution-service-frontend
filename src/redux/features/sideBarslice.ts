import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    open: boolean
}

const initialState: IInitialState = {
    open: false
}

const sideBareSlice = createSlice({
    name: "sideBar",
    initialState,
    reducers: {
        showSideBar: (state) => {
            state.open = true
        },
        closeSidebar: (state) => {
            state.open = false
        }
    }
})

export const { showSideBar, closeSidebar } = sideBareSlice.actions
export default sideBareSlice.reducer