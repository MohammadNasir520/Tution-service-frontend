import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    open: boolean
}

const initialState: IInitialState = {
    open: false
}

const drawerSlice = createSlice({
    name: "sideBar",
    initialState,
    reducers: {
        showDrawer: (state) => {
            state.open = true
        },
        closeDrawer: (state) => {
            state.open = false
        }
    }
})

export const { showDrawer, closeDrawer } = drawerSlice.actions
export default drawerSlice.reducer