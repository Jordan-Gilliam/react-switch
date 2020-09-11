import React from 'react'
import { render, screen, wait } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Switch from './Switch'

describe('Switch', () => {
  it('should render on the screen', () => {
    render(
      <Switch
        label='Turn on speed mode'
        activeStateIcon={<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M194.82,496a18.36,18.36,0,0,1-18.1-21.53l0-.11L204.83,320H96a16,16,0,0,1-12.44-26.06L302.73,23a18.45,18.45,0,0,1,32.8,13.71c0,.3-.08.59-.13.89L307.19,192H416a16,16,0,0,1,12.44,26.06L209.24,489A18.45,18.45,0,0,1,194.82,496Z" /></svg>}
        inactiveStateIcon={<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M432,448a15.92,15.92,0,0,1-11.31-4.69l-352-352A16,16,0,0,1,91.31,68.69l352,352A16,16,0,0,1,432,448Z" /><path d="M431.5,204A16,16,0,0,0,416,192H307.19L335.4,37.63c.05-.3.1-.59.13-.89A18.45,18.45,0,0,0,302.73,23L210.15,137.46a4,4,0,0,0,.29,5.35l151,151a4,4,0,0,0,5.94-.31l60.8-75.16A16.37,16.37,0,0,0,431.5,204Z" /><path d="M301.57,369.19l-151-151a4,4,0,0,0-5.93.31L83.8,293.64A16.37,16.37,0,0,0,80.5,308,16,16,0,0,0,96,320H204.83L176.74,474.36l0,.11A18.37,18.37,0,0,0,209.24,489l92.61-114.46A4,4,0,0,0,301.57,369.19Z" /></svg>}
      />)

    const _switch = screen.getByRole('switch')
    expect(_switch).toBeInTheDocument()
  })

  it('should render a label when one is provided', () => {
    render(<Switch label='Do not disturb' />)

    const label = screen.getByText('Do not disturb')
    expect(label).toBeInTheDocument()
  })

  it('should toggle state when clicked', () => {
    render(<Switch label='Show bookmarks bar' />)

    const _switch = screen.getByRole('switch')
    const label = screen.getByText('Show bookmarks bar')

    expect(_switch).toHaveAttribute('aria-checked', 'false')
    userEvent.click(_switch)
    expect(_switch).toHaveAttribute('aria-checked', 'true')

    userEvent.click(label)
    expect(_switch).toHaveAttribute('aria-checked', 'false')
  })

  it('should be non-interactive if `disabled` is provided', () => {
    render(<Switch disabled />)

    const _switch = screen.getByRole('switch')
    expect(_switch).toBeDisabled()
  })

  it('should start with an active state if `defaultActive` is provided', () => {
    render(<Switch defaultActive />)

    const _switch = screen.getByRole('switch')
    expect(_switch).toHaveAttribute('aria-checked', 'true')
  })

  it('should call `onChange` correctly', async () => {
    const onChange = jest.fn()

    render(<Switch onChange={onChange} />)

    expect(onChange).toHaveBeenCalledWith(false)
    expect(onChange).toHaveBeenCalledTimes(1)

    const _switch = screen.getByRole('switch')

    userEvent.click(_switch)
    // await for `useEffect` to call `onChange`
    await wait(() => expect(onChange).toHaveBeenCalledWith(true))
    await wait(() => expect(onChange).toHaveBeenCalledTimes(2))
  })
})
