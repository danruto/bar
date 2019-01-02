import { wrapper, root, icon } from '../lib/style'
import { cpu as config } from '../lib/config'

export const refreshFrequency = config.refreshRate || 15000
export const command = './bar/scripts/mail.sh'

export const className = {
  ...root,
  order: config.order || 24,
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

export const render = ({ output }) => {
  const unreadCount = parseInt(output, 10)

  if (unreadCount === 0) return ''

  return (
    <span style={style.wrapper}>
      <i className="fas fa-envelope" style={style.icon} />
      { output }
    </span>
  )
}
