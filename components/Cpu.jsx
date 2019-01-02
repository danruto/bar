import { wrapper, root, icon } from '../lib/style'
import { cpu as config } from '../lib/config'

export const refreshFrequency = config.refreshRate || 15000
export const command = './bar/scripts/load_average.sh'

export const className = {
  ...root,
  order: config.order || 26,
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

export const render = ({ output }) => (
  <span style={style.wrapper}>
    <i className="fas fa-chart-area" style={style.icon} />
    { output }
  </span>
)
