import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  spacing?: number;
}

const StyledForm = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ spacing = 16 }) => `${spacing}px`};
  width: 100%;
`;

const Form = ({ children, spacing, ...props }: FormProps) => {
  return (
    <StyledForm spacing={spacing} {...props}>
      {children}
    </StyledForm>
  );
};

export default Form; 