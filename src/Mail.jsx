import { wrapper, icon } from '../lib/style'
import { cpu as config } from '../lib/config'


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

const render = ({ data }) => {
  if (!data) return ''

  return (
    <span style={style.wrapper}>
      <i className="fas fa-envelope" style={style.icon} />
      { data }
    </span>
  )
}

export default render
