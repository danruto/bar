import { wrapper, root, icon as iconStyle } from '../lib/style'
import { weather as config } from '../lib/config'

export const refreshFrequency = config.refreshRate || 600000

export const className = {
  ...root,
  order: config.order || 25,
}

export const initialState = {
  icon: 'fas fa-question',
  temp: '-- °C',
}


const getWeatherIcon = (description) => {
  if (!description) return initialState.icon

  const desc = description.toLowerCase()

  /* eslint-disable nonblock-statement-body-position, curly */
  if (desc.includes('rain'))
    return 'fas fa-cloud-rain'
  if (desc.includes('cloudy'))
    return 'fas fa-cloud'
  if (desc.includes('showers'))
    return 'fas fa-cloud-showers-heavy'
  if (desc.includes('storm'))
    return 'fas fa-bolt'
  if (desc.includes('snow'))
    return 'far fa-snow'
  if (desc.includes('sunny'))
    return 'fas fa-sun'
  if (desc.includes('clear'))
    return 'fas fa-sun'
  /* eslint-enable */

  return initialState.icon
}


export const command = (dispatch) => {
  const updateState = data => dispatch({
    type: 'FETCH_COMPLETE',
    data,
  })

  const resetState = updateState(initialState)

  const positionOptions = {
    maximumAge: refreshFrequency,
  }

  // eslint-disable-next-line no-undef
  geolocation.getCurrentPosition(({ position }) => {
    const { latitude, longitude } = position.coords

    // eslint-disable-next-line no-undef
    fetch(`https://goweather.herokuapp.com/weather/${latitude},${longitude}`)
      .then(response => response.json())
      .then(data => updateState(data))
      .catch(() => resetState())
  }, resetState, positionOptions)
}

export const updateState = ({ type, data }, prevState) => {
  if (type === 'FETCH_COMPLETE') {
    if (!data) return initialState

    const { temperature, description } = data


    return {
      ...prevState,
      temp: temperature || initialState.temp,
      icon: getWeatherIcon(description),
    }
  }

  return prevState
}


const style = {
  wrapper: {
    ...wrapper,
    ...config.style.wrapper,
  },
  icon: {
    ...iconStyle,
    ...config.style.icon,
  },
}


export const render = ({ icon, temp }) => (
  <div style={style.wrapper}>
    <i className={icon} style={style.icon} />
    { temp }
  </div>
)
