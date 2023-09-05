import React from 'react';
import { IIconProps } from '../../../types/MainTypes';
import '../../../assets/css/common/icons/back-arrow-icon.scss';

const BackArrowIcon: React.FC<IIconProps> = ({ className = 'back-arrow-icon', onClick }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <circle cx="12" cy="12" r="12" className="primary" />
            <path
                className="secondary"
                fillRule="evenodd" clipRule="evenodd" d="M15.5277 5.29882C15.8544 5.6625 15.8166 6.21529 15.4432 6.53351L9.02951 12L15.4432 17.4665C15.8166 17.7847 15.8544 18.3375 15.5277 18.7012C15.201 19.0649 14.6335 19.1017 14.2602 18.7835L7.46014 12.9878C6.84662 12.4648 6.84662 11.5352 7.46014 11.0122L14.2602 5.21651C14.6335 4.89829 15.201 4.93514 15.5277 5.29882Z" />
        </svg>


    );
};

export default BackArrowIcon;