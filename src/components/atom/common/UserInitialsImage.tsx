import React, { useMemo } from 'react';

export interface IUserInitials {
    name: string,
    imgClassName: string,
    onUserClick?: () => void,
}

const UserInitialsImage: React.FC<IUserInitials> = React.memo(({ name, imgClassName, onUserClick }) => {
    const initials = useMemo(() => {
        const [firstName = '', secondName = ''] = name.split(' ');
        const firstLetter = firstName[0]?.toUpperCase() || 'U';
        const secondLetter = secondName[0]?.toUpperCase() || '';
        return `${firstLetter}${secondLetter}`;
    }, [name]);

    return (
        <div className={imgClassName} onClick={onUserClick}>{initials}</div>
    );
});

export default UserInitialsImage;