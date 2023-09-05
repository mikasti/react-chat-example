import React, { useContext, useEffect } from "react";
import { IMessage } from "../../types/ChatTypes";
import LoaderComp from "../molecules/LoaderComp";
import UserMessage from "../molecules/userChat/UserMessage";
import AppContext from "../context/AppContext";
import MakeThemeClassName from "../helpers/MakeThemeClassname";
import '../../assets/css/userChat/user-message.scss';
import { IUser } from "../../types/MainTypes";

interface IUserChat {
    profileUId: string,
    messages: IMessage[] | null,
    onProfileClick?: (isShowProfile: IUser) => void,
}

const UserChat: React.FC<IUserChat> = ({ messages, profileUId, onProfileClick }) => {
    const { isDarkTheme, changeShowComponent } = useContext(AppContext);

    useEffect(() => {
        changeShowComponent('Chat');
    }, []);

    const chatBackgroundClassName = MakeThemeClassName('chat-background', isDarkTheme);

    if (!messages) {
        return <LoaderComp loadingText="Fetching messages..." />;
    }

    const messagesBody = (messages.length < 1) ?
        <div className="user-message-empty">{`We did not find any message :(`}</div> :
        messages.map((mes) => {
            const handleProfileClick = () => {
                if (onProfileClick) {
                    onProfileClick(mes.author)
                }
            }
            return (<UserMessage
                key={mes.messageUID}
                name={mes.author.name}
                message={mes.content.message}
                time={mes.timestamp}
                isAuthor={mes.author.userUID === profileUId}
                onProfileClick={handleProfileClick}
            />);
        });

    return (
        <div className={chatBackgroundClassName}>
            {messagesBody}
        </div>
    )
};

export default UserChat;