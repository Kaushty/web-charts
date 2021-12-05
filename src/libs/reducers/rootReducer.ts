import { combineReducers } from "redux"

import { AppReducer } from "./appReducer"

const rootReducer = combineReducers({ appState: AppReducer })

export default rootReducer