import React, { useMemo } from "react";

export interface IUserInitials {
    name: string,
    imgClassName: string,
    onUserClick?: () => void,
}

const UserInitialsImage: React.FC<IUserInitials> = ({ name, imgClassName, onUserClick }) => {
    const initials = useMemo(() => {
        const arr = name.split(' ');
        const firstLetter = (arr[0] && arr[0][0]?.toUpperCase()) || 'U';
        const secondLetter = (arr[1] && arr[1][0]?.toUpperCase()) || '';
        return `${firstLetter}${secondLetter}`;
    }, [name]);

    return (
        <div className={imgClassName} onClick={onUserClick}>{initials}</div>
    );
};

export default UserInitialsImage;