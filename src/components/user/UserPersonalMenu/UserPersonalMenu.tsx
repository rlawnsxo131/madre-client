import { css } from '@emotion/react';
import useUserState from '../../../hooks/user/useUserState';
import { DropArrowIcon, UserIcon } from '../../../image/icons';
import { themePalette } from '../../../styles';
import UserPersonalMenuAuthButton from './UserPersonalMenuAuthButton';

interface UserPersonalMenuProps {}

function UserPersonalMenu(props: UserPersonalMenuProps) {
  const { isPending, userTokenProfile } = useUserState();

  if (isPending) {
    return <div>pending</div>;
  }

  if (!userTokenProfile) {
    return (
      <div css={block}>
        <UserPersonalMenuAuthButton />
      </div>
    );
  }

  return (
    <div css={block}>
      <UserIcon />
      <DropArrowIcon />
      {/* <img src={userProfile.photo_url} /> */}
    </div>
  );
}

const block = css`
  position: relative;
  /* margin-right: 0.5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;

  svg {
    fill: ${themePalette.fill1};
    &:nth-of-type(1) {
      width: 1.9rem;
      height: 1.9rem;
    }
    &:nth-of-type(2) {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
`;

export default UserPersonalMenu;
