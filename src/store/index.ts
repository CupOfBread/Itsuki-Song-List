import { defineStore } from 'pinia'
// import request from '../utils/request'
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
