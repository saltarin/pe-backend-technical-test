import styled from 'styled-components';
import { COLORS } from '../../ui/colors';
import { SIZES } from '../../ui/devices';

export const Wrapper = styled.div`
  background-color: ${COLORS.WHITE};
  display: flex;
  margin: 160px auto 0;
  justify-content: center;
  @media (max-width: ${SIZES.TABLET}) {
    margin: 60px auto 0;
  }
`;
