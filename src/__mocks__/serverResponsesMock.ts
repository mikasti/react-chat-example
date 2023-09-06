import MakeSubmitUserMessage from '../components/helpers/MakeSubmitUserMessage';
import { IDialog } from '../types/ChatTypes';
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

export const jamieProfileMock: IUser = {
  userUID: '008',
  name: 'Jamie Olivera',
  bio: 'Support engenier',
  isOnline: true,
  nick: '@jamieoliver',
  eMail: 'jamieoliver@test.com',
  phone: '+357 88 888 888',
};

export const gordonProfileMock: IUser = {
  userUID: '001',
  name: 'Gordon Ramsey',
  bio: 'Head engenier',
  isOnline: true,
  nick: '@gordonramsey',
  eMail: 'gordonramsey@test.com',
  phone: '+357 11 111 111',
};


export const userMessagesMock: IDialog = {
  messages: [
    MakeSubmitUserMessage(jamieProfileMock, 'Good morning! What can I make for you today?'),
    MakeSubmitUserMessage(gordonProfileMock, 'Make a normal breakfast!!!'),
    MakeSubmitUserMessage(jamieProfileMock, 'As usual?'),
    MakeSubmitUserMessage(gordonProfileMock, 'No, omelete, now!!!'),
    MakeSubmitUserMessage(userProfileMock, 'Harsh:('),
  ]
}
