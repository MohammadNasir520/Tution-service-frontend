import { api } from "./api/apiSlice";
import sideBarslice from "./features/sideBarslice";
import userSlice from "./features/userSlice";

export const rootReducer = {
    sidebar: sideBarslice,
    user:userSlice,
    [api.reducerPath]: api.reducer
}