import React from 'react';
import { StyledButton } from './styled';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ children, className, ...rest }) => {
    return (
      <StyledButton className={className} {...rest}>
        {children}
      </StyledButton>
    );
  };
