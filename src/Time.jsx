import { wrapper } from '../lib/style'
import { time as config } from '../lib/config'

const style = {
  wrapper: {
    ...wrapper,
    ...config.style.wrapper,
  },
}

const render = ({ data }) => (
  <span style={style.wrapper}>
    {data}
  </span>
)

export default render
