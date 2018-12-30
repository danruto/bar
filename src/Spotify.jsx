import { wrapper, icon } from '../lib/style'
import { spotify as config } from '../lib/config'

const style = {
  wrapper: {
    ...wrapper,
    textAlign: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    ...config.style.wrapper,
  },
  icon: {
    ...icon,
    ...config.style.icon,
  },
}

const render = ({ data }) => {
  if (!data) return ''

  return (
    <span style={style.wrapper}>
      <i className="fab fa-spotify" style={style.icon} />
      { data }
    </span>
  )
}

export default render
