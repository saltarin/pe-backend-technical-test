import React, { HTMLAttributes } from 'react';
import { StyledInformationMessage } from './styled';

export const InformationMessage: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children
}) => {
  return <StyledInformationMessage>{children}</StyledInformationMessage>;
};
