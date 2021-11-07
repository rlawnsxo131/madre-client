import {
  AppendSvgParams,
  D3Data,
  D3TickFormat,
} from '../D3Common/D3CommonTypes';

export type D3Margin = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

export type D3AxisChartConstructorParams = {
  xDomain: number[];
  yDomain: number[];
  width: number;
  height: number;
  margin: D3Margin;
} & AppendSvgParams;

export type D3AxisChartSetAxisParams = Partial<{
  xTicks: number;
  yTicks: number;
  xTickSize: number;
  yTickSize: number;
  xClass: string;
  yClass: string;
  axisFontSize: number;
  xTickFormat: D3TickFormat;
  yTickFormat: D3TickFormat;
}>;

export type D3AxisChartSetAxisBackgroundGridParams = {
  direction: {
    x: boolean;
    y: boolean;
  };
  xClass?: string;
  yClass?: string;
  xTicks?: number;
  yTicks?: number;
  xTickFormat?: D3TickFormat;
  yTickFormat?: D3TickFormat;
};

/**
 * Draw Line And Area
 */
export type D3AxisDrawLineAndAreaParams = {
  data: D3Data;
  color?: string;
  animate?: boolean;
  duration?: number;
  uuid?: string;
  isMouseOverAction?: boolean;
};

/**
 * Line
 */
export type D3AxisChartLineType = 'STRAIGHT' | 'CURVE';
export type LinejoinType = 'round' | 'miter';
export type LinecapType = 'round' | 'butt';
export type D3AxisChartDrawLineParams = {
  strokeWidth?: number;
  lineType?: D3AxisChartLineType;
  linejoinType?: LinejoinType;
  linecapType?: LinecapType;
} & D3AxisDrawLineAndAreaParams;

/**
 * Area
 */
export type AreaType = 'full' | 'boundary';
export type D3AxisChartDrawAreaParams = {
  opacity?: number;
  areaType?: AreaType;
  mouseOverOpacity?: number;
} & D3AxisDrawLineAndAreaParams;

/**
 * Circle
 */
export type D3AxisChartDrawCircleParams = {
  data: D3Data;
  color?: string;
  radius?: number;
  uuid?: string;
  isMouseOverAction?: boolean;
};
