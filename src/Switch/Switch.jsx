import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getRandomHexString } from './utils'

const StyledSwitch = styled.div`
  display: ${props => props.inline ? 'inline-flex' : 'flex'};
  align-items: center;
  flex-direction: ${props => props.labelAlignment === 'right'
    ? 'row'
    : 'row-reverse'};

  opacity: ${props => props.disabled ? '0.4' : '1'};

  label {
    font-size: 1.8rem;
    ${props => props.labelAlignment === 'right'
      ? 'margin-left: 2rem;'
      : 'margin-right: 2rem;'}
  }
`

const SwitchButton = styled.button.attrs(props => ({
  bgActive: props.theme.switch?.backgroundAccent || '#1f6eff',
  bgInactive: props.theme.switch?.background || '#ccdaf4',
  switchHeight: props.theme.switch?.height || '4rem',
  switchWidth: props.theme.switch?.width || '8rem',
  svgSize: props.theme.switch?.svgSize || '1.6rem'
}))`
  height: ${props => props.switchHeight};
  width: ${props => props.switchWidth};

  display: flex;
  align-items: center;
  justify-content: ${props => props.active ? 'flex-end' : 'flex-start'};

  background: ${props => props.active ? props.bgActive : props.bgInactive};
  border: none;
  border-radius: 4rem;
  box-shadow: inset 0rem 0rem 0.3rem 0.1rem rgba(0, 0, 0, 0.15);
  outline: none;
  transition: all 0.2s;

  &:focus {
    transform: scale(1.1);
  }

  svg {
    height: ${props => props.svgSize};
    width: ${props => props.svgSize};
    fill: ${props => props.active ? props.bgActive : props.bgInactive};
  }
`

const SwitchIndicator = styled.span.attrs((props) => ({
  indicatorBackground: props.theme.switch?.indicatorBackground || '#ffffff',
  indicatorSize: props.theme.switch?.indicatorSize || '3.2rem',
  indicatorMargin: props.theme.switch?.indicatorMargin || '0 0.4rem'
}))`
  height: ${props => props.indicatorSize};
  width: ${props => props.indicatorSize};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.indicatorBackground};
  border-radius: 50%;
  box-shadow: 0.1rem 0.1rem 1rem 0.3rem rgba(0, 0, 0, 0.15);
  margin: ${props => props.indicatorMargin};
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
        type='button'
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
