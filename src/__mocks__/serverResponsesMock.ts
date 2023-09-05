import { IMessage, IDialog } from '../types/ChatTypes';
import { IUser } from '../types/MainTypes';

export const userProfileMock: IUser = {
  userUID: '007',
  name: 'Michael Ivanov',
  bio: 'Frontend Developer',
  isOnline: true,
  nick: '@michael',
  eMail: 'michael@test.com',
  phone: '+357 77 777 777',
};

export const assistantProfileMock: IUser = {
  userUID: '008',
  name: 'Jamie Olivera',
  bio: 'Support engenier',
  isOnline: true,
  nick: '@jamieoliver',
  eMail: 'jamieoliver@test.com',
  phone: '+357 88 888 888',
};

const assistantMessage: IMessage = {
  messageUID: '1',
  timestamp: '08:16 AM', // time when message created
  author: assistantProfileMock,
  content: {
    message: `Good morning! How can I help you today?`,
  },
};

const userMessage: IMessage = {
  messageUID: '2',
  timestamp: '08:18 AM', // time when message created
  author: userProfileMock,
  content: {
    message: `I have a question about return policy for a product that I purchased.`,
  },
}


export const userMessagesMock: IDialog = {
  messages: [assistantMessage, userMessage]
}
