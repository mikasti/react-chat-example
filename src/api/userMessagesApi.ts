import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../types/MainTypes';

const messagesApi = createApi({
    reducerPath: 'messagesApi',
    tagTypes: ['profile'],
    baseQuery: fetchBaseQuery({ baseUrl: 'my.messages.pet.project' }),
    refetchOnFocus: false,
    refetchOnReconnect: false,
    endpoints: (builder) => ({
        getProfile: builder.query<IUser, void>({
            query: () => ({
                url: '/profile',
                method: 'Post',
            }),
            providesTags: ['profile'],
        }),
    }),
})

export const { useGetProfileQuery } = messagesApi;

export default messagesApi;