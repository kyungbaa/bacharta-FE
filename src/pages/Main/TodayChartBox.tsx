import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ExchageProps } from './MainTypes';
import { lineOptions, lineData } from './ChartData/ChartData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TodayChartBox = ({ exchangeData }: { exchangeData: ExchageProps[] }) => {
  return (
    <>
      <ChartContainer>
        <Line
          data={lineData}
          options={lineOptions}
          style={{
            width: '450px',
            height: '350px',
            backgroundColor: 'white',
            boxShadow: '10px 5px 5px gray',
            marginRight: '10px',
          }}
        />

        <Line
          data={lineData}
          options={lineOptions}
          style={{
            width: '450px',
            height: '350px',
            backgroundColor: 'white',
            boxShadow: '10px 5px 5px gray',
            marginRight: '10px',
          }}
        />
        <Line
          data={lineData}
          options={lineOptions}
          style={{
            width: '450px',
            height: '350px',
            backgroundColor: 'white',
            boxShadow: '10px 5px 5px gray',
            marginRight: '10px',
          }}
        />
      </ChartContainer>
    </>
  );
};

export default TodayChartBox;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 70px;
  margin-bottom: 120px;
`;
