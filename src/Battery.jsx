import { wrapper, icon } from '../lib/style'
import { danger, text } from '../lib/colorscheme'
import { battery as config } from '../lib/config'

const style = {
  wrapper: {
    ...wrapper,
    ...config.style.wrapper,
  },
  icon: {
    ...icon,
    ...config.style.icon,
  },
}


const battColor = (percentage) => {
  const num = parseInt(percentage, 10)

  if (num < 20) return danger

  return text
}

const iconName = (percentage, state) => {
  const num = parseInt(percentage, 10)

  if (state === 'AC') return 'plug'
  if (num > 80) return 'battery-full'
  if (num > 60) return 'battery-three-quarters'
  if (num > 40) return 'battery-half'
  if (num > 20) return 'battery-quarter'
  return 'battery-empty'
}


const render = ({ data }) => {
  const { percentage, state } = data

  const wrapperStyle = {
    ...style.wrapper,
    color: battColor(percentage),
  }

  const iconClass = `far fa-${iconName(percentage, state)}`

  return (
    <span style={wrapperStyle}>
      <span>{percentage}</span>
      <i className={iconClass} style={style.icon} />
    </span>
  )
}

export default render
