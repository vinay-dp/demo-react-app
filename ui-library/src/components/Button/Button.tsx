// Button Component - A simple reusable button
// This component accepts children (button text) and an onClick handler

// Button Component - A reusable button with primary and secondary variants
// Supports onClick handlers and custom children content
// Example: <Button onClick={handleClick}>Click me</Button>

import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary'
}) => {
  return (
    <button
      className={`ui-button ui-button--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
