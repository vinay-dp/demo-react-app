// TextField Component - An advanced input field with label, error, and helper text
// Features: label, placeholder, error state, helper text, icons, disabled state
// Example: <TextField label="Email" error="Invalid email" helperText="Enter your email" />

import React from 'react';
import './TextField.css';

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

export const TextField: React.FC<TextFieldProps> = ({
    label,
    placeholder,
    value,
    onChange,
    type = 'text',
    error,
    helperText,
    disabled = false,
    required = false,
    fullWidth = false,
    icon,
}) => {
    const hasError = Boolean(error);

    return (
        <div className={`ui-textfield ${fullWidth ? 'ui-textfield--full-width' : ''}`}>
            {label && (
                <label className="ui-textfield__label">
                    {label}
                    {required && <span className="ui-textfield__required">*</span>}
                </label>
            )}

            <div className={`ui-textfield__input-wrapper ${hasError ? 'ui-textfield__input-wrapper--error' : ''}`}>
                {icon && <span className="ui-textfield__icon">{icon}</span>}
                <input
                    className={`ui-textfield__input ${icon ? 'ui-textfield__input--with-icon' : ''}`}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                />
            </div>

            {(error || helperText) && (
                <div className={`ui-textfield__message ${hasError ? 'ui-textfield__message--error' : ''}`}>
                    {error || helperText}
                </div>
            )}
        </div>
    );
};
