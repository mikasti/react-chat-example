import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import UserCard from '../components/organisms/UserCard';
import { userProfileMock } from '../__mocks__/serverResponsesMock';

describe('Render App', () => {
  it('App renders correctly', () => {
    const Component = render(<App />);
    expect(Component).toMatchSnapshot();
  });
});

describe('Render <Molecules>', () => {
  it('UserCard renders correctly', () => {
    const Component = render(<UserCard profile={userProfileMock} />);
    expect(Component).toMatchSnapshot();
  });
  it('Render UserCard and check rendered data', () => {
    render(<UserCard profile={userProfileMock} />);
    const name = screen.getByText(userProfileMock.name);
    const nick = screen.getByText(userProfileMock.nick);
    expect(name && nick).toBeInTheDocument();
  });
});
