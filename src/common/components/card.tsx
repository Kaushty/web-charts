import React from 'react';
import { Card } from 'antd';
import { EditOutlined, ExpandOutlined } from '@ant-design/icons';

import Chart from './chart';

function ChartCard(props: any) {
  console.log('Rest', props);
  return (
    <Card
      cover={<Chart type={props.type} data={props.data} />}
      hoverable={true}
      style={{ width: '100%', height: 528 }}
      actions={[<EditOutlined key="edit" />, <ExpandOutlined key="expand" />]}
    >
      <Card.Meta title={`${props.type} Chart`} />
    </Card>
  );
}

export default ChartCard;
