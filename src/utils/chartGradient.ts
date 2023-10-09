import { Chart } from 'chart.js';
type GradientValue = {
  offset: number;
  color: string;
};
export function createGradient(
  chart: Chart,
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
