import { css } from '@emotion/react';
import HomeSectionGraph from './HomeSectionGraph';
import HomeSectionThinkAbout from './HomeSectionThinkAbout';

interface HomeProps {}

function Home(props: HomeProps) {
  return (
    <div css={block}>
      <HomeSectionThinkAbout />
      <HomeSectionGraph />
      <div style={{ padding: '5rem' }} />
    </div>
  );
}

const block = css`
  display: flex;
  flex-direction: column;
`;

export default Home;
