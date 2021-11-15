import styled, { css } from 'styled-components';
import { COLORS } from '../../ui/colors';

export const Wrapper = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.LIGHT_GRAY};
  transition: all 0.1s ease-in;
  > div {
    width: 80%;
    margin: 0 auto;
    > picture {
      display: block;
      margin: 60px auto;
      background-color: ${COLORS.WHITE};
      border-radius: 12px;
    }
    > h2 {
      margin-bottom: 2em;
    }
    > section {
      background-color: ${COLORS.WHITE};
      border-radius: 12px;
      & ul li {
        margin-bottom: 1em;
      }
    }
  }
`;

interface Props {
  pathname: string;
}

export const PageLink = styled.a<Props>`
  width: 100%;
  color: ${COLORS.BLACK};
  border: 1px solid transparent;
  display: flex;
  padding: 12px;
  ${props =>
    props.href &&
    props.pathname === props.href &&
    css`
      color: ${COLORS.YELLOW};
      border: 1px solid ${COLORS.BLACK};
      border-radius: 12px;
    `}
  &:link {
    text-decoration: none;
  }
`;
