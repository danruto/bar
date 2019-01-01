import { wrapper, icon } from '../lib/style'
import { input as config } from '../lib/config'

const style = {
  wrapper: {
    ...wrapper,
    paddingRight: '5px',
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

const render = ({ data }) => (
  <span style={style.wrapper}>
    <i className="fas fa-keyboard" style={style.icon} />
    {inputName(data)}
  </span>
)

export default render
