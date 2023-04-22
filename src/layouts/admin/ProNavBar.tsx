import useMenuStore from './useMenuStore'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { PropType } from 'vue'
import ProBreadCrumn from '@/components/xiaoxin/ProBreadcrumb'
import ProUserMenu from '@/components/ProUserMenu'
{
  /* <script setup lang="ts">
import UserAvatarMenu from '@/components/userAvatarMenu.vue'
import useMenuStore from '@/layouts/admin/useMenuStore'
import { MenuFoldOne, MenuUnfoldOne } from '@icon-park/vue-next'
const menuStore = useMenuStore()
</script>

<template>
  <div class="relative z-20 flex items-center justify-between p-2 px-5 shadow-sm border-b-1 bg-xx-bgcolor">
    <div class="flex items-center">
      <div class="mr-2" @click.stop="menuStore.toggleMenu">
        <MenuUnfoldOne theme="filled" size="24" fill="#10ad57" class="duration-300 cursor-pointer"
          v-if="menuStore.menuState" />
        <MenuFoldOne theme="filled" size="24" fill="#10ad57" class="duration-300 cursor-pointer" v-else />
      </div>
      <XiaoxinBreadcrumb class="hidden md:block" />
    </div>
    <div class="relative flex items-center justify-center cursor-pointer">
      <UserAvatarMenu />
    </div>
  </div>
</template> */
}
const ProNavBarProps = {
  collapsed: {
    type: Boolean,
    required: true
  },
  onCollapsed: {
    type: Function as PropType<(collapsed: boolean) => void>,
    required: true
  }
}
const ProNavBar = defineComponent({
  name: 'ProNavBar',
  props: ProNavBarProps,
  setup() {
    const menuStore = useMenuStore()
    return {
      menuStore
    }
  },
  render() {
    return (
      <div class={'h-full w-full p-4 flex items-center justify-between'}>
        <div class={'flex items-center'}>
          <div class={'mr-4 flex items-center'}>
            {this.collapsed ? (
              <MenuUnfoldOutlined
                class="trigger"
                onClick={() => this.$emit('collapsed', !this.collapsed)}
              />
            ) : (
              <MenuFoldOutlined
                onClick={() => this.$emit('collapsed', !this.collapsed)}
              />
            )}
          </div>
          <ProBreadCrumn />
        </div>
        <div>
          <ProUserMenu />
        </div>
      </div>
    )
  }
})
export default ProNavBar
