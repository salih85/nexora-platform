import { createSlice } from '@reduxjs/toolkit'

export type ThemeMode = 'light' | 'dark'

type ThemeState = {
  mode: ThemeMode
}

const getPreferredTheme = (): ThemeMode => {
  const stored = localStorage.getItem('nexora-theme')

  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  return 'light'
}

const initialState: ThemeState = {
  mode: getPreferredTheme(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
