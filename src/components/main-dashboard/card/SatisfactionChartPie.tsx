import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  ScriptableContext,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);
const data = {
  labels: ['Current', 'Remaining'],
  datasets: [
    {
      label: 'Satisfaction Rate',
      data: [95, 5],
      backgroundColor: (context: ScriptableContext<'doughnut'>) => {
        const { chart } = context;
        const { chartArea } = chart;
        if (!chartArea) {
          return undefined;
        }
        if (context.dataIndex === 0) {
          return getGradient(chart, [
            {
              offset: 0,
              color: '#071434',
            },
            {
              offset: 1,
              color: '#0075FF',
            },
          ]);
        } else {
          return getGradient(chart, [
            {
              offset: 0,
              color: '#fff',
            },
            {
              offset: 1,
              color: '#22234B',
            },
          ]);
        }
      },
      borderColor: 'transparent', // Transparent border color
      borderWidth: 1,
      borderRadius: 10,
    },
  ],
};

type GradientValue = {
  offset: number;
  color: string;
};
function getGradient(
  chart: ChartJS,
  gradients: GradientValue[],
): CanvasGradient {
  const {
    ctx,
    chartArea: { left, right },
  } = chart;
  const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
  gradients.map((clr) => {
    gradientSegment.addColorStop(clr.offset, clr.color);
  });
  return gradientSegment;
}

export default function SatisfactionChartPie() {
  return (
    <Doughnut
      data={data}
      style={{
        marginBottom: '10px',
        maxHeight: '250px',
        aspectRatio: '1 / 1',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
      }}
      options={{
        rotation: -135,
        circumference: 270,
        cutout: '90%',
        maintainAspectRatio: true,
        responsive: true,
        animation: false,
      }}
    />
  );
}
