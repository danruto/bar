/**
 * config.js
 *
 * bar configs go here.
 */

import * as custom from './custom'

// Delay in milliseconds between consecutive commands executions
// Expensive elements should throttle themselves
export const refreshRate = custom.refreshRate || 15000

// Config for Bar (wrapper) component
export const bar = Object.assign({
  style: {},
}, custom.bar)

// Config for Time component
export const time = Object.assign({
  format: '%a %m/%d %l:%M',
  style: {
    padding: '0 15px',
  },
}, custom.time)

// Config for Input component
export const input = Object.assign({
  style: {},
}, custom.input)

// Config for Battery component
export const battery = Object.assign({
  style: {},
}, custom.battery)

// Config for Workspace component
export const workspace = Object.assign({
  style: {},
}, custom.workspace)

// Config for Cpu component
export const cpu = Object.assign({
  style: {},
}, custom.cpu)

// Config for Spotify component
export const spotify = Object.assign({
  style: {},
}, custom.spotify)

// Config for Spacer component
export const spacer = Object.assign({
  style: {},
}, custom.spacer)

// Config for Weather component
export const weather = Object.assign({
  style: {},
}, custom.weather)
