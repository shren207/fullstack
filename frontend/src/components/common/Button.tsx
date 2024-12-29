import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  /* Size variants */
  ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
      case 'large':
        return `
          padding: 16px 24px;
          font-size: 18px;
        `;
      default:
        return `
          padding: 12px 20px;
          font-size: 16px;
        `;
    }
  }}

  /* Style variants */
  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'secondary':
        return `
          background: #6B7280;
          color: white;
          border: none;
          &:hover {
            background: #4B5563;
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: #3B82F6;
          border: 1px solid #3B82F6;
          &:hover {
            background: #EFF6FF;
          }
        `;
      default:
        return `
          background: #3B82F6;
          color: white;
          border: none;
          &:hover {
            background: #2563EB;
          }
        `;
    }
  }}

  /* Full width */
  ${({ fullWidth }) =>
    fullWidth &&
    `
    width: 100%;
  `}

  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button; 