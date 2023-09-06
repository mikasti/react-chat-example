import { useState, useEffect } from 'react';
import { IMessage } from '../../types/ChatTypes';
import mockChatApi from '../../__mocks__/mockChatApi';

interface IUseGetOnlyMessages {
    isLoading: boolean,
    userMessages: IMessage[],
    error: string | null,
}

const useGetOnlyUserMessages = (uid: string): IUseGetOnlyMessages => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [userMessages, setUserMessages] = useState<IMessage[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        mockChatApi.getMessagesByUId(uid)
            .then((data) => {
                if (data?.messages) {
                    setUserMessages(data.messages);
                    setIsLoading(false);
                }
            })
            .catch((err: string) => {
                setError(err);
                setIsLoading(false);
            })
    }, []);

    return {
        isLoading,
        userMessages,
        error,
    }
};

export default useGetOnlyUserMessages;