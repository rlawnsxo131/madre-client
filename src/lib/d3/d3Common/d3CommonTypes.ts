/**
 * Types that have dependencies on types defined in d3
 */
export type D3Selection = d3.Selection<SVGSVGElement, unknown, null, undefined>;

/**
 * Types that do not depend on the types defined in d3
 */
export type D3Data = [number, number][];
export type D3DoubleNumberArray = [number, number];

/**
 * function params
 */
export type AppendSvgParams = {
  container: HTMLElement;
  width: number;
  height: number;
  className?: string;
};
