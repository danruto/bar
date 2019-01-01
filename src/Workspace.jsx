import { wrapper, icon } from '../lib/style'
import { text, textDim } from '../lib/colorscheme'
import { workspace as config } from '../lib/config'

const style = {
  wrapper: {
    ...wrapper,
    ...config.style.wrapper,
  },
  mode: {
    paddingRight: '5px',
  },
  icon: {
    ...icon,
    padding: '0 8px',
    color: textDim,
    ...config.style.icon,
  },
}


const iconStyle = (isActive) => {
  if (isActive) {
    return {
      ...style.icon,
      color: text,
    }
  }

  return style.icon
}

const modeIcon = (mode) => {
  switch (mode) {
    case 'monocle':
      return 'fas fa-clone'
    case 'bsp':
      return 'fas fa-th-large'
    case 'float':
      return 'fas fa-parachute-box'
    default:
      return 'fas fa-question'
  }
}

const space = (index, data) => {
  const isActive = index + 1 === parseInt(data, 10)
  const iconClass = (config.spaces && config.spaces[index])
    || 'fas fa-circle'

  return <i key={index} className={iconClass} style={iconStyle(isActive)} />
}

const render = ({ data }) => {
  if (!data) return ''

  if (data === 'chunkc not found') {
    return <div style={style.wrapper}>chunkWM not installed</div>
  }

  const { active, total, mode } = data
  const workspaces = []

  for (let i = 0; i < total; i += 1) {
    workspaces.push(space(i, active))
  }

  return (
    <div style={style.wrapper}>
      <span>
        <i className={modeIcon(mode)} style={style.mode} />
      </span>
      { workspaces }
    </div>
  )
}

export default render
