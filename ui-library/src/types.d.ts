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


// InputProps is a type alias for standard HTML input attributes
export type InputProps = InputHTMLAttributes<HTMLInputElement>;


export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    placeholder?: string;
}

export interface RadioButtonProps {
    name: string;
    value: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    disabled?: boolean;
}

export interface CheckboxProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    name?: string;
    value?: string;
    disabled?: boolean;
}

export interface TextFieldProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    error?: string;
    helperText?: string;
    disabled?: boolean;
    required?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
}

