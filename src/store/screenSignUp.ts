import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScreenSignUpState {
  visible: boolean;
  isError: boolean;
  access_token: string;
  display_name: string;
}

const initialState: ScreenSignUpState = {
  visible: false,
  isError: false,
  access_token: '',
  display_name: '',
};

const screenSignUp = createSlice({
  name: 'screenSignUp',
  initialState,
  reducers: {
    show(
      state,
      action: PayloadAction<Pick<ScreenSignUpState, 'access_token'>>,
    ) {
      state.visible = true;
      state.access_token = action.payload.access_token;
    },
    close(state) {
      state.visible = false;
      state.isError = false;
      state.access_token = '';
      state.display_name = '';
    },
    setIsError(state) {
      state.isError = true;
    },
    resetIsError(state) {
      state.isError = false;
    },
    setDisplayName(
      state,
      action: PayloadAction<Pick<ScreenSignUpState, 'display_name'>>,
    ) {
      state.display_name = action.payload.display_name;
    },
  },
});

export default screenSignUp;
