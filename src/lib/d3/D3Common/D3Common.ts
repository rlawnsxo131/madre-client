import { select } from 'd3';
import {
  AppendSvgParams,
  D3DoubleNumberArray,
  D3ExtentResult,
} from './D3CommonTypes';

export default class D3Common {
  protected appendSvg({
    container,
    width,
    height,
    className = '',
  }: AppendSvgParams) {
    const svg = select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0, 0, ${width}, ${height}`)
      .attr('class', className);

    return svg;
  }

  protected serializedExtent(data: D3ExtentResult): D3DoubleNumberArray {
    if (!data[1]) return [0, 0];
    return data;
  }

  protected replaceSharpFromHexColor(hex: string) {
    return `${hex.replace('#', '')}`;
  }
}
