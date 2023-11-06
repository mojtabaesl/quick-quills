import { get } from 'lodash';
import type { DefaultTheme } from 'styled-components';

type Path<T extends string> = T extends '' ? '' : `.${T}`;

type PathsOf<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${Path<PathsOf<T[K]>>}`;
      }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;

type ThemeKeys = PathsOf<DefaultTheme>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getToken = (key: ThemeKeys) => (props: any) =>
  get(props.theme, key);
