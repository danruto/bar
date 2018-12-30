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

const render = () => (
  <span style={style.wrapper}>
    CPU
    <i className="fas fa-chart-area" style={style.icon} />
  </span>
)

export default render
