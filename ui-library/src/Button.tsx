// Button Component - A simple reusable button
// This component accepts children (button text) and an onClick handler

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
