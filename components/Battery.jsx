import { wrapper, root, icon } from '../lib/style'
import { danger, text } from '../lib/colorscheme'
import { battery as config } from '../lib/config'
import parseResult from '../lib/parse'

export const refreshFrequency = config.refreshRate || 60000
export const command = './bar/scripts/battery.sh'

export const className = {
  ...root,
  order: config.order || 27,
}


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


export const render = ({ output }) => {
  if (!output) return ''

  const data = parseResult(output)

  const { percentage, state } = data

  const wrapperStyle = {
    ...style.wrapper,
    color: battColor(percentage),
  }

  const iconClass = `far fa-${iconName(percentage, state)}`

  return (
    <span style={wrapperStyle}>
      <i className={iconClass} style={style.icon} />
      <span>{percentage}</span>
    </span>
  )
}
