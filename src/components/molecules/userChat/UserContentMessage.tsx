import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import makeThemeClassName from '../../helpers/makeThemeClassname';

export interface IUserContentMessage {
    name: string,
    message: string,
    time: string,
    isAuthor: boolean,
}

const UserContentMessage: React.FC<IUserContentMessage> = React.memo(({ name, message, time, isAuthor }) => {
    const { isDarkTheme } = useContext(AppContext);
    const baseClassname = 'user-message';
    const authorClassName = makeThemeClassName(`${baseClassname}-author`, isDarkTheme);
    const textClassName = makeThemeClassName(`${baseClassname}-text`, isDarkTheme);
    const timeClassName = makeThemeClassName(`${baseClassname}-time`, isDarkTheme);

    return (
        <div className={`${baseClassname}-content`}>
            <div className={isAuthor ? `${authorClassName} ${baseClassname}-author-reverse` : `${authorClassName}`}>
                {name}
            </div>
            <div className={isAuthor ? `${textClassName} ${baseClassname}-text-reverse` : `${textClassName}`}>
                {message}
            </div>
            <div className={isAuthor ? `${timeClassName} ${baseClassname}-time-reverse` : `${timeClassName}`}>
                {time}
            </div>
        </div>
    )
});

export default UserContentMessage;