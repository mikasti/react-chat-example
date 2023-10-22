import { userProfileMock, userMessagesMock } from './serverResponsesMock';
import { IUser } from '../types/MainTypes';
import { IDialog, IMessage } from '../types/ChatTypes';

interface IChatApi {
    getMessages: () => Promise<IDialog>,
    getMessagesByUId: (uid: string) => Promise<IDialog>,
}
const responseTimeMs: number = 100;

// TODO Rewrite all API on ReduxQuery

const mockChatApi: IChatApi = {
    getMessages: async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(userMessagesMock), responseTimeMs);
        })
    },
    getMessagesByUId: async (uid: string) => {
        return new Promise((resolve) => {
            const filteredMessages: IMessage[] = userMessagesMock.messages.filter((message) => message.author.userUID === uid);
            setTimeout(() => resolve({ messages: filteredMessages }), responseTimeMs);
        })
    },
};

export default mockChatApi;