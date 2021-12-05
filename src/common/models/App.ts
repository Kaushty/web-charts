export enum ApiLoadingStatus {
    NOT_STARTED = 'NOT_STARTED',
    STARTED = 'STARTED',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED'
}

export interface IAction {
    type: string;
    payload: any
}

export interface AppState {
    data: Array<ChartData>;
    loadingStatus: ApiLoadingStatus;
    error?: Error
}

export interface ChartData {
    type: 'Bar' | 'Pie',
    elements: Array<Number>,
    uid?: string
}
