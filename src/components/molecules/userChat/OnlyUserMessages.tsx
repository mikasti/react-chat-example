import React from 'react';
import useGetOnlyUserMessages from '../../hooks/useGetOnlyUserMessages';
import LoaderComp from '../LoaderComp';
import UserChatMessages from '../../organisms/UserChatMessages';

interface IProps {
    uid: string,
}

const OnlyUserMessages: React.FC<IProps> = ({ uid }) => {
    const { userMessages, error, isLoading } = useGetOnlyUserMessages(uid);

    if (isLoading) {
        return <LoaderComp loadingText='Loading user messages...' />
    }

    if (error) {
        return <h2>{`Error :(`}</h2>
    }

    return (
        <UserChatMessages
            profileUId={uid}
            messages={userMessages}
        />
    )
};

export default OnlyUserMessages;