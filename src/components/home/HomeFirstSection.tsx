import { css } from '@emotion/react';
import { GoogleIcon } from '../../image/icons';
import { DataTrendsImage, DataImage } from '../../image/images';
import media, { mediaQuery } from '../../styles/media';
import Button from '../common/Button';

interface HomeFirstSectionProps {}

function HomeFirstSection(props: HomeFirstSectionProps) {
  return (
    <section css={block}>
      <div css={imageBlock}>
        <div css={images}>
          <DataTrendsImage />
          <DataImage />
        </div>
      </div>
      <div css={description}>
        <h1>데이터 시각화</h1>
        <p>데이터를 손쉽게 시각화 하세요.</p>
      </div>
      <div css={buttonBlock}>
        <Button icon={<GoogleIcon />} size="responsive">
          Sign in with Google
        </Button>
      </div>
    </section>
  );
}

const block = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 3rem 0;
`;

const imageBlock = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const images = css`
  margin-top: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  svg {
    height: auto;
    ${media.xxxsmall} {
      width: 100%;
      &:nth-of-type(2) {
        margin-top: 1rem;
      }
    }
    ${media.xxsmall} {
      width: 20rem;
    }
    ${mediaQuery(696)} {
      &:nth-of-type(2) {
        margin-top: 0;
      }
      &:nth-of-type(1) {
        margin-top: 10px;
      }
    }
  }
`;

const description = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    margin-top: 2rem;
  }
  p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

const buttonBlock = css`
  width: 90%;
  margin-top: 1.5rem;
`;

export default HomeFirstSection;
