import { css } from '@emotion/react';
import { MenuIcon } from '../../../image/icons';
import { palette, themeColor } from '../../../styles';
import useHome from '../../../hooks/useHome';

interface HomeHeaderMobileNavigationButtonProps {}

function HomeHeaderMobileNavigationButton(
  props: HomeHeaderMobileNavigationButtonProps,
) {
  const { handleMobileNavigation } = useHome();
  return (
    <button css={block} onClick={handleMobileNavigation}>
      <MenuIcon />
    </button>
  );
}

const block = css`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
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

export default HomeHeaderMobileNavigationButton;
