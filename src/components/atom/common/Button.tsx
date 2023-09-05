import React from 'react';

interface IProps {
  className?: string,
  label: string,
  disabled?: boolean,
  onClick?: () => void,
}

const Button: React.FC<IProps> = ({ className, label, disabled, onClick }) => (
  <button
    type="button"
    className={className}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
