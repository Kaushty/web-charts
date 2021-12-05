import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Pie,
  PieChart,
} from 'recharts';

function Chart({ type, data }: { type: string; data: any[] }) {
  const chartData = data.map((element, index) => ({
    name: `Element ${index + 1}`,
    value: element,
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="Chart_Cover">
      <>
        {type === 'Bar' && (
          <ResponsiveContainer width={'90%'} height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        )}
        {type === 'Pie' && (
          <ResponsiveContainer width={'100%'} height={400}>
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        )}
      </>
    </div>
  );
}

export default Chart;
