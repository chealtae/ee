// a.js
const state = {
    counta:-100
  }
  
  const mutations = {
    increment(state){
        state.counta++
      }
  }
  
  const actions = {
    increment({commit}){
        commit('increment')
      }
  }

  const getters = { 
    doublecounta(state){
      return state.counta*2
    } 
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }