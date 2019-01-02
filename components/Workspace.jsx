import { wrapper, icon, root } from '../lib/style'
import { text, textDim } from '../lib/colorscheme'
import { workspace as config } from '../lib/config'
import parseResult from '../lib/parse'

export const refreshFrequency = config.refreshRate || 15000
export const command = './bar/scripts/workspace.sh'

export const className = {
  ...root,
  order: config.order || 1,
}


const style = {
  wrapper: {
    ...wrapper,
    marginLeft: '22px',
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

export const render = ({ output }) => {
  if (!output) return ''

  if (output.includes('chunkc not found')) {
    return <div style={style.wrapper}>chunkWM not installed</div>
  }

  const data = parseResult(output)

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
