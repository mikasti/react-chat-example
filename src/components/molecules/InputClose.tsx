import React from 'react';
import Input, { IInputProps } from '../atom/common/Input';
import Close from '../atom/common/Close';

interface IInputCloseProps extends IInputProps {
    onClose?: () => void,
}

const InputClose: React.FC<IInputCloseProps> = (({
    value, className, type, placeholder, onChange, onClose
}) => {
    const isShowCloseButton = onClose && value && value?.length > 0;
    return (
        <>
            <Input
                value={value}
                className='search-input'
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
            {isShowCloseButton && <Close className='' onClose={onClose} />}
        </>
    )
})

export default InputClose;