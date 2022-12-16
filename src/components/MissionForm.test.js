import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MissionForm from './MissionForm';

test('MissionForm renders correctly', () => {
     render(<MissionForm />);
});

test(`renders the mssage when isFetchingData is true`, () => {
     render(<MissionForm isFetchingData={true} />);
     const value = screen.queryByText(/we are fetching data/i);
     expect(value).not.toBeNull();
});

test('render button when isFetchingData is false', () => {
     render(<MissionForm isFetchingData={false} />);
     const value = screen.queryByRole('button');
     expect(value).not.toBeNull();
});

test('calls getData when the button is pressed', () => {
     const mockGetData = jest.fn(() => { });
     render(<MissionForm getData={mockGetData} />);
     const button = screen.getByRole('button');
     for (let i = 0; i < 2; i += 1) {
          fireEvent.click(button);
     }
     console.log(mockGetData.mock);
     expect(mockGetData.mock.calls).toHaveLength(2);
})