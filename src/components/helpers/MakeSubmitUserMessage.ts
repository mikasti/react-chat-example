import { IUser } from "../../types/MainTypes";
import { IMessage } from "../../types/ChatTypes";

const MakeSubmitUserMessage = (profile: IUser, message: string): IMessage => {
    const newMessage: IMessage = {
        messageUID: Math.random().toString(),
        timestamp: '08:19 AM', // time when message created
        author: profile,
        content: {
            message,
        },
    };

    return newMessage;
};

export default MakeSubmitUserMessage;