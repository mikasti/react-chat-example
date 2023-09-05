import React from 'react';
import { IIconProps } from '../../../types/MainTypes';
import '../../../assets/css/common/icons/search-icon.scss';

const SearchIcon: React.FC<IIconProps> = ({ className = 'icon-search ', onClick }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} onClick={onClick}>
            <circle cx="12" cy="12" r="12" className="primary" />
            <path
                className="secondary"
                fillRule="evenodd" clipRule="evenodd" d="M15.0909 11.303C15.0909 13.395 13.395 15.0909 11.303 15.0909C9.21104 15.0909 7.51515 13.395 7.51515 11.303C7.51515 9.21104 9.21104 7.51515 11.303 7.51515C13.395 7.51515 15.0909 9.21104 15.0909 11.303ZM14.0258 15.8547C13.2299 16.3318 12.2985 16.6061 11.303 16.6061C8.37425 16.6061 6 14.2318 6 11.303C6 8.37425 8.37425 6 11.303 6C14.2318 6 16.6061 8.37425 16.6061 11.303C16.6061 12.6876 16.0755 13.9482 15.2065 14.8927L18.2781 17.9643C18.574 18.2602 18.574 18.7398 18.2781 19.0357C17.9823 19.3315 17.5026 19.3315 17.2067 19.0357L14.0258 15.8547Z" />
        </svg>
    );
};

export default SearchIcon;