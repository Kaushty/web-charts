import { AppState, IAction, ApiLoadingStatus, ChartData } from "../../common/models"
import { FETCH_CHART_DATA, FETCH_CHART_DATA_SUCCEEDED, FETCH_CHART_DATA_FAILED } from '../actions'
import { getRandomUid } from '../../common/utils'

const initialAppState: AppState = {
    data: [],
    loadingStatus: ApiLoadingStatus.NOT_STARTED,
}

export const AppReducer = (state = initialAppState, action: IAction): AppState => {
    switch (action.type) {
        case FETCH_CHART_DATA:
            return {
                data: [],
                loadingStatus: ApiLoadingStatus.STARTED
            }
        case FETCH_CHART_DATA_SUCCEEDED:
            const chartData: ChartData[] = []
            if (action.payload?.length) {
                (action.payload as Array<ChartData>).forEach((chart) => {
                    const uid = getRandomUid()
                    chartData.push({ ...chart, uid })
                })
            }
            return {
                data: chartData,
                loadingStatus: ApiLoadingStatus.SUCCEEDED
            }
        case FETCH_CHART_DATA_FAILED:
            return {
                data: [],
                error: action.payload,
                loadingStatus: ApiLoadingStatus.FAILED
            }
        default:
            return state
    }
}