// token | 个人信息

const state = () => {
  return {
    token: '3ddad996-f1da-4014-a9c1-af424f8df89b',
    name: 'zbt',
    age: 18,
    height: 180
  }
}

const mutations = {
  // 设置token
  SET_TOEKN: (state, data) => {
    state.token = data
  }
}

const actions = {

}

const getters = {
  // 是否登录
  isLogin: () => {

  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}