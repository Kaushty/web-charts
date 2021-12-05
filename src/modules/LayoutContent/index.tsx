import React, { useEffect, useState } from 'react';
import { Row, Col, Spin } from 'antd';

import './styles.css';
import ChartCard from '../../common/components/card';

function LayoutContent() {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<
    { type: string; elements: any[] }[]
  >([]);

  const fetchChartData = async () => {
    try {
      const response = await fetch(
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json'
      );
      if (response.ok) {
        const result = await response.json();
        //   dispatch successfully action
        setChartData(result);
      } else {
        //   dispatch failure action
      }
    } catch (error) {
      console.log('Error: Fetching Data. ', error);
    } finally {
      setLoading(false);
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
      {!loading && (
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
