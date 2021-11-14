import styled from 'styled-components';
import { COLORS } from '../../ui/colors';

export const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

export const NavigationLayout = styled.div`
  position: fixed;
  width: 256px;
  height: 100%;
  background-color: ${COLORS.LIGHT_GRAY};
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
`;

export const WrapperContentLayout = styled.div`
  margin-left: 256px;
  flex: 1 0 auto;
  transition: all 0.1s ease-in;
  background-color: ${COLORS.WHITE};
  min-height: 100vh;
  max-width: calc(100% - 256px);
`;

export const PageLoaderLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${COLORS.WHITE};
`;
