import { http } from '@/plugins/axios'

class AnalysisApi {
  public static async getAnalysis() {
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
      url: 'analysis',
      method: 'get'
    })
  }
}

export default AnalysisApi
