import { PageLink } from '@/routes/PageLink';
import { getToken } from '@/utils';
import styled from 'styled-components';

export const StyledPageLink = styled(({ isActive, ...rest }) => (
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
      isActive ? null : getToken('color.bg.hover.1')};
  }
  border-radius: 5px;
  text-decoration: none;
  transition-property: all;
  transition-duration: 0.25s;
`;
