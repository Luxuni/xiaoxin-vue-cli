import { App } from 'vue'

class ParallaxTiltEffect {
  private maxRotateDeg: number
  private element: HTMLElement
  private halfW: number
  private halfH: number
  constructor(element: HTMLElement) {
    // 最大旋转角度
    this.maxRotateDeg = 20
    // 获取到元素
    this.element = element
    // 获取宽高的一半
    this.halfW = this.element.clientWidth / 2
    this.halfH = this.element.clientHeight / 2
    this.init()
  }
  private init() {
    // 绑定鼠标事件
    this.element.addEventListener('mouseenter', this.handleMouseEnter.bind(this))
    this.element.addEventListener('mousemove', this.handleMouseMove.bind(this))
    this.element.addEventListener('mouseleave', this.handleMouseLeave.bind(this))
  }
  private computed(offsetX: number, offsetY: number) {
    // 获取鼠标位置距离元素中心点的距离, 然后除以 this.halfW，得到百分比
    let dxPercent = (offsetX - this.halfW) / this.halfW
    let dyPercent = -(offsetY - this.halfH) / this.halfH
    let rotateX = this.maxRotateDeg * dxPercent
    let rotateY = this.maxRotateDeg * dyPercent
    this.setElementRotate(rotateY, rotateX)
  }
  private handleMouseEnter(e: MouseEvent) {
    let { offsetX, offsetY } = e
    // requestAnimationFrame设置刷新帧率随浏览器画面刷新而刷新
    requestAnimationFrame(() => {
      return this.computed(offsetX, offsetY)
    })
  }
  private handleMouseMove(e: MouseEvent) {
    let { offsetX, offsetY } = e
    // requestAnimationFrame(() => {
    return this.computed(offsetX, offsetY)
    // })
  }
  private handleMouseLeave(e: MouseEvent) {
    this.setElementRotate(0, 0)
  }
  private setElementRotate(rotateX: number, rotateY: number) {
    // js设置css变量的方式
    this.element.style.setProperty('--X', rotateX + 'deg')
    this.element.style.setProperty('--Y', rotateY + 'deg')
  }
}
export default (app: App) => {
  app.directive('visualCard', {
    mounted(el: HTMLElement) {
      new ParallaxTiltEffect(el)
    },
  })
}
