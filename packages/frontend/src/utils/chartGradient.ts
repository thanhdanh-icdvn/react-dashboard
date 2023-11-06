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
export function createGradientLine(
  chart: Chart,
  gradients: GradientValue[],
): CanvasGradient {
  const {
    ctx,
    chartArea: { bottom, top },
  } = chart;
  const gradientSegment = ctx.createLinearGradient(0, bottom, 0, top);
  gradients.map((clr) => {
    gradientSegment.addColorStop(clr.offset, clr.color);
  });
  return gradientSegment;
}
