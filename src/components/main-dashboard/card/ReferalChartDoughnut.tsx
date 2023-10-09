import { createGradient } from '@/utils/chartGradient';
import { calculatePercentagesByIndex } from '@/utils/number';
import {
  Chart as ChartJS,
  ArcElement,
  ScriptableContext,
  ChartOptions,
  Plugin,
  ChartData,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
export type AnyObject = Record<string, unknown>;

type ReferalChartDoughnutProps = {
  chartData: number[];
};
export default function ReferalChartDoughnut({
  chartData,
}: ReferalChartDoughnutProps) {
  ChartJS.register(ArcElement);
  const score = calculatePercentagesByIndex(chartData, 0) / 10;
  function handleDrawLabel(chart: ChartJS) {
    // Your custom drawing logic here
    const ctx = chart.ctx as CanvasRenderingContext2D;
    const width = chart.width;
    const height = chart.height;

    // Calculate the position for your label
    const x = width / 2;
    const y = height / 2;

    function drawText(
      ctx: CanvasRenderingContext2D,
      size: number,
      x: number,
      y: number,
      color: string,
      font: string,
      text: string,
    ) {
      ctx.fillStyle = color ?? 'white';
      ctx.font = `${size}px ${font}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // Draw your custom label
      ctx.fillText(`${String(text)}`, x, y);
    }
    drawText(ctx, 14, x, y - 40, '#A0AEC0', 'Arial', 'Safety');
    drawText(ctx, 50, x, y, 'white', 'Arial', String(score));
    drawText(ctx, 14, x, y + 40, '#A0AEC0', 'Arial', 'Total score');
  }
  const data: ChartData<'doughnut', number[], string> = {
    labels: ['Excelent', 'Other'],
    datasets: [
      {
        label: 'Score value',
        data: chartData,
        backgroundColor: (context: ScriptableContext<'doughnut'>) => {
          const { chart } = context;
          const { chartArea } = chart;
          if (!chartArea) {
            return undefined;
          }
          if (context.dataIndex === 0) {
            return createGradient(chart, [
              {
                offset: 0,
                color: '#fffbfb',
              },
              {
                offset: 1,
                color: '#05CD99',
              },
            ]);
          } else {
            return createGradient(chart, [
              {
                offset: 0,
                color: 'transparent',
              },
            ]);
          }
        },
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 20,
      },
    ],
  };
  const customPlugin: Plugin<'doughnut', AnyObject> = {
    id: 'doughnutLabel',
    beforeDatasetDraw: (chart) => handleDrawLabel(chart),
  };
  const chartOptions: ChartOptions<'doughnut'> = {
    rotation: -135,
    circumference: 270,
    cutout: '90%',
    maintainAspectRatio: true,
    responsive: true,
    animation: false,
  };
  return (
    <Doughnut data={data} options={chartOptions} plugins={[customPlugin]} />
  );
}
