import React, { useState, useEffect } from 'react';
import { IMessage } from '../../../types/ChatTypes';
import UserChat from '../../organisms/UserChat';
import mockChatApi from '../../../__mocks__/mockChatApi';

interface IProps {
    uid: string,
}

const OnlyUserMessages: React.FC<IProps> = ({ uid }) => {
    const [onlyUserMessage, setOnlyUserMessage] = useState<IMessage[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        mockChatApi.getMessagesByUId(uid)
            .then((data) => {
                if (data?.messages) {
                    setOnlyUserMessage(data.messages)
                }
            })
            .catch((err: string) => {
                setError(err);
            })
    }, [uid]);

    if (error) {
        return <h2>{`Error :(`}</h2>
    }

    return (
        <UserChat
            profileUId={uid}
            messages={onlyUserMessage}
        />
    )
}

export default OnlyUserMessages;