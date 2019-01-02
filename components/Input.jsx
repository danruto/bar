import { wrapper, root, icon } from '../lib/style'
import { input as config } from '../lib/config'

export const refreshFrequency = config.refreshRate || 5000
export const command = './bar/scripts/input_source.sh'

export const className = {
  ...root,
  order: config.order || 28,
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

const inputName = (type) => {
  switch (type) {
    case 'Romaji':
    case 'ABC':
      return 'A'
    case 'Hiragana':
      return 'あ'
    case 'Pinyin - Simplified':
      return '简'
    case 'Pinyin - Traditional':
      return '繁'
    default:
      return '?'
  }
}

export const render = ({ output }) => {
  const data = output.trim()

  return (
    <span style={style.wrapper}>
      <i className="fas fa-keyboard" style={style.icon} />
      {inputName(data)}
    </span>
  )
}
