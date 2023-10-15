import { api } from "./api/apiSlice";
import sideBarslice from "./features/sideBarslice";


export const rootReducer = {
    sidebar: sideBarslice,

    [api.reducerPath]: api.reducer
}