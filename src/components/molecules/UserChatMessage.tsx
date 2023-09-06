import React, { useState, useCallback, useContext } from 'react';
import TextArea from '../atom/common/TextArea';
import Button from '../atom/common/Button';
import AppContext from '../context/AppContext';
import MakeThemeClassName from '../helpers/MakeThemeClassname';

interface IUserMessage {
    onSendMessage: (text: string) => void,
}

const MAX_TEXT_LENGTH = 200;

const UserChatMessage: React.FC<IUserMessage> = React.memo(({ onSendMessage }) => {
    const [userText, setText] = useState<string>('');
    const [isMaxLengthExceeded, setIsMaxLengthExceeded] = useState<boolean>(false);
    const { isDarkTheme } = useContext(AppContext);

    const handleSetText = useCallback((newText: string) => {
        setIsMaxLengthExceeded(newText.length > MAX_TEXT_LENGTH);
        setText(newText);
    }, [isMaxLengthExceeded]);

    const handleSubmitMessage = () => {
        if (userText.length <= MAX_TEXT_LENGTH) {
            onSendMessage(userText);
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
            <div className={counterClassName}>{`${userText.length}/${MAX_TEXT_LENGTH}`}</div>
            <Button
                className='user-chat-message-submit-button'
                label='Send message'
                disabled={isMaxLengthExceeded}
                onClick={handleSubmitMessage}
            />
        </>
    )

});

export default UserChatMessage;