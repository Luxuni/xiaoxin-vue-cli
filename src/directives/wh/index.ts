import { App, DirectiveBinding } from 'vue'
let resizeObserver: ResizeObserver | null = null
export default (app: App) => {
  app.directive('wh', {
    mounted(el: HTMLElement, binding: DirectiveBinding<(args: ResizeObserverEntry[]) => any>) {
      const func = (entries: ResizeObserverEntry[]) => {
        binding.value(entries)
      }
      const resizeObserver = new ResizeObserver((entries) => {
        func(entries)
      })
      resizeObserver.observe(el)
    },
    unmounted(el: HTMLElement) {
      (resizeObserver as ResizeObserver)?.disconnect()
      resizeObserver = null
    },
  })
}
