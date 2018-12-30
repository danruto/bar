import Battery from './src/Battery.jsx'
import Cpu from './src/Cpu.jsx'
import Time from './src/Time.jsx'
import Workspace from './src/Workspace.jsx'
import Spotify from './src/Spotify.jsx'

import { background, text } from './lib/colorscheme'
import { refreshRate, bar as config } from './lib/config'
import parseResult from './lib/parse'

export const refreshFrequency = refreshRate
export const command = './bar/scripts/main.sh'

const style = {
  bar: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    height: '22px',
    background,
    color: text,
    fontFamily: 'Helvetica Neue',
    fontSize: '14px',
    boxShadow: '0px 2px 5px 0 #000000',
    ...config.style.bar,
  },
  left: {
    position: 'absolute',
    left: '5px',
  },
  right: {
    position: 'absolute',
    right: '5px',
  },
}

const Left = ({ data }) => (
  <div style={style.left}>
    <Workspace data={data.workspace} />
  </div>
)

const Right = ({ data }) => (
  <div style={style.right}>
    <Cpu />
    <Battery data={data.battery} />
    <Time />
  </div>
)

export const render = ({ output, error }) => {
  if (error) throw new Error(error)

  const data = parseResult(output)

  return (
    <div style={style.bar}>
      <link rel="stylesheet" type="text/css" href="bar/node_modules/@fortawesome/fontawesome-free/css/all.min.css" />

      <Left data={data} />

      <Spotify data={data.spotify} />

      <Right data={data} />
    </div>
  )
}
