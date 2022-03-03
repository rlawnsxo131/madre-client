import { createSlice } from '@reduxjs/toolkit';
import { MADRE_COLOR_THEME } from '../constants';
import { Storage } from '../lib/storage';

export type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state) {
      const theme = state.theme === 'light' ? 'dark' : 'light';
      Storage.setItem(MADRE_COLOR_THEME, theme);
      state.theme = theme;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
