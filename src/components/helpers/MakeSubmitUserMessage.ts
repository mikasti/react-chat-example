import { IUser } from '../../types/MainTypes';
import { IMessage } from '../../types/ChatTypes';

const makeSubmitUserMessage = (profile: IUser, message: string): IMessage => {
    const newMessage: IMessage = {
        messageUID: Math.random().toString(),
        timestamp: new Date().toLocaleTimeString().substring(0, 5),
        author: profile,
        content: {
            message,
        },
    };

    return newMessage;
};

export default makeSubmitUserMessage;