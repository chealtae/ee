import axios from 'axios'

const state= {
    // bought items
    cart: [
        {id: 100, name: 'matepro 40', manufacturer: 100, price:8000, image:'华为.png',description:'华为最新手机'},
        {id: 200, name: 'iphone 11', manufacturer: 200, price:10000, image:'苹果.png',description:'苹果最新手机'}
    ],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [
        {id: 100, name: 'matepro 40', manufacturer: 100, price:8000, image:'华为.png',description:'华为最新手机'},
        {id: 200, name: 'iphone 11', manufacturer: 200, price:10000, image:'苹果.png',description:'苹果最新手机'},
        {id: 300, name: 'vivo2020', manufacturer: 300, price:7000, image:'vivo.png',description:'vivo最新手机'},

    ],
    // all manufacturers
    manufacturers: [
        {id: 100, name: '华为'},
        {id: 200, name: '苹果'},
        {id: 300, name: 'vovo'},
    ],
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
    ]
  }
  // GETTERS
  //getters: Object.assign({}, productGetters, manufacturerGetters)
  const getters ={
    allcart: (state) =>{
      return state.cart
    },
    cartById: (state, getters) => id => {
      console.log('id='+id)
        if (getters.allCart.length > 0) {
          // console.log('len='+getters.allCart.length)
          return getters.allCart.filter((p) => p.id === id)[0]
        } else {
          return state.cart
        }
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.filter(todo=>todo.id===id)
    },

    allProducts: (state) => {
      return state.products
    },
    allCart: (state) => {
      return state.cart
    },
    productById: (state, getters) => id => {
      console.log('id='+id)
        if (getters.allProducts.length > 0) {
          console.log('len='+getters.allProducts.length)
          return getters.allProducts.filter((p) => p.id === id)[0]
        } else {
          return state.product
        }
    },
    allManufacturers: state => state.manufacturers
  }

  const mutations ={
    increment(state, payload){//Mutation 必须是同步函数
      state.count+=payload.amount
    },
    saveProduct(state, payload){
        state.showLoader=true
        state.products.push(payload)
    },
    updateProduct(state, payload){
      let i = state.products.findIndex(pro=>pro.id==payload.id)
      console.log('i='+i)
      console.log(state.products[i])
      state.products.splice(i,1,payload)
    },
    removeProduct(state, id){
      let i = state.products.findIndex(pro=>pro.id==id)
      //console.log('i='+i)
      //console.log(state.products[i])
      state.products.splice(i,1)
    },
    removeCart(state, id){
      let i = state.cart.findIndex(pro=>pro.id==id)
      state.cart.splice(i,1)
    },
    allProducts(state, payload){
      state.products = payload
    },
    allManus(state, payload){
      state.manufacturers = payload
    },
    saveCart(state, payload){
      state.showLoader=true
      state.cart.push(payload)
  },
    
  }
  const actions = {
    // increment(context){
    //   context.commit('increment')
    // }
    increment({commit}, payload){
      return new Promise((resolve)=>{
        setTimeout(() => {
          commit('increment', payload)
          resolve()
        }, 2000)
      })
    },
    saveProduct({commit}, payload){
        //
        axios.post('http://localhost:9090/product/new', payload).then(response=>{
          if(response.data==1){
            commit('saveProduct', payload)
            alert('成功添加产品！')
            
          }else{
            alert('添加产品失败！')
          }
        })
    },
    productById(){//从服务端数据库获取数据

    },
    allProducts({commit}){
      //发送http请求
      axios.get(`http://localhost:9090/product/all`).then(response => {
        commit('allProducts', response.data)
      })
      axios.get(`http://localhost:9090/manu/all`).then(response => {
        commit('allManus', response.data)
      })
    }
  }

  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }