import { wrapper, icon } from '../lib/style'
import { battery as config } from '../lib/config'

const style = {
  wrapper: {
    ...wrapper,
    ...config.style.wrapper,
  },
  icon: {
    ...icon,
    fontSize: '16px',
    ...config.style.icon,
  },
}


const battColor = (percentage) => {
  const num = parseInt(percentage, 10)

  if (num > 80) return '#97c475' // Green
  if (num > 55) return '#e5c07b' // Yellow
  if (num > 30) return '#d09a6a' // Orange
  return '#e06c75' // Red
}

const iconName = (percentage) => {
  const num = parseInt(percentage, 10)

  if (num > 80) return 'battery-full'
  if (num > 60) return 'battery-three-quarters'
  if (num > 40) return 'battery-half'
  if (num > 20) return 'battery-quarter'
  return 'battery-empty'
}


const render = ({ data }) => {
  const wrapperStyle = {
    ...style.wrapper,
    color: battColor(data),
  }

  const iconClass = `far fa-${iconName(data)}`

  return (
    <span style={wrapperStyle}>
      <span>{data}</span>
      <i className={iconClass} style={style.icon} />
    </span>
  )
}

export default render
