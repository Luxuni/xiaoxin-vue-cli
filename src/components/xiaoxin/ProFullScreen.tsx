import { OffScreen, FullScreenOne } from '@icon-park/vue-next'
const ProFullScreen = defineComponent({
  name: 'ProFullScreen',
  setup() {
    const isFullScreen = ref(false)
    const fullScreen = () => {
      isFullScreen.value
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen()
      isFullScreen.value = !isFullScreen.value
    }
    document.addEventListener('fullscreenchange', (e) => {
      isFullScreen.value = Boolean(document.fullscreenElement)
    })
    return {
      isFullScreen,
      fullScreen
    }
  },
  render() {
    return (
      <div class={'flex items-center cursor-pointer text-xx-tcolor'}>
        {this.isFullScreen ? (
          <div
            onClick={() => {
              this.fullScreen()
            }}
          >
            <OffScreen size="24" />
          </div>
        ) : (
          <div
            onClick={() => {
              this.fullScreen()
            }}
          >
            <FullScreenOne size="24" />
          </div>
        )}
      </div>
    )
  }
})
export default ProFullScreen
