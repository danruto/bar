import { wrapper, root } from '../lib/style'
import { time as config } from '../lib/config'

export const refreshFrequency = config.refreshRate || 60000
export const command = './bar/scripts/time.sh'

export const className = {
  ...root,
  order: config.order || 29,
}


const style = {
  wrapper: {
    ...wrapper,
    marginRight: '22px',
    ...config.style.wrapper,
  },
}

export const render = ({ output }) => (
  <div style={style.wrapper}>
    {output}
  </div>
)
