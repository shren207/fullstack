import styled from '@emotion/styled';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const InputWrapper = styled.div<{ fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

const StyledInput = styled.input<{ hasError?: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? '#EF4444' : '#D1D5DB')};
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: #3B82F6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:disabled {
    background-color: #F3F4F6;
    cursor: not-allowed;
  }

  ${({ hasError }) =>
    hasError &&
    `
    &:focus {
      border-color: #EF4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`;

const ErrorMessage = styled.span`
  font-size: 14px;
  color: #EF4444;
`;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth, ...props }, ref) => {
    return (
      <InputWrapper fullWidth={fullWidth}>
        {label && <Label>{label}</Label>}
        <StyledInput ref={ref} hasError={!!error} {...props} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';

export default Input; 