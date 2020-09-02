import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Switch from './Switch'

import { ReactComponent as FlashIcon } from '../Demo/assets/flash.svg'
import { ReactComponent as FlashOffIcon } from '../Demo/assets/flash-off.svg'

const theme = {
  switch: {
    background: 'grey',
    backgroundAccent: 'black',
    // ...
  }
}

describe('Switch', () => {
  it('should render on the screen', () => {
    render(
      <ThemeProvider theme={theme}>
        <Switch
          label='Turn on speed mode'
          activeStateIcon={<FlashIcon />}
          inactiveStateIcon={<FlashOffIcon />}
        />
      </ThemeProvider>)

    const _switch = screen.getByRole('switch')
    expect(_switch).toBeInTheDocument()
  })

  it('should render a label when one is provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <Switch label='Do not disturb' />
      </ThemeProvider>)

    const label = screen.getByText('Do not disturb')
    expect(label).toBeInTheDocument()
  })

  it('should toggle state when clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <Switch label='Show bookmarks bar' />
      </ThemeProvider>)

    const _switch = screen.getByRole('switch')
    const label = screen.getByText('Show bookmarks bar')

    expect(_switch).toHaveAttribute('aria-checked', 'false')
    userEvent.click(_switch)
    expect(_switch).toHaveAttribute('aria-checked', 'true')

    userEvent.click(label)
    expect(_switch).toHaveAttribute('aria-checked', 'false')
  })

  it('should be non-interactive if `disabled` is provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <Switch disabled />
      </ThemeProvider>)

    const _switch = screen.getByRole('switch')
    expect(_switch).toBeDisabled()
  })

  it('should start with an active state if `defaultActive` is provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <Switch defaultActive />
      </ThemeProvider>)

    const _switch = screen.getByRole('switch')
    expect(_switch).toHaveAttribute('aria-checked', 'true')
  })
})
