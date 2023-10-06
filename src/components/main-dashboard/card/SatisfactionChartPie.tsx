import {
  Chart as ChartJS,
  ArcElement,
  ScriptableContext,
  ChartOptions,
  Plugin,
  ChartData,
  Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { calculatePercentagesByIndex } from '../../../utils/number';
ChartJS.register(ArcElement, Tooltip);
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

export type AnyObject = Record<string, unknown>;

type SatisfactionChartPieProps = {
  chartData: number[];
};
export default function SatisfactionChartPie({
  chartData,
}: SatisfactionChartPieProps) {
  const percent = calculatePercentagesByIndex(chartData, 0);
  function handleDrawLabel(chart: ChartJS) {
    // Your custom drawing logic here
    const ctx = chart.ctx as CanvasRenderingContext2D;
    const width = chart.width;
    const height = chart.height;

    // Calculate the position for your label
    const x = width / 2;
    const y = height / 2;

    // Customize label properties
    ctx.fillStyle = 'white';
    ctx.font = '50px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // Draw your custom label
    ctx.fillText(`${String(percent)}%`, x, y);
    ctx.save();
  }
  const data: ChartData<'doughnut', number[], string> = {
    labels: ['Current', 'Remaining'],
    datasets: [
      {
        label: 'Satisfaction value',
        data: chartData,
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
                color: '#fffbfb',
              },
              {
                offset: 1,
                color: '#0075ff',
              },
            ]);
          } else {
            return getGradient(chart, [
              {
                offset: 0,
                color: 'transparent',
              },
            ]);
          }
        },
        borderColor: 'transparent', // Transparent border color
        borderWidth: 1,
        borderRadius: 20,
      },
    ],
  };
  const customPlugin: Plugin<'doughnut', AnyObject> = {
    id: 'doughnutLabel',
    beforeDatasetDraw: (chart) => handleDrawLabel(chart),
    beforeUpdate: (chart) => handleDrawLabel(chart),
  };
  const chartOptions: ChartOptions<'doughnut'> = {
    rotation: -135,
    circumference: 270,
    cutout: '90%',
    responsive: true,
    animation: false,
    aspectRatio: 1,
  };
  return (
    <Doughnut data={data} options={chartOptions} plugins={[customPlugin]} />
  );
}
