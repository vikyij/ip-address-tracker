import {
  render,
  cleanup,
  waitFor,
  fireEvent,
  screen,
} from '@testing-library/react'
import axiosMock from 'axios'
import { act } from 'react-dom/test-utils'
import App from '../App'

// cleanup everything after each test to avoid memory leaks
afterEach(cleanup)
jest.mock('axios')

test('should return data from the api onload', async () => {
  await act(async () => {
    axiosMock.get.mockResolvedValue({
      data: {
        ip: '142.250.72.142',
        isp: 'Google LLC',
        location: {
          country: 'US',
          region: 'California',
          timezone: '-08:00',
          lat: 34.05223,
          lng: -118.24368,
        },
      },
    })

    render(<App />)

    await waitFor(() => expect(axiosMock.get).toHaveBeenCalledTimes(1))
  })
})

test('should return data from the api on search', async () => {
  await act(async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        ip: '142.250.72.142',
        isp: 'Google LLC',
        location: {
          country: 'US',
          region: 'California',
          timezone: '-08:00',
          lat: 34.05223,
          lng: -118.24368,
        },
      },
    })

    render(<App />)

    await screen.findByText('Google LLC')

    axiosMock.get.mockResolvedValue({
      data: {
        ip: '197.210.29.251',
        isp: 'MTN NIGERIA',
        location: {
          country: 'NG',
          region: 'Lagos State',
          timezone: '-08:00',
          lat: 50,
          lng: -150,
        },
      },
    })
    const input = await screen.findByTestId('input')
    const search = await screen.findByTestId('search')
    fireEvent.change(input, { target: { value: '142.250.72.142' } })
    fireEvent.click(search)
    const findText = await screen.findByText('MTN NIGERIA')
    expect(findText).toBeTruthy()
  })
})
