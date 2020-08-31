import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getRandomHexString } from './utils'

const StyledSwitch = styled.div`
  display: ${({ inline }) => inline ? 'inline-flex' : 'flex'};
  align-items: center;
  flex-direction: ${({ labelAlignment }) => labelAlignment === 'right'
    ? 'row'
    : 'row-reverse'};

  opacity: ${({ disabled }) => disabled ? '0.6' : '1'};

  label {
    font-size: 1.8rem;
    ${({ labelAlignment }) => labelAlignment === 'right'
      ? 'margin-left: 2rem;'
      : 'margin-right: 2rem;'}
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

function Switch(props) {
  const {
    defaultActive = false,
    disabled = false,
    inline = false,
    activeStateIcon,
    inactiveStateIcon,
    label,
    labelAlignment = 'left',
    ariaLabel,
    onChange
  } = props

  const [active, setActive] = useState(defaultActive)
  const switchID = `switch-${getRandomHexString(6)}`

  useEffect(() => {
    !disabled
      && onChange
      && onChange(active)
  })

  return (
    <StyledSwitch
      disabled={disabled}
      inline={inline}
      labelAlignment={labelAlignment}
    >
      <SwitchButton
        active={active}
        onClick={() => setActive(!active)}
        role='switch'
        aria-label={ariaLabel || label}
        aria-checked={active}
        disabled={disabled}
        id={switchID}
      >
        <SwitchIndicator>
          {active ? activeStateIcon : inactiveStateIcon}
        </SwitchIndicator>
      </SwitchButton>

      {label && <label htmlFor={switchID}>{label}</label>}
    </StyledSwitch>
  )
}

Switch.propTypes = {
  defaultActive: PropTypes.bool,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  activeStateIcon: PropTypes.element,
  inactiveStateIcon: PropTypes.element,
  labelAlignment: PropTypes.oneOf(['left', 'right']),
  label: PropTypes.string,
  ariaLabel: PropTypes.string,
  onChange: PropTypes.func
}

export default Switch
