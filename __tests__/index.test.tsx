import React from 'react';
import { act, render, waitFor } from '@testing-library/react';

import AdBanner from './components/AdBanner';

it('Renders html inside component and executes scripts', async () => {
  const html = `<div>
    <p>random</p>
    <script>alert('from html')</script>
  </div>`;

  const mockedAlert = jest.fn();
  global.alert = mockedAlert;

  const rendered = render(<AdBanner html={html} />);

  expect(rendered.container.querySelector('div')!.innerHTML).toBe(html);

  await act(async () => {
    await waitFor(() => expect(mockedAlert).toHaveBeenCalledTimes(1));
  });
});
