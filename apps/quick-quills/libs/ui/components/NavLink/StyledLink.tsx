import { PageLink } from '@/router/PageLink';
import { getToken } from '@/utils';
import styled from 'styled-components';

export const StyledLink = styled(({ isActive, ...rest }) => (
  <PageLink {...rest} />
))<{
  isActive: boolean;
}>`
  background: ${({ isActive }) =>
    isActive ? getToken('color.bg.active') : null};
  color: ${({ isActive }) =>
    isActive ? getToken('color.fg.primary') : getToken('color.fg.muted')};
  &:hover {
    background: ${({ isActive }) =>
      isActive ? null : getToken('color.bg.hover')};
  }
  border-radius: 5px;
  text-decoration: none;
  transition-property: color, background-color;
  transition-duration: 0.25s;
`;
