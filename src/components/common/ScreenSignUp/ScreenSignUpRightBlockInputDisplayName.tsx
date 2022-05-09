import { css } from '@emotion/react';
import { memo } from 'react';
import { CloseIcon } from '../../../image/icons';
import { themePalette, zIndexes } from '../../../styles';
import Button from '../Button';
import Input from '../Input';
import useScreenSignUpInputDisplayName from './hooks/useScreenSignUpRightBlockInputDisplayName';

interface ScreenSignUpRightBlockInputDisplayNameProps {}

function ScreenSignUpRightBlockInputDisplayName(
  props: ScreenSignUpRightBlockInputDisplayNameProps,
) {
  const { inputRef, displayName, onChange, close, onSignUp } =
    useScreenSignUpInputDisplayName();

  return (
    <div css={block}>
      <div css={header}>
        <CloseIcon onClick={close} />
      </div>
      <div css={body}>
        <h3>사용하실 이름을 입력해 주세요.</h3>
        <Input
          size="responsive"
          name="display_name"
          value={displayName}
          onChange={onChange}
          ref={inputRef}
          minLength={1}
          maxLength={16}
          placeholder="특수문자 제외, 영문 1~16자"
        />
      </div>
      <div css={footer}>
        <Button color="blue" onClick={onSignUp}>
          확인
        </Button>
      </div>
    </div>
  );
}

const block = css`
  position: relative;
  flex: 2 1 0;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 1.5rem 1rem;
  border-radius: 0.25rem;
`;

const header = css`
  display: flex;
  justify-content: flex-end;
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${themePalette.fill1};
    cursor: pointer;
    z-index: ${zIndexes.screenSignUpItems};
  }
`;

const body = css`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  input {
    z-index: ${zIndexes.screenSignUpItems};
  }
`;

const footer = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  button {
    z-index: ${zIndexes.screenSignUpItems};
  }
`;

export default memo(ScreenSignUpRightBlockInputDisplayName);
