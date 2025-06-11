export default {
  namespaced: true,
  state: () => ({
    socialLoginList: ['kakao', 'naver', 'google'] // 지원하는 소셜 로그인들
  }),
  mutations: {
    setSocialLoginList(state, payload) {
      state.socialLoginList = payload
    }
  },
  actions: {
    fetchSocialLoginList({ commit }) {
      const list = ['kakao', 'naver', 'google']
      commit('setSocialLoginList', list)
    }
  }
}
