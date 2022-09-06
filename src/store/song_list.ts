import request from '../utils/request'

const SongList = Array<Object>()

request({ url: '/fans_count', method: 'get' }).then((res) => {
  // console.log(res)
})

export default SongList
