// Input Component - A simple text input field
// This component accepts standard input props like placeholder, value, and onChange

import React from 'react';
import './Input.css';

interface InputProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'email' | 'password';
}

export const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    onChange,
    type = 'text'
}) => {
    return (
        <input
            className="ui-input"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};
