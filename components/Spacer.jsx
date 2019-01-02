import { root } from '../lib/style'
import { spacer as config } from '../lib/config'

export const refreshFrequency = config.refreshRate || false

export const className = {
  ...root,
  order: config.order || 10,
  flex: 1,
}

export const render = () => ''
