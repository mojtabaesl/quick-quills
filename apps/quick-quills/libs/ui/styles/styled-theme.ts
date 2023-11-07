const colorTokens = {
  fg: {
    primary: 'var(--c-fg-primary)',
    muted: 'var(--c-fg-muted)',
  },
  bg: {
    surface: 'var(--c-bg-surface)',
    active: 'var(--c-bg-active)',
    secondary: 'var(--c-tint-100)',
    hover: 'var(--c-tint-50)',
  },
  border: {
    primary: 'var(--c-border-primary)',
  },
} as const;

export const theme = {
  color: colorTokens,
};

export type Theme = typeof theme;
