// RadioButton Component - A customizable radio button input
// Can be used individually or as part of a radio group

import React from 'react';
import './RadioButton.css';

export interface RadioButtonProps {
    name: string;
    value: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    disabled?: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
    name,
    value,
    checked,
    onChange,
    label,
    disabled = false,
}) => {
    return (
        <label className={`ui-radio ${disabled ? 'ui-radio--disabled' : ''}`}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="ui-radio__input"
            />
            <span className="ui-radio__custom"></span>
            <span className="ui-radio__label">{label}</span>
        </label>
    );
};
