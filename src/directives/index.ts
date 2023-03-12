import { App } from 'vue'
import appearance from './appearance'
import clearError from './clearError'
import visualCard from './visualCard'
import wh from './wh'

const modules = [clearError, wh, appearance, visualCard]

export default (app: App) => {
  modules.map((module) => module(app))
}
