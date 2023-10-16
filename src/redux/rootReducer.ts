import { api } from "./api/baseApi";
import sideBarslice from "./features/sideBarslice";


export const rootReducer = {
    sidebar: sideBarslice,

    [api.reducerPath]: api.reducer
}