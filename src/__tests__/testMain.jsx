import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import UserCard from '../components/organisms/UserCard';
import { userProfile } from '../__mocks__/serverResponsesMock';

describe('Render App', () => {
  it('App renders correctly', () => {
    const Component = render(<App />);
    expect(Component).toMatchSnapshot();
  });
});

describe('Render <Molecules>', () => {
  it('UserCard renders correctly', () => {
    const Component = render(<UserCard profile={userProfile} />);
    expect(Component).toMatchSnapshot();
  });
  it('Render UserCard and check rendered data', () => {
    render(<UserCard profile={userProfile} />);
    const name = screen.getByText(userProfile.name);
    const nick = screen.getByText(userProfile.nick);
    expect(name && nick).toBeInTheDocument();
  });
});
