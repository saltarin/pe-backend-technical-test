import styled from 'styled-components';
import { COLORS } from '../../ui/colors';

export const InformationMessage = styled.div`
  > h3 {
    margin: 0.5em 0 0.5em;
  }
  p {
    line-height: 1.2em;
  }
  > h1,
  h2,
  h3,
  p,
  b,
  span {
    &[data-type='success'] {
      color: ${COLORS.GREEN};
    }
    &[data-type='error'] {
      color: ${COLORS.RED};
    }
  }
`;
