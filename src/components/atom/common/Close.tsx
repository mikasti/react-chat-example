import React from 'react';

interface IProps {
    className?: string,
    onClose?: () => void
}

const Close: React.FC<IProps> = ({ className, onClose }) => {
    return (
        <div className={className} onClick={onClose}>&times;</div>
    );
}

export default Close;