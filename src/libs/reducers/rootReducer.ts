import { combineReducers } from "redux"

import { AppReducer } from "./appReducer"

const rootReducer = combineReducers({ appState: AppReducer })

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer