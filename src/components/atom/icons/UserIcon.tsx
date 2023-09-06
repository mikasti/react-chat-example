import React from 'react';
import { IIconProps } from '../../../types/MainTypes';
import '../../../assets/css/common/icons/user-icon.scss';

const UserIcon: React.FC<IIconProps> = ({ className = 'user-icon', onClick }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <path className="primary" fillRule="evenodd" clipRule="evenodd" d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7ZM16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM7 19C7 16.2386 9.23858 14 12 14C14.7614 14 17 16.2386 17 19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19C19 15.134 15.866 12 12 12C8.13401 12 5 15.134 5 19C5 19.5523 5.44772 20 6 20C6.55228 20 7 19.5523 7 19Z" />
        </svg>
    );
};

export default UserIcon;