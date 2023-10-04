import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);
export const data = {
  labels: ['Current', 'Remaining'],
  datasets: [
    {
      label: 'Satisfaction Rate',
      data: [95, 5],
      backgroundColor: ['#0075FF', '#22234B'],
      borderColor: 'transparent', // Transparent border color
      borderWidth: 1,
    },
  ],
};

export default function SatisfactionChartPie() {
  return (
    <Doughnut
      data={data}
      style={{
        maxHeight: '300px',
        aspectRatio: '1 / 1',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
      }}
      options={{
        rotation: -90,
        circumference: 180,
        cutout: '60%',
        maintainAspectRatio: true,
        responsive: true,
      }}
    />
  );
}
