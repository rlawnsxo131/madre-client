import { css } from '@emotion/react';
import { CloseIcon } from '../../../image/icons';
import { themePalette, zIndexes } from '../../../styles';
import Button from '../Button';
import Input from '../Input';
import useScreenSignupRightBlock from './hooks/useScreenSignupRightBlock';

interface ScreenSignupRightBlockProps {}

function ScreenSignupRightBlock(props: ScreenSignupRightBlockProps) {
  const { state, close, onChange, onSignup } = useScreenSignupRightBlock();

  return (
    <div css={block}>
      <div css={header}>
        <CloseIcon onClick={close} />
      </div>
      <div css={body}>
        <h3>닉네임을 입력해 주세요</h3>
        <Input
          size="responsive"
          name="username"
          value={state.username}
          onChange={onChange}
          minLength={1}
          maxLength={16}
        />
      </div>
      <div css={footer}>
        <Button color="pink" onClick={onSignup}>
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
    z-index: ${zIndexes.screenSignupItems};
  }
`;

const body = css`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  input {
    z-index: ${zIndexes.screenSignupItems};
  }
  p {
    margin: 0;
  }
`;

const footer = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  button {
    z-index: ${zIndexes.screenSignupItems};
  }
`;

export default ScreenSignupRightBlock;
