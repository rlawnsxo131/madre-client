import { css } from '@emotion/react';
import { media, mediaQuery } from '../../../styles';
import HomeHeaderLogo from './HomeHeaderLogo';
import HomeHeaderNavigation from './HomeHeaderNavigation';
import UserPersonalMenu from '../../user/UserPersonalMenu';

interface HomeHeaderWebProps {}

function HomeHeaderWeb(props: HomeHeaderWebProps) {
  return (
    <div css={block}>
      <HomeHeaderLogo />
      <div css={itemBlock}>
        <HomeHeaderNavigation />
        <UserPersonalMenu />
      </div>
    </div>
  );
}

const block = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  ${media.xxxsmall} {
    display: none;
  }
  ${media.small} {
    width: 93%;
    display: flex;
  }
  ${media.medium} {
    width: 96%;
  }
  ${mediaQuery(1285)} {
    max-width: 1250px;
  }
`;

const itemBlock = css`
  display: flex;
  justify-content: center;
`;

export default HomeHeaderWeb;