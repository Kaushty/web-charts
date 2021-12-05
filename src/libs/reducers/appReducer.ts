interface IAction {
    type: string;
    payload: any
}

interface AppState {
    data: any[];
    loadingStatus: string;
    error?: Error
}

const initialAppState: AppState = {
    data: [],
    loadingStatus: "NOT_STARTED",
}

export const AppReducer = (state = initialAppState, action: IAction) => {
    return state
}