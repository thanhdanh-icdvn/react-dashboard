import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartOptions,
  ChartData,
  Filler,
} from 'chart.js';
function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
export default function SaleLineChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
  );
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'white',
          font: {
            size: 16,
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.5,
      },
      point: {
        pointStyle: 'circle',
        radius: 0,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#CBD5E0',
        },
        grid: {
          color: 'transparent',
        },
        border: {
          dash: [4, 4],
        },
      },
      y: {
        ticks: {
          color: '#CBD5E0',
        },
        grid: {
          color: '#56577A',
        },
        border: {
          dash: [4, 4],
        },
      },
    },
  };
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => randomNumber(0, 500)),
        borderColor: 'rgba(44, 217, 255,1)',
        backgroundColor: 'rgba(44, 217, 255,0.2)',
        fill: true,
        borderWidth: 3,
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => randomNumber(0, 500)),
        borderColor: 'rgba(0, 117, 255,1)',
        backgroundColor: 'rgba(0, 117, 255,0.2)',
        fill: true,
        borderWidth: 3,
      },
    ],
  };
  return <Line data={data} options={options} />;
}
