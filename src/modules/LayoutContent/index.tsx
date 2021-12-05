import React, { useEffect, useState } from 'react';
import { Row, Col, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import ChartCard from '../../common/components/card';
import {
  fetchChartDataSucceeded,
  fetchChartDataFailed,
} from '../../libs/actions';
import { RootState } from '../../libs/reducers/rootReducer';
import { ApiLoadingStatus, ChartData } from '../../common/models';

function LayoutContent() {
  const dispatch = useDispatch();
  const appState = useSelector((state: RootState) => state.appState);
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const loading = appState.loadingStatus === ApiLoadingStatus.STARTED;

  const fetchChartData = async () => {
    dispatch(fetchChartData());
    try {
      const response = await fetch(
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json'
      );
      const result = await response.json();
      if (response.ok) {
        dispatch(fetchChartDataSucceeded(result));
        setChartData(result);
      } else {
        dispatch(fetchChartDataFailed(result));
      }
    } catch (error) {
      dispatch(fetchChartDataFailed(error as Error));
      console.log('Error: Fetching Data. ', error);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  if (loading) {
    return (
      <div className="Layout__Grid--loading">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="Layout__Grid">
      {!loading && appState.data.length && (
        <Row align="middle" justify="center" gutter={[16, 24]}>
          {chartData.map((chart) => {
            return (
              <Col span={6} xs={20} sm={16} md={11} lg={10} xl={10}>
                <ChartCard type={chart.type} data={chart.elements} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
}

export default LayoutContent;
