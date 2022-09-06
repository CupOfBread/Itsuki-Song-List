import { defineStore } from 'pinia'
import SongList from './song_list'

export const useStore = defineStore('useStore', {
  state: () => {
    return {
      SongList,
    }
  },
  getters: {},
  actions: {},
})
