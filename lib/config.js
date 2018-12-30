/**
 * config.js
 *
 * bar configs go here.
 */

// Delay in milliseconds between consecutive commands executions
// Expensive elements should throttle themselves
export const refreshRate = 5000

// Config for Bar (wrapper) component
export const bar = {
  style: {},
}

// Config for Time component
export const time = {
  format: '%a %m/%d %l:%M',
  style: {
    padding: '0 15px',
  },
}

// Config for Battery component
export const battery = {
  style: {},
}

// Config for Workspace component
export const workspace = {
  style: {},
}

// Config for Cpu component
export const cpu = {
  style: {},
}

// Config for Spotify component
export const spotify = {
  style: {},
}

export default null
