import React from 'react';
import '../../../assets/css/common/text-area.scss';

interface IProps {
    text: string,
    onTextChange: (currentText: string) => void,
    onSubmit?: (currentText: string) => void,
    rows?: number,
    className?: string,
}
const TextArea: React.FC<IProps> = ({ text, onTextChange, onSubmit, className = 'text-area', rows = 3 }) => {
    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        if (onTextChange) {
            onTextChange(value);
        }
    }

    return (
        <textarea
            className={className}
            rows={rows}
            value={text}
            onChange={onChange}
        />
    );
}

export default TextArea;