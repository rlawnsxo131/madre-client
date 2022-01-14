import { css } from '@emotion/react';
import { MenuIcon } from '../../../image/icons';
import HomeNavigation from './HomeNavigation';
import { useHomeValue, useHomeActions } from '../../../atoms/homeState';
import { palette, themeColor } from '../../../styles';
import AuthGoogleButton from '../../auth/AuthGoogleButton/AuthGoogleButton';

interface HomeHeaderItemsProps {}

function HomeHeaderItems(props: HomeHeaderItemsProps) {
  const {
    navigation: { visible },
  } = useHomeValue();
  const { handleNavigation } = useHomeActions();

  return (
    <div css={block}>
      <div css={itemBlock}>
        <AuthGoogleButton />
      </div>
      <div css={itemBlock}>
        <button css={button} onClick={handleNavigation}>
          <MenuIcon />
        </button>
        <HomeNavigation visible={visible} />
      </div>
    </div>
  );
}

const block = css`
  position: relative;
  display: flex;
  align-items: center;
`;

const itemBlock = css`
  display: flex;
  justify-content: center;
  align-items: center;
  /* &:not(:nth-of-type(3)) {
    padding: 0 0.5rem;
  } */
  &:nth-of-type(1) {
    padding: 0 0.5rem;
  }
  &:nth-of-type(2) {
    padding-left: 0.5rem;
  }
`;

const button = css`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 3px;
  color: ${palette.gray['500']};
  svg {
    width: 1.125rem;
    height: 1.125rem;
    fill: ${themeColor.fill['light']};
  }
  &:hover {
    svg {
      opacity: 0.5;
    }
  }
`;

export default HomeHeaderItems;
