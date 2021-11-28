import {
  AppendSVGParams,
  D3Margin,
  D3TickFormat,
} from '../D3Common2/D3Common2Types';

export type D3AxisChartConstructorParams = {
  width: number;
  height: number;
  margin: D3Margin;
} & AppendSVGParams;

/**
 * axis
 */
export type D3AxisChartSetAxisOptionsParams = Partial<{
  axisXTicks: number;
  axisYTicks: number;
  axisXTickVisible: boolean;
  axisYTickVisible: boolean;
  axisXTickFormat: D3TickFormat;
  axisYTickFormat: D3TickFormat;
  axisXClass: string;
  axisYClass: string;
  axisFontSize: number;
  axisTransitionDuration: number;
}>;

/**
 * line
 */
export type D3AxisChartLineType = 'STRAIGHT' | 'CURVE';
export type D3AxisChartLinecurvType =
  | 'curveBasis'
  | 'curveMonotoneX'
  | 'curveMonotoneY';
export type D3AxisChartLinecapType = 'round' | 'butt';
export type D3AxisChartLinejoinType = 'round' | 'miter';

export type D3AxisChartSetLineOptionsParams = Partial<{
  lineType: D3AxisChartLineType;
  linecurvType: D3AxisChartLinecurvType;
  linecapType: D3AxisChartLinecapType;
  linejoinType: D3AxisChartLinejoinType;
  lineStrokeWidth: number;
  lineTransition: boolean;
  lineTransitionDuration: number;
}>;
