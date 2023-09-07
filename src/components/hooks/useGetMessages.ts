import React, { useState, useEffect, useCallback } from 'react';
import mockChatApi from '../../__mocks__/mockChatApi';
import { IMessage } from '../../types/ChatTypes';
import { IUser } from '../../types/MainTypes';

interface IUseGetMessages {
    isLoading: boolean,
    currentUser: IUser | null,
    userMessages: IMessage[],
    error: string | null,
}

const useGetMessages = (): IUseGetMessages => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [userMessages, setUserMessages] = useState<IMessage[]>([]);
    const [currentUser, setCurrentUser] = useState<IUser | null>(null);

    useEffect(() => {
        setIsLoading(true);
        mockChatApi.getProfile()
            .then((profile) => {
                if (profile?.userUID) {
                    setCurrentUser(profile);
                    mockChatApi.getMessages()
                        .then((data) => {
                            setUserMessages(data.messages);
                            setIsLoading(false);
                        });
                }
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            })
    }, []);

    return {
        isLoading,
        currentUser,
        userMessages,
        error,
    }
}

export default useGetMessages;