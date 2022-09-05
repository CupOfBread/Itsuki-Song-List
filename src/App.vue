<script setup lang="ts">
  import { useToast } from 'vue-toastification'
  const toast = useToast()
  toast.success('欢迎来到星谷树的歌单！', {
    timeout: 6000,
  })
  function copySongName(name: string) {
    toast.success('“' + name + '” 复制成功！', {
      timeout: 3000,
    })
  }
  function switchSongType(name: string) {
    toast.success('试试“' + name + '” 歌吧！', {
      timeout: 3000,
    })
  }
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
        和她拿手的 <span class="font-bold">123</span> 首歌
      </div>
      <div
        class="my-6 mx-auto rounded-2xl border-red-800 border-2 hover:shadow-lg grid grid-cols-2 md:grid-cols-4 gap-3 p-4 md:p-6 duration-500">
        <div
          @click="switchSongType('国语')"
          class="option rounded-2xl h-10 leading-10 duration-500 bg-opacity-80 bg-white cursor-pointer hover:bg-opacity-100 hover:shadow-lg">
          国语
        </div>
        <div
          @click="switchSongType('日语')"
          class="option rounded-2xl h-10 leading-10 duration-500 bg-opacity-80 bg-white cursor-pointer hover:bg-opacity-100 hover:shadow-lg">
          日语
        </div>
        <div
          class="option rounded-2xl h-10 leading-10 duration-500 bg-opacity-80 bg-white cursor-pointer hover:bg-opacity-100 hover:shadow-lg">
          英语
        </div>
        <div
          class="option rounded-2xl h-10 leading-10 duration-500 bg-opacity-80 bg-white cursor-pointer hover:bg-opacity-100 hover:shadow-lg">
          粤语
        </div>
      </div>
      <div class="mb-6 grid md:grid-cols-4 gap-4 px-4 md:px-6">
        <input
          type="search"
          placeholder="搜索"
          class="md:col-span-3 rounded-2xl h-10 px-4 text-black" />
        <div
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
              <th class="w-16"></th>
              <th class="w-1/2">歌名</th>
              <th>歌手</th>
              <th class="hidden md:table-cell w-16">语言</th>
              <th class="hidden md:table-cell">备注</th>
            </tr>
          </thead>
          <tbody>
            <tr @click="copySongName('刻在我心底的名字')">
              <th><i class="fa-solid fa-tree"></i></th>
              <th>刻在我心底的名字</th>
              <th>卢广仲</th>
              <th class="hidden md:table-cell">国语</th>
              <th class="hidden md:table-cell">备注</th>
            </tr>
            <tr>
              <th></th>
              <th>慢慢喜欢你</th>
              <th>莫文蔚</th>
              <th class="hidden md:table-cell">国语</th>
              <th class="hidden md:table-cell">备注</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-3xl mb-4">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
      <div class="text-3xl mb-5">施工中...</div>
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
