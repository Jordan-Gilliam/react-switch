import React from 'react'
import styled from 'styled-components'

import Switch from '../Switch'

import { ReactComponent as FlashIcon } from './assets/flash.svg'
import { ReactComponent as FlashOffIcon } from './assets/flash-off.svg'

const StyledDemo = styled.div`
  color: #333333;

  div {
    margin: 2rem 0;
  }
`

function Demo() {
  return (
    <StyledDemo>
      <Switch
        label='Turn on speed mode'
        activeStateIcon={<FlashIcon />}
        inactiveStateIcon={<FlashOffIcon />}
        onChange={(isActive) => console.log(`I'm ${isActive ? 'truthy' : 'falsy'}.`)}
      />
      <Switch label='Do not disturb' />
      <Switch
        disabled
        label='Show bookmarks bar'
        activeStateIcon={<FlashIcon />}
        inactiveStateIcon={<FlashOffIcon />}
      />
    </StyledDemo>
  )
}

export default Demo
