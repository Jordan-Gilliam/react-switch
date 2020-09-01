# React switch

![Screenshot](./src/Demo/assets/screenshot.png)

A switch component represents a boolean state, true/false, on/off. Perfect for functionality that requires immediate feedback. It differs from a checkbox in that a checkbox has a third, indefinite state.

Use cases include changing settings, toggling between themes, etc. 

__Warning__: I'm doing this to train my frontend skills. Although it seems to be working fine for me, I didn't have the time to test things exhaustively and cannot guarantee that things will work as expected.

Also, note that __I did not test its usage within forms__. For that, you should probably use checkboxes as they are best suited for functionality that doesn't require immediate feedback.

## Usage

Make sure you have `styled-components` and `prop-types` installed. Copy the __/Switch__ folder and import __Switch__ into your project.

```javascript
import Switch from 'path/to/Switch'
import { ReactComponent as OnIcon } from 'path/to/on-icon.svg'
import { ReactComponent as OffIcon } from 'path/to/off-icon.svg'

<Switch
  label='Show bookmarks bar'
  activeStateIcon={<OnIcon />}
  inactiveStateIcon={<OffIcon />}
  onChange={(isActive) => console.log(`I'm ${isActive ? 'truthy' : 'falsy'}.`)}
/>
```

For example usage see: `/src/Demo`

## Props

| Name | Type | Description |
| ---- | ---- | ----------- |
| `defaultActive` | boolean | Controls whether the switch starts with an active state. It defaults to false. |
| `disabled` | boolean | Controls whether the switch is non-interactive. It defaults to false. |
| `inline` | boolean | Controls whether the switch occupies only the necessary width. It defaults to false. |
| `activeStateIcon` | SVG element | Icon to be shown when the switch is in an active state. |
| `inactiveStateIcon` | SVG element | Icon to be shown when the switch is in an inactive state. |
| `label` | string | Text to be shown next to the switch. |
| `labelAlignment` | 'left' or 'right' | Controls the alignment of the label. It defaults to left. |
| `ariaLabel` | string | Text for accessibility devices. You should use it if no label is provided. |
| `onChange` | function | A callback function that is invoked on every state change with true or false. |

## Styling

Styling is a tricky thing. There are dozens of ways to achieve it, and I'm not dealing with that for now. So, you must change the colors and other properties manually inside `Switch.jsx`. Sorry for that :/

If you want to make it reusable, there are some options to take a look at:

- [ThemeProvider](https://styled-components.com/docs/advanced#theming) from `styled-components`
- [Inline styling](https://reactjs.org/docs/dom-elements.html#style)
- [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
