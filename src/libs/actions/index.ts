import { ChartData } from "../../common/models"

export const FETCH_CHART_DATA = 'FETCH_CHART_DATA'
export const FETCH_CHART_DATA_SUCCEEDED = 'FETCH_CHART_DATA_SUCCEEDED'
export const FETCH_CHART_DATA_FAILED = 'FETCH_CHART_DATA_FAILED'


export const fetchChartData = () => ({
    type: FETCH_CHART_DATA,
})


export const fetchChartDataSucceeded = (payload: ChartData[]) => ({
    type: FETCH_CHART_DATA_SUCCEEDED,
    payload
})


export const fetchChartDataFailed = (error: Error) => ({
    type: FETCH_CHART_DATA_FAILED,
    payload: error
})