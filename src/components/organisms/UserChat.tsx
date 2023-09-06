import React, { useEffect, useState } from 'react';
import { IMessage } from '../../types/ChatTypes';
import { IUser } from '../../types/MainTypes';
import ShowComponent from './ShowComponent';
import UserChatMessages from './UserChatMessages';
import Modal from '../molecules/Modal';
import UserChatMessage from '../molecules/UserChatMessage';

interface IUserChat {
    userUID: string,
    messages: IMessage[] | null,
    isShowAddMessage: boolean,
    onProfileClick?: (isShowProfile: IUser) => void,
    onCloseMessageAdd: () => void,
    onPostMessage: (text: string) => void,
}
const UserChat: React.FC<IUserChat> = ({ userUID, messages, isShowAddMessage, onProfileClick, onCloseMessageAdd, onPostMessage }) => {

    return (
        <>
            {messages &&
                <ShowComponent renderComponent='Chat'>
                    <UserChatMessages
                        profileUId={userUID}
                        messages={messages}
                        onProfileClick={onProfileClick}
                    />
                </ShowComponent>
            }
            {isShowAddMessage &&
                <Modal onClose={onCloseMessageAdd}>
                    <UserChatMessage onSendMessage={onPostMessage} />
                </Modal>
            }
        </>
    )
};

export default UserChat;