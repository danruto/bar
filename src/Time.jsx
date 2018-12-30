import strftime from '../lib/strftime'
import { wrapper, icon } from '../lib/style'
import { time as config } from '../lib/config'

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

const render = () => {
  const time = strftime(config.format, new Date())

  return (
    <span style={style.wrapper}>
      {time}
      <i className="far fa-clock" style={style.icon} />
    </span>
  )
}

export default render
