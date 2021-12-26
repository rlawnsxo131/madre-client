import { useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { format, add } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { D3AxisChart2, D3Util } from '../lib/d3';
import { getRandomIntInclusive } from '../lib/utils';
import { palette } from '../styles';

interface TestPage2Props {}

function TestPage2(props: TestPage2Props) {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<D3AxisChart2 | null>(null);
  const axisXClassRef = useRef<string>(`axis-x-${uuidv4()}`);
  const axisYClassRef = useRef<string>(`axis-x-${uuidv4()}`);

  const width = 660;
  const height = 360;
  const margin = {
    left: 100,
    right: 100,
    top: 30,
    bottom: 30,
  };

  useEffect(() => {
    if (!ref.current) return;
    if (chartRef.current) return;

    chartRef.current = new D3AxisChart2({
      container: ref.current,
      width,
      height,
      margin,
    });
  }, [ref.current]);

  useEffect(() => {
    if (!ref.current) return;
    if (!chartRef.current) return;

    const data = Array.from({ length: 5 }).map((_, i) =>
      Array.from({ length: 12 }).map((_, j) => {
        const date = new Date();
        const x = add(date, {
          months: j,
        });
        return {
          x,
          y: getRandomIntInclusive(2000, 10000),
        };
      }),
    );

    chartRef.current.setData(data);
    chartRef.current.setUniqIdentifierValueMap();
    chartRef.current.setScaleType('time', 'number');
    chartRef.current.setDomainOptions('x', 'y');
    chartRef.current.setDomain();
    chartRef.current.setAxisOptions({
      axisXTicks: 5,
      axisYTicks: 5,
      axisXTickVisible: true,
      axisYTickVisible: true,
      axisXTickFormat: (d, _) => format(d as Date, 'yyyy-MM'),
      axisYTickFormat: (d, _) => D3Util.formatNumberWithComma()(d),
      axisXClass: axisXClassRef.current,
      axisYClass: axisYClassRef.current,
    });

    chartRef.current.setAxis();
    chartRef.current.appendAxis();
    chartRef.current.appendLine();
    chartRef.current.appendArea();
    chartRef.current.resetData();

    setTimeout(() => {
      if (!chartRef.current) return;

      const data = Array.from({ length: 5 }).map((_, i) =>
        Array.from({ length: 101 }).map((_, j) => ({
          x: j * 100,
          y: getRandomIntInclusive(10000, 20000),
        })),
      );

      chartRef.current.setData(data);
      chartRef.current.setScaleType('number', 'number');
      chartRef.current.setDomain();
      chartRef.current.setAxisOptions({
        axisXTickFormat: (d, _) => D3Util.formatNumberWithComma()(d),
      });
      chartRef.current.setAxis();
      chartRef.current.updateAxis();
      chartRef.current.updateLine();
      chartRef.current.updateArea();
      chartRef.current.resetData();
    }, 1500);

    setTimeout(() => {
      if (!chartRef.current) return;

      const data = Array.from({ length: 5 }).map((_, i) =>
        Array.from({ length: 101 }).map((_, j) => ({
          x: j * 50,
          y: getRandomIntInclusive(5000, 15000),
        })),
      );

      chartRef.current.setData(data);
      chartRef.current.setDomain();
      chartRef.current.setAxis();
      chartRef.current.updateAxis();
      chartRef.current.updateLine();
      chartRef.current.updateArea();
      chartRef.current.resetData();
    }, 3500);
  }, [chartRef.current]);

  return (
    <div
      css={block({
        axisXClass: axisXClassRef.current,
        axisYClass: axisYClassRef.current,
      })}
      ref={ref}
    ></div>
  );
}

const block = ({
  axisXClass = '',
  axisYClass = '',
}: {
  axisXClass: string;
  axisYClass: string;
}) => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;

  .${axisXClass}, .${axisYClass} {
    line,
    path {
      color: ${palette.gray['300']};
    }
    text {
      font-size: 0.725rem;
      font-weight: 400;
    }
  }
`;

export default TestPage2;
