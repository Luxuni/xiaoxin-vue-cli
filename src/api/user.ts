import { http } from '@/plugins/axios'

class UserApi {
  public static async getUser() {
    return http.request<{
      id: number
      name: string
      email: string
      sex: number
      avatar: string
      home: string
      weibo: null | string
      wechat: string
      github: string
      qq: string
      created_at: string
      updated_ad: string
    }>({
      url: 'user',
      method: 'get',
    })
  }
}

export default UserApi
