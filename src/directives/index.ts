import { App } from 'vue'
import appearance from './appearance'
import clearError from './clearError'
import wh from './wh'

const modules = [clearError, wh, appearance]

export default (app: App) => {
  modules.map((module) => module(app))
}
