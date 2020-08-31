import React, { useState } from 'react'
import styled from 'styled-components'

const StyledSwitch = styled.div`
  display: flex;
  align-items: center;

  label {
    font-size: 1.8rem;
    margin-left: 1.2rem;
  }
`

const SwitchButton = styled.button`
  height: 4rem;
  width: 8rem;

  display: flex;
  align-items: center;
  justify-content: ${({ active }) => active ? 'flex-end' : 'flex-start'};

  background: ${({ active }) => active ? '#1f6eff' : '#ccdaf4'};
  border: none;
  border-radius: 4rem;
  outline: none;

  svg {
    height: 1.6rem;
    width: 1.6rem;
    fill: ${({ active }) => active ? '#1f6eff' : '#ccdaf4'};
  }
`

const SwitchIndicator = styled.span`
  height: 3.2rem;
  width: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  border-radius: 50%;
  margin: 0 0.4rem;
`

function Switch({ activeStateIcon, inactiveStateIcon }) {
  const [active, setActive] = useState(false)

  return (
    <StyledSwitch>
      <SwitchButton
        active={active}
        onClick={() => setActive(!active)}
        role='switch'
        aria-checked={active}
        id='switch'
      >
        <SwitchIndicator>
          {active ? activeStateIcon : inactiveStateIcon}
        </SwitchIndicator>
      </SwitchButton>

      <label htmlFor='switch'>Switch</label>
    </StyledSwitch>
  )
}

export default Switch
