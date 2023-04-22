import useAuth from '@/composables/useAuth'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => {
    return {
      user: undefined as UserModel | undefined
    }
  },
  getters: {
    isAdministrator: (state) => state.user?.id == 1
  },
  actions: {
    setUser(data: UserModel) {
      this.user = data
    },
    async getCurrentUser() {
      if (useAuth().isLogin()) {
        this.user = {
          id: 1,
          name: 'xiaoxin',
          email: '3422056558@qq.com',
          sex: 1,
          avatar:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          home: 'https://reactjs.org/',
          weibo: null,
          wechat: '不哭啦',
          github: 'https://github.com/Luxuni',
          qq: '',
          created_at: '2001-01-31T20:50:56.000000Z',
          updated_at: '2023-03-11T15:19:54.000000Z'
        }
      }
    }
  }
})
