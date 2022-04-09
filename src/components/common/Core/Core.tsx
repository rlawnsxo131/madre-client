import GlobalStyle from '../GlobalStyle';
import PopupCommon from '../PopupCommon';
import PopupAuth from '../PopupAuth';
import ScreenSignUp from '../ScreenSignUp';
import Loading from '../Loading';
import useThemeEffect from '../../../hooks/theme/useThemeEffect';
import useUserLoadEffect from '../../../hooks/user/useUserLoadEffect';

interface CoreProps {}

function Core(props: CoreProps) {
  useThemeEffect();
  useUserLoadEffect();

  return (
    <>
      <GlobalStyle />
      <PopupCommon />
      <PopupAuth />
      <ScreenSignUp />
      <Loading />
    </>
  );
}

export default Core;
