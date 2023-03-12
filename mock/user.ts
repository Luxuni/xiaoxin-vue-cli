import { MockMethod } from 'vite-plugin-mock'
import { user } from './helper/data'
export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return user
    },
  },
] as MockMethod[]
