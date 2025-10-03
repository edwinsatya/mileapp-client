import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as null | { id: string; name: string; email: string },
    token: ''
  }),
  actions: {
    setUser(userData: { id: string; name: string; email: string }) {
      this.user = userData
    },
    clearUser() {
      this.user = null
      this.token = ''
    },
    async fetchUser(token: string) {
      try {
        const data = await useApiFetch('/token', {
          method: 'get',
          headers: { token }
        })
        this.user = data.user
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