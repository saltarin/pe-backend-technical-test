import styled from 'styled-components';
import { COLORS } from '../../ui/colors';
import { SIZES } from '../../ui/devices';

export const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  @media (max-width: ${SIZES.TABLET}) {
    flex-flow: column nowrap;
  }
`;

export const NavigationLayout = styled.div`
  position: fixed;
  width: 256px;
  height: 100%;
  background-color: ${COLORS.LIGHT_GRAY};
  box-shadow: 6px 0px 18px rgba(244, 244, 244, 0.8);
  @media (max-width: ${SIZES.TABLET}) {
    position: relative;
    width: 100%;
  }
`;

export const WrapperContentLayout = styled.div`
  margin-left: 256px;
  flex: 1 0 auto;
  transition: all 0.1s ease-in;
  background-color: ${COLORS.WHITE};
  min-height: 100vh;
  max-width: calc(100% - 256px);
  @media (max-width: ${SIZES.TABLET}) {
    margin: 0;
    max-width: none;
    width: 100%;
  }
`;

export const PageLoaderLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${COLORS.WHITE};
`;
