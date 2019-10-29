import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    // 能够获取到当前状态树的state,提交mutation的时候传的参数
    state.singer = singer
  }
}
export default mutations
