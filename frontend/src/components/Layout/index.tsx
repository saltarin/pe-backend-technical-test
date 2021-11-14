import React from 'react';
import {
  NavigationLayout,
  WrapperContentLayout,
  LayoutWrapper
} from './styled';

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <NavigationLayout>
        {/* <Navigation /> */}
        navigation
      </NavigationLayout>
      <WrapperContentLayout>{children}</WrapperContentLayout>
    </LayoutWrapper>
  );
};
