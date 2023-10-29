import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {useSelector} from 'react-redux';
const LiveChart = () => {
  // Generating dummy data for the chart
  const hello = useSelector((state) => state.hello);
  const generateData = (start, end, interval) => {
    const data = [];
    for (let i = start; i <= end; i += interval) {
      const randomValue = Math.random() * 100;
      randomValue.toFixed(2);
      data.push({ x: i, y: randomValue });
    }
    return data;
  };
  const currentDate = Date.now();

const dayData = generateData(currentDate - 24 * 60 * 60 * 1000, currentDate, 60 * 1000); // 24 hours data
const weekData = generateData(currentDate - 7 * 24 * 60 * 60 * 1000, currentDate, 4 * 60 * 60 * 1000); // 7 days data
const monthData = generateData(currentDate - 30 * 24 * 60 * 60 * 1000, currentDate, 6 * 60 * 60 * 1000); // 30 days data

  // Dummy data for the chart
  // const dummyData = generateDummyData();

  const chartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: `${hello.hello.ticker} Trends`
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'Price $'
      }
    },
    series: [
      {
        name: `${hello.hello.ticker} 1 Day`,
        data: dayData 
      },
      {
        name: `${hello.hello.ticker} (1 Week)`,
        data: weekData
      },
      {
        name: `${hello.hello.ticker} (1 Month)`,
        data: monthData
      }
    ]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default LiveChart;
