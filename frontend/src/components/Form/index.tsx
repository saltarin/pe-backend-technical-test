import React, { FormHTMLAttributes } from 'react';
import { StyledForm } from './styled';

export const Form: React.FC<FormHTMLAttributes<HTMLFormElement>> = ({
  children,
  ...rest
}) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};
