// Type declarations for ui-library components
import { FC, InputHTMLAttributes, SelectHTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export interface IconProps {
    name: 'home' | 'user' | 'settings' | 'search';
    size?: number;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    placeholder?: string;
}
