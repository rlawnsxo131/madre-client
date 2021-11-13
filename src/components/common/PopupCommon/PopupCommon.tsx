import { css } from '@emotion/react';
import {
  usePopupCommonActions,
  usePopupCommonValue,
} from '../../../atoms/popupCommonState';
import { media, mediaQuery } from '../../../styles';
import Button from '../Button';
import PopupBase from '../PopupBase';

interface PopupCommonProps {}

function PopupCommon(props: PopupCommonProps) {
  const { visible, title, message } = usePopupCommonValue();
  const { closePopup } = usePopupCommonActions();
  return (
    <PopupBase visible={visible}>
      <div css={block}>
        {title && <h3>{title}</h3>}
        <p>{message}</p>
        <div css={buttonBlock}>
          <Button color="pink" onClick={closePopup}>
            확인
          </Button>
        </div>
      </div>
    </PopupBase>
  );
}

const block = css`
  display: flex;
  flex-direction: column;
  padding: 1.725rem 1.5rem;
  h3 {
    margin: 0;
  }
  p {
    padding: 1rem 0;
    line-height: 1.75;
    word-break: break-word;
    overflow-wrap: break-word;
    display: -webkit-box;
  }
  ${media.xxxsmall} {
    width: 100vw;
  }
  ${mediaQuery(400)} {
    width: 400px;
  }
`;

const buttonBlock = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default PopupCommon;