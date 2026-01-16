// Type declarations for ui-library components
import { InputHTMLAttributes, SelectHTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export interface IconProps {
    name: 'home' | 'user' | 'settings' | 'search';
    size?: number;
}

// InputProps extends standard HTML input attributes without additional properties
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    // Inherits all standard input attributes
}

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    placeholder?: string;
}
