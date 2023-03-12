import errorStore from '@/store/xiaoxin/useErrorStore'
import { App } from 'vue'

export default (app: App) => {
  app.directive('clearError', {
    mounted(el: HTMLElement, binding: any) {
      el.addEventListener('focus', () => {
        errorStore().clearError(binding.value)
      })
    },
  })
}
