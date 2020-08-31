import React from 'react'
import styled from 'styled-components'

import Switch from '../Switch'

import { ReactComponent as FlashIcon } from './assets/flash.svg'
import { ReactComponent as FlashOffIcon } from './assets/flash-off.svg'

const StyledDemo = styled.div`
  color: #333333;
`

function Demo() {
  return (
    <StyledDemo>
      <Switch
        label='Switch'
        activeStateIcon={<FlashIcon />}
        inactiveStateIcon={<FlashOffIcon />}
        onChange={(isActive) => console.log(`I'm ${isActive ? 'truthy' : 'falsy'}.`)}
      />
    </StyledDemo>
  )
}

export default Demo
