import { App } from 'vue'
import clearError from './clearError'
import wh from './wh'

const modules = [clearError,wh]

export default (app: App) => {
  modules.map((module) => module(app))
}
