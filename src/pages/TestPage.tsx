import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { D3AxisChart } from '../lib/d3';
import { D3Data } from '../lib/d3/v1/D3Common/D3CommonTypes';
import { getRandomColors, getRandomIntInclusive } from '../lib/utils';

interface TestPageProps {}

function TestPage(props: TestPageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const dataList: D3Data[] = Array.from({ length: 5 }).map((_, i) => ({
    d3Position: Array.from({ length: 11 }).map((v, j) => [
      j * 10,
      getRandomIntInclusive(10, 87),
    ]),
    key: i,
  }));
  const width = 460;
  const height = 400;
  const margin = {
    left: 30,
    right: 30,
    top: 30,
    bottom: 30,
  };
  const xDomain = [0, 100];
  const yDomain = [0, 100];

  useEffect(() => {
    if (!ref.current) return;

    const chart = new D3AxisChart({
      container: ref.current,
      width: width,
      height: height,
      className: 'axis-chart',
      xDomain,
      yDomain,
      margin,
    });

    chart.setAxis({
      axisXTicks: 2,
      axisYTicks: 5,
      axisXTickSize: 0,
      axisYTickSize: 0,
      axisXClass: 'x-axis',
      axisYClass: 'y-axis',
      axisFontSize: 12,
    });

    chart.setAxisBackgroundGrid({
      axisBackgroundGridDirection: {
        x: true,
        y: true,
      },
      axisBackgroundGridXTicks: 5,
      // axisBackgroundGridYTicks: 5,
      axisBackgroundGridXClass: 'x-axis-background-grid',
      axisBackgroundGridYClass: 'y-axis-background-grid',
    });

    chart.drawAxis();
    chart.drawGrid();

    const colors = getRandomColors(dataList.length);

    dataList.forEach((v, i) => {
      chart.drawLine({
        data: v,
        color: colors[i],
        lineType: 'CURVE',
        lineCurvType: 'curveMonotoneX',
        lineStrokeWidth: 2,
        linejoinType: 'miter',
        linecapType: 'butt',
        lineDrawAnimate: true,
        lineDrawAnimateDuration: 1500,
        isMouseOverAction: true,
        uuid: '',
      });
      // chart.drawArea({
      //   data: v,
      //   color: colors[i],
      //   // areaOpacity: 0,
      //   areaDrawAnimate: true,
      //   areaDrawAnimateDuration: 1500,
      //   // areaType: 'full',
      //   isMouseOverAction: true,
      //   areaMouseOverOpacity: 0.6,
      //   uuid,
      // });
      // chart.drawCircle({
      //   data: v,
      //   color: colors[i],
      //   circleRadius: 3,
      //   circleStrokeWidth: 2,
      //   uuid,
      // });
    });

    const timeoutId = setTimeout(() => {
      // chart.removeLine();
      const dataList: D3Data[] = Array.from({ length: 5 }).map((_, i) => ({
        d3Position: Array.from({ length: 11 }).map((v, j) => [
          j * 10,
          getRandomIntInclusive(10, 87),
        ]),
        key: i,
      }));

      const colors = getRandomColors(dataList.length);

      // dataList.forEach((v, i) => {
      // const uuid = generateUUID();
      // chart.drawLine({
      //   data: v,
      //   color: colors[i],
      //   lineType: 'CURVE',
      //   lineCurvType: 'curveMonotoneX',
      //   lineStrokeWidth: 2,
      //   linejoinType: 'miter',
      //   linecapType: 'butt',
      //   lineDrawAnimate: true,
      //   lineDrawAnimateDuration: 1500,
      //   isMouseOverAction: true,
      //   uuid,
      // });

      // chart.drawArea({
      //   data: v,
      //   color: colors[i],
      //   // areaOpacity: 0,
      //   areaDrawAnimate: true,
      //   areaDrawAnimateDuration: 1500,
      //   // areaType: 'full',
      //   isMouseOverAction: true,
      //   areaMouseOverOpacity: 0.6,
      //   uuid,
      // });
      // chart.drawCircle({
      //   data: v,
      //   color: colors[i],
      //   circleRadius: 3,
      //   circleStrokeWidth: 2,
      //   uuid,
      // });
      // });
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [ref.current]);

  return <div css={block} ref={ref}></div>;
}

const block = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .x-axis {
    & {
      path,
      line {
        display: none;
      }
    }
  }
  .y-axis {
    & {
      path,
      line {
        display: none;
      }
    }
  }
`;

export default TestPage;
