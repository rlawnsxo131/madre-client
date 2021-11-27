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

export type D3AxisChartSetAxisOptionsParams = {
  axisXTicks?: number;
  axisYTicks?: number;
  axisXTickSize?: number;
  axisYTickSize?: number;
  axisXTickFormat?: D3TickFormat;
  axisYTickFormat?: D3TickFormat;
  axisXClass: string;
  axisYClass: string;
  axisFontSize?: number;
};

export type D3AxisChartSetAxisTickFormatParams = Partial<{
  axisXTickFormat: D3TickFormat;
  axisYTickFormat: D3TickFormat;
}>;
