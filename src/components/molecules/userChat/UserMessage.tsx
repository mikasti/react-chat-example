import React from 'react';
import UserInitialsImage from '../../atom/common/UserInitialsImage';
import UserContentMessage, { IUserContentMessage } from './UserContentMessage';


interface IUserMessage extends IUserContentMessage {
    photo?: string,
    onProfileClick?: () => void,
}

const UserMessage: React.FC<IUserMessage> = React.memo((
    { name, message, time, isAuthor, onProfileClick }
) => {
    const messageWrapperClassname = isAuthor ? 'user-message-wrapper-reverse' : 'user-message-wrapper';
    return (
        <div className={messageWrapperClassname}>
            <UserInitialsImage name={name} imgClassName={'user-message-img'} onUserClick={onProfileClick} />
            <UserContentMessage name={name} message={message} time={time} isAuthor={isAuthor} />
        </div>
    );
});

export default UserMessage;