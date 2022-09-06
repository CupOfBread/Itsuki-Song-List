// const BaseUrl = 'https://itsuki.cupbread.cn/'
const BaseUrl = 'http://127.0.0.1:8181/'

import axios from 'axios'
import { useToast } from 'vue-toastification'
const toast = useToast()

const http = axios.create({
  baseURL: BaseUrl,
  timeout: 3000,
})

http.interceptors.request.use((config) => {
  return config
})

http.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    toast.error('服务器网络异常，请稍后重试！', {
      timeout: 3000,
    })
  }
)
// 返出
export default http
