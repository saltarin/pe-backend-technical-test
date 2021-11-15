import React from 'react';
import { Navigation } from '../Navigation';
import {
  NavigationLayout,
  WrapperContentLayout,
  LayoutWrapper
} from './styled';

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <NavigationLayout>
        <Navigation />
      </NavigationLayout>
      <WrapperContentLayout>{children}</WrapperContentLayout>
    </LayoutWrapper>
  );
};
