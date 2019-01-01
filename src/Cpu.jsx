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

const render = ({ data }) => (
  <span style={style.wrapper}>
    <i className="fas fa-chart-area" style={style.icon} />
    { data }
  </span>
)

export default render
