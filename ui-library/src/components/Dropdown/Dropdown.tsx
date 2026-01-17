// Dropdown Component - A simple select dropdown
// This component accepts options as an array and handles selection

import React from 'react';
import './Dropdown.css';

interface DropdownProps {
    options: string[];
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
    options,
    value,
    onChange,
    placeholder = 'Select an option'
}) => {
    return (
        <select
            className="ui-dropdown"
            value={value}
            onChange={onChange}
        >
            <option value="" disabled>
                {placeholder}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
