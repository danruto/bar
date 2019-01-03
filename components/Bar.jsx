import { background } from '../lib/colorscheme'
import { bar as config } from '../lib/config'

const rootStyle = `
  #__uebersicht {
    display: flex;
  }
`

const style = {
  bar: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: -1,
    height: '22px',
    background,
    boxShadow: '0px 2px 5px 0 #000000',
    ...config.style.bar,
  },
  left: {
    position: 'absolute',
    left: '18px',
  },
  right: {
    position: 'absolute',
    right: '18px',
  },
}

export const render = ({ error }) => {
  if (error) throw new Error(error)

  return (
    <div style={style.bar}>
      <style>{rootStyle}</style>
      <link rel="stylesheet" type="text/css" href="bar/node_modules/@fortawesome/fontawesome-free/css/all.min.css" />
    </div>
  )
}

export default null
