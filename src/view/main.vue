<script setup lang="ts">
  import { useToast } from 'vue-toastification'
  import request from '../utils/request'
  import { useStore } from '../store'
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'

  const toast = useToast()
  const nowLang = ref('')
  const showSongList = ref()
  const searchContent = ref()

  const { SongList } = storeToRefs(useStore())
  request({ url: '/song/all/index', method: 'get' }).then((res) => {
    SongList.value = res.data.result
    showSongList.value = SongList.value
  })
  function copySongName(song: string) {
    navigator.clipboard.writeText('点歌 ' + song)

    toast.success('“' + song + '” 复制成功！', {
      timeout: 3000,
    })
  }
  function randomCopy() {
    let rand = Math.floor(Math.random() * (SongList.value.length - 1))
    copySongName(SongList.value[rand].song)
  }
  function switchLang(lang: string) {
    showSongList.value = SongList.value
    if (lang !== '') {
      toast.success('试试“' + lang + '” 歌吧！', {
        timeout: 3000,
      })
      showSongList.value = showSongList.value.filter(
        (item: { lang: string }) => item.lang === lang
      )
    }
    searchContent.value = null
    nowLang.value = lang
  }
  const timeout = ref()
  function inputSearch(content: string) {
    if (content == '' || content == null) {
      showSongList.value = SongList.value
      return
    }
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      showSongList.value = SongList.value
      showSongList.value = showSongList.value.filter(
        (item: { song: string; singer: string }) => {
          return item.song === content || item.singer === content
        }
      )
      console.log(content)
    }, 300)
  }
  toast.success('欢迎来到星谷树的歌单！', {
    timeout: 2000,
  })
</script>

<template>
  <div class="w-full h-full centerbg text-center justify-center flex">
    <div class="xl:w-1280 md:w-5/6 w-11/12">
      <div
        class="h-32 w-32 selection:avatar mt-10 md:mt-20 mb-2 hover:scale-105 shadow-xl rounded-full overflow-hidden hover:shadow-2xl duration-700 inline-block">
        <img
          src="https://tva1.sinaimg.cn/large/005I8CXily1h5vmlf7boyj33uw3uw1kx.jpg"
          class="w-full h-full" />
      </div>
      <div
        class="text-4xl font-semibold my-4 animate__animated animate__rubberBand">
        星谷樹_ITSUKI
      </div>
      <div class="text-xl animate__animated animate__rubberBand">
        和她拿手的 <span class="font-bold">{{ SongList.length }}</span> 首歌
      </div>
      <div
        class="my-6 mx-auto rounded-2xl border-red-800 border-2 hover:shadow-lg grid grid-cols-2 md:grid-cols-4 gap-3 p-4 md:p-6 duration-500">
        <div
          @click="switchLang('国语')"
          class="option rounded-2xl h-10 leading-10 duration-500 bg-opacity-80 bg-white cursor-pointer hover:bg-opacity-100 hover:shadow-lg"
          :class="nowLang == '国语' ? 'border-2 border-red-600' : ''">
          国语
        </div>
        <div
          @click="switchLang('粤语')"
          class="option rounded-2xl h-10 leading-10 duration-500 bg-opacity-80 bg-white cursor-pointer hover:bg-opacity-100 hover:shadow-lg"
          :class="nowLang == '粤语' ? 'border-2 border-red-600' : ''">
          粤语
        </div>
        <div
          @click="switchLang('日语')"
          class="option rounded-2xl h-10 leading-10 duration-500 bg-opacity-80 bg-white cursor-pointer hover:bg-opacity-100 hover:shadow-lg"
          :class="nowLang == '日语' ? 'border-2 border-red-600' : ''">
          日语
        </div>
        <div
          @click="switchLang('英语')"
          class="option rounded-2xl h-10 leading-10 duration-500 bg-opacity-80 bg-white cursor-pointer hover:bg-opacity-100 hover:shadow-lg"
          :class="nowLang == '英语' ? 'border-2 border-red-600' : ''">
          英语
        </div>
        <div
          @click="switchLang('')"
          class="option rounded-2xl h-10 leading-10 duration-500 bg-opacity-80 bg-white cursor-pointer hover:bg-opacity-100 hover:shadow-lg order-last">
          重置
        </div>
      </div>
      <div class="mb-6 grid md:grid-cols-4 gap-4 px-4 md:px-6">
        <input
          type="search"
          placeholder="搜索"
          @input="inputSearch(searchContent)"
          v-model="searchContent"
          class="md:col-span-3 rounded-2xl h-10 px-4 text-black" />
        <div
          @click="randomCopy()"
          class="md:col-span-1 h-10 duration-500 bg-opacity-80 bg-white cursor-pointer hover:bg-opacity-100 hover:shadow-lg rounded-2xl leading-10">
          随机选取
        </div>
      </div>
      <div class="mb-2 text-gray-500">
        <i class="fa-regular fa-paper-plane mr-2"></i>轻点歌名可以复制喔~
      </div>
      <div class="p-2">
        <table class="w-full mb-6 hover:shadow-lg duration-700">
          <thead class="w-full border-b-2 border-red-900">
            <tr>
              <th class="w-28 hidden md:table-cell">
                <i class="fa-solid fa-feather"></i>
              </th>
              <th class="w-1/2">歌名</th>
              <th class="w-28">歌手</th>
              <th class="hidden md:table-cell w-28">语言</th>
              <th class="hidden md:table-cell w-28">风格</th>
              <th class="hidden md:table-cell">备注</th>
            </tr>
          </thead>
          <tbody>
            <tr
              @click="copySongName(item.song)"
              v-for="(item, index) in showSongList"
              :key="index">
              <th class="hidden md:table-cell w-32 justify-center">
                <div class="justify-center flex px-3 gap-x-1">
                  <i
                    class="fa-solid fa-bookmark text-red-700 w-8 order-last"
                    v-show="item.isTop == 1"></i>

                  <i
                    class="w-8"
                    :class="item.icon"
                    v-if="item.icon !== null"></i>
                </div>
              </th>
              <th>
                {{ item.song }}
                <i
                  class="fa-solid fa-bookmark text-red-700 md:hidden inline-block"
                  v-show="item.isTop == 1"></i>
              </th>
              <th>{{ item.singer }}</th>
              <th class="hidden md:table-cell">{{ item.lang }}</th>
              <th class="hidden md:table-cell">{{ item.style }}</th>
              <th class="hidden md:table-cell">{{ item.remark }}</th>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center text-gray-400 pb-8 mt-24">
        <div
          class="text-red-400 animate__animated animate__bounce animate__infinite">
          <i class="fa-solid fa-heart"></i>
        </div>
        <div class="mb-2 text-sm">
          Presented by
          <a
            class="text-yellow-500"
            target="_blank"
            href="https://www.cupbread.cn"
            >树宝和她的家楞们</a
          >
        </div>
        <div class="w-1/2 mx-auto">
          <i class="fa-regular fa-copyright mr-2"></i>
          <span class="mr-2">2021-2022</span>
          <span class="mr-2 block lg:inline-block lg:mt-2"> 星谷樹的歌单 </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .centerbg {
    margin: 0;
    padding: 0;
    background-position: top center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    z-index: -1;
    background-color: #ffe5d9;
    background-image: linear-gradient(0deg, #ffe5d9d0, #ffe5d9d0),
      url('https://tva1.sinaimg.cn/large/005I8CXily1h5vwvzzs9hj33uw3uwkjm.jpg');
  }
  table {
    background: rgba(255, 255, 255, 0.352);
  }
  tr {
    height: 2.5rem;
  }
  tr:hover {
    background: rgba(255, 255, 255, 0.884);
    transition: all 500ms;
  }
  tr:active {
    background: rgba(255, 115, 115, 0.884);
    transition: all 100ms;
  }
  @media (max-width: 768px) {
    .centerbg {
      background-size: 100vh;
      background-attachment: local;
      background-image: linear-gradient(0deg, #ffe5d9e5, #ffe5d9e5),
        url('https://tva1.sinaimg.cn/large/005I8CXily1h5vwvzzs9hj33uw3uwkjm.jpg');
    }
  }
</style>
