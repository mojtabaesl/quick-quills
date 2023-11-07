const colorTokens = {
  fg: {
    primary: 'var(--c-fg-primary)',
    muted: 'var(--c-fg-muted)',
  },
  bg: {
    surface: 'var(--c-bg-surface)',
    active: 'var(--c-bg-active)',
  },
  border: {
    primary: 'var(--c-border-primary)',
  },
} as const;

export const theme = {
  color: colorTokens,
};

export type Theme = typeof theme;
