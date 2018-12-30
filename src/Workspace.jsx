import { wrapper, icon } from '../lib/style'
import { text, textDim } from '../lib/colorscheme'
import { workspace as config } from '../lib/config'

const style = {
  wrapper: {
    ...wrapper,
    ...config.style.wrapper,
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

const space = (index, data) => {
  const isActive = index === parseInt(data, 10)
  const iconClass = (config.spaces && config.spaces[index])
    || 'fas fa-circle'

  return <i className={iconClass} style={iconStyle(isActive)} />
}

const numOfSpaces = (config.spaces && config.spaces.length) || 5

const render = ({ data }) => {
  const workspaces = []

  for (let i = 0; i < numOfSpaces; i += 1) {
    workspaces.push(space(i, data))
  }

  return (
    <div style={style.wrapper}>
      { workspaces }
    </div>
  )
}

export default render
