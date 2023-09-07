import React, { useState, useCallback, useEffect, useContext } from 'react';
import MessageIcon from '../atom/icons/MessageIcon';
import UserIcon from '../atom/icons/UserIcon';
import '../../assets/css/userSearch/user-search.scss';
import Input from '../atom/common/Input';
import AppContext from '../context/AppContext';
import makeThemeClassName from '../helpers/makeThemeClassname';

export type TSearchMode = 'User' | 'Text';

interface IUserChatSearch {
    onSearch: (searchText: string, mode: TSearchMode) => void,
}
const UserChatSearch: React.FC<IUserChatSearch> = React.memo(({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentMode, setCurrentMode] = useState<TSearchMode>('Text');
    const { isDarkTheme } = useContext(AppContext);

    useEffect(() => {
        onSearch(searchQuery, currentMode);
    }, [currentMode, searchQuery])

    const handleSetSearchQuery = useCallback((value: string) => {
        setSearchQuery(value);
    }, [])

    const handleInputClear = useCallback(() => {
        setSearchQuery('');
    }, [])

    const handlseSetMode = useCallback((mode: TSearchMode) => {
        setCurrentMode(mode);
    }, []);

    const handleSetUserMode = useCallback(() => {
        handlseSetMode('User');
    }, []);

    const handleSetTextMode = useCallback(() => {
        handlseSetMode('Text');
    }, []);

    const placeHolder = (currentMode === 'Text') ? 'Search in messages' : 'Search by user name';
    const userIconClassName = (currentMode === 'User') ? 'user-icon user-icon--selected' : 'user-icon ';
    const messageIconClassName = (currentMode === 'Text') ? 'message-icon message-icon--selected' : 'message-icon ';
    const userSearchClassName = makeThemeClassName('user-search', isDarkTheme);

    return (
        <div className={userSearchClassName}>
            <div className='search-mode'>
                <UserIcon className={userIconClassName} onClick={handleSetUserMode} />
                <div className='search-mode-separator'></div>
                <MessageIcon className={messageIconClassName} onClick={handleSetTextMode} />
            </div>

            <Input
                value={searchQuery}
                className='search-input'
                type='search'
                placeholder={placeHolder}
                onChange={handleSetSearchQuery}
            />
        </div>
    )
});

export default UserChatSearch;