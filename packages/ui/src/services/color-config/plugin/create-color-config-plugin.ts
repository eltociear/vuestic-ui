import { ColorVariables } from './../types'
import { App, watch } from 'vue'
import { isServer } from '../../../utils/ssr-utils'
import { getGlobalProperty } from '../../../vuestic-plugin/utils'
import { cssVariableName } from '../utils'
import { getTextColor } from '../color-functions'
import { useColors } from '../../../composables'

export const setCSSVariable = (name: string, value: string, root: HTMLElement) => {
  root.style.setProperty(cssVariableName(name), value)
}

export const createColorConfigPlugin = (app: App) => {
  const { colors, getTextColor, getColor } = useColors()

  /** Renders CSS variables string. Use this in SSR mode */
  const renderCSSVariables = (colors: ColorVariables | undefined) => {
    if (!colors) { return }

    const colorNames = Object.keys(colors)
    return colorNames.map((key) => `${cssVariableName(key)}: ${colors[key]}`).join(';')
  }

  const updateColors = (newValue: ColorVariables | undefined) => {
    if (!newValue) { return }
    if (isServer()) { return }

    const root = document.documentElement

    const colorNames = Object.keys(newValue)
    colorNames.forEach((key) => {
      setCSSVariable(key, newValue[key], root)
    })
    colorNames.forEach((key) => {
      setCSSVariable(`on-${key}`, getColor(getTextColor(newValue[key])), root)
    })
  }

  updateColors(colors)

  watch(colors, (newValue) => {
    updateColors(newValue)
  }, { immediate: true, deep: true })

  return {
    renderCSSVariables,
    updateColors,
  }
}
