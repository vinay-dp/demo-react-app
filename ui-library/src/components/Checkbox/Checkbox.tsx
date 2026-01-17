// Checkbox Component - A customizable checkbox input
// Can be used individually or as part of a checkbox group

import React from 'react';
import './Checkbox.css';

export interface CheckboxProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    name?: string;
    value?: string;
    disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    onChange,
    label,
    name,
    value,
    disabled = false,
}) => {
    return (
        <label className={`ui-checkbox ${disabled ? 'ui-checkbox--disabled' : ''}`}>
            <input
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="ui-checkbox__input"
            />
            <span className="ui-checkbox__custom">
                <svg className="ui-checkbox__checkmark" viewBox="0 0 12 10" fill="none">
                    <path
                        d="M1 5L4.5 8.5L11 1.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
            <span className="ui-checkbox__label">{label}</span>
        </label>
    );
};
