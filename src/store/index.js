// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// //import { productGetters, manufacturerGetters } from './getters'

// const moduleA = {
//   namespaced: true,
//   state: () => ({ 
//     counta:-100
//    }),
//   mutations: { 
//     increment(state){
//       state.counta++
//     }
//    },
//   actions: { 
//     increment({commit}){
//       commit('increment')
//     }
//    },
//   getters: { 
//     doublecounta(state){
//       return state.counta*2
//     } 
//   }
// }

// const moduleB = {
//   namespaced: true,
//   state: () => ({ 
//     countb: 100
//    }),
//    mutations: { 
//     increment(state){
//       state.countb++
//     }
//    },
//   actions: { 
//     increment({commit}){
//       commit('increment')
//     }
//    },
//   getters: { 
//     doublecountb(state){
//       return state.countb*2
//     }
//    }
// }

// // ./src/store/index
// export default new Vuex.Store({
//     strict: true,
//     modules:{
//       a: moduleA,
//       b: moduleB
//     },
//     state: {
//       // bought items
//       cart: ['abc','xyz'],
//       // ajax loader
//       showLoader: false,
//       // selected product
//       product: {},
//       // all products
//       products: [],
//       // all manufacturers
//       manufacturers: [],
//       count: 0,
//       todos: [
//         { id: 1, text: '...', done: true },
//         { id: 2, text: '...', done: false },
//         { id: 3, text: '...', done: true },
//       ]
//     },
//     // GETTERS
//     //getters: Object.assign({}, productGetters, manufacturerGetters)
//     getters:{
//       doneTodos: state => {
//         return state.todos.filter(todo => todo.done)
//       },
//       doneTodosCount: (state, getters) => {
//         return getters.doneTodos.length
//       },
//       getTodoById: (state) => (id) => {
//         return state.todos.filter(todo=>todo.id===id)
//       }
//     },
//     mutations:{
//       increment(state, payload){//Mutation 必须是同步函数
//         state.count+=payload.amount
//       }
//     },
//     actions:{
//       // increment(context){
//       //   context.commit('increment')
//       // }
//       increment({commit}, payload){
//         return new Promise((resolve)=>{
//           setTimeout(() => {
//             commit('increment', payload)
//             resolve()
//           }, 2000)
//         })
        
//       }
//     }
//   })

import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './models/a'
import moduleB from './models/b'
import moduleProduct from './models/product'

Vue.use(Vuex)
//import { productGetters, manufacturerGetters } from './getters'
// ./src/store/index
export default new Vuex.Store({
    strict: true,
    modules:{
      a: moduleA,
      b: moduleB,
      p: moduleProduct
    }
  })