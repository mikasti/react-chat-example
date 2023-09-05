import React from "react";
import '../../../assets/css/common/text-area.scss';

interface IProps {
    text: string,
    onTextChange: (currentText: string) => void,
    onSubmit?: (currentText: string) => void,
    rows?: number,
    className?: string,
}
const TextArea: React.FC<IProps> = ({ text, onTextChange, onSubmit, className = 'text-area', rows = 3 }) => {
    const onEnter = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && onSubmit) {
            console.log(text);
            //onSubmit(text);
        }
    }

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
            onKeyDown={onEnter}
        />
    );
}

export default TextArea;