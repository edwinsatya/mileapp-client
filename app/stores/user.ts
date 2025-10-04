import { defineStore } from 'pinia';
import type { User } from '~/types/user';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as null | User,
    token: ''
  }),
  actions: {
    setUser(userData: User) {
      this.user = userData
    },
    setToken(token: string) {
      this.token = token
    },
    clearUser() {
      this.user = null
      this.token = ''
    },
    async fetchUser(token: string) {
      try {
        const res: { user: User } = await $fetch(`${useGetApiBase('/token')}`, {
          method: 'get',
          headers: { token }
        })
        this.user = res.user
        this.token = token
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        this.user = null
      }
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.user
  }
})