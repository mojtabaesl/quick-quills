const colorTokens = {
  fg: {
    primary: '#EDEDED',
    muted: '#7E858F',
  },
  bg: {
    surface: '#1C1C1E',
    active: '#2F2B38',
  },
  border: {
    primary: '#363636',
  },
} as const;

export const theme = {
  color: colorTokens,
};

export type Theme = typeof theme;
