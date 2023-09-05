import React from 'react';
import '../../../assets/css/common/input.scss';

export interface IInputProps {
    className?: string,
    placeholder?: string,
    value?: string;
    type?: 'input' | 'search',
    onChange: (value: string) => void;
    onClear?: () => void;
}

const Input: React.FC<IInputProps> = ({
    value, className = 'input', type = 'input', placeholder = '', onChange
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    );
};

export default Input;