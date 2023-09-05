import React, { useState, useCallback, useContext } from 'react';
import TextArea from '../atom/common/TextArea';
import Button from '../atom/common/Button';
import ThemeContext from '../context/AppContext';
import MakeThemeClassName from '../helpers/MakeThemeClassname';

interface IUserMessage {
    onSendMessage: (text: string) => void,
}

const UserChatMessage: React.FC<IUserMessage> = ({ onSendMessage }) => {
    const [userText, setText] = useState<string>('');
    const [isMaxLengthExceeded, setIsMaxLengthExceeded] = useState<boolean>(false);
    const { isDarkTheme } = useContext(ThemeContext);

    const handleSetText = useCallback((newText: string) => {
        if (newText.length > 200) {
            setIsMaxLengthExceeded(true);
        } else if (isMaxLengthExceeded && newText.length <= 200) {
            setIsMaxLengthExceeded(false);
        }
        setText(newText);
    }, [isMaxLengthExceeded]);

    const handleSubmitMessage = () => {
        if (userText.length <= 200) {
            onSendMessage(userText);
            console.log('handleSubmitMessage');
        }
    }

    const counterErrClassName = isMaxLengthExceeded ? 'user-chat-message-counter--error' : 'user-chat-message-counter';
    const counterClassName = MakeThemeClassName(counterErrClassName, isDarkTheme);

    return (
        <>
            <TextArea
                text={userText}
                className='text-area--modal'
                rows={5}
                onTextChange={handleSetText}
                onSubmit={handleSubmitMessage}
            />
            <div className={counterClassName}>{`${userText.length}/200`}</div>
            <Button
                className='user-chat-message-submit-button'
                label='Send message'
                disabled={isMaxLengthExceeded}
                onClick={handleSubmitMessage}
            />
        </>
    )

};

export default UserChatMessage;