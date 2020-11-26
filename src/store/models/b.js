const state = {
    countb:-100
  }
  
  const mutations = {
    increment(state){
        state.countb++
      }
  }
  
  const actions = {
    increment({commit}){
        commit('increment')
      }
  }

  const getters = { 
    doublecountb(state){
      return state.countb*2
    } 
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }