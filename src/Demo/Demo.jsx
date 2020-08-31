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
        activeStateIcon={<FlashIcon />}
        inactiveStateIcon={<FlashOffIcon />}
      />
    </StyledDemo>
  )
}

export default Demo
