import { rest } from 'msw';
import { userProfileMock } from './serverResponsesMock';

export const handlers = [
    rest.post('my.messages.pet.project/profile', (req, res, ctx) => {
        return res(
            ctx.json(userProfileMock),
        )
    }),
]