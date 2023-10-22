import { useState, useEffect } from 'react';
import mockChatApi from '../../__mocks__/mockChatApi';
import { IMessage } from '../../types/ChatTypes';
import { IUser } from '../../types/MainTypes';

interface IUseGetMessages {
    isLoading: boolean,
    userMessages: IMessage[],
    error: string | null,
}

const useGetMessages = (user: IUser | null): IUseGetMessages => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [userMessages, setUserMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        if (user?.userUID) {
            mockChatApi.getMessages()
                .then((data) => {
                    if (data) {
                        setUserMessages(data.messages);
                        setIsLoading(false);
                    }
                }).catch((err) => {
                    setError(err);
                    setIsLoading(false);
                })
        }
    }, [user]);

    return {
        isLoading,
        userMessages,
        error,
    }
}

export default useGetMessages;
