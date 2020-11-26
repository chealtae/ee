import axios from 'axios'

const state= {
    // bought items
    cart: [
        {id: 1,typeid: 100 ,goodsName:'包邮 IOPE亦博气垫粉底霜 ',introduce: '看似是粉饼状，其实涂起来是液体粉底的质地',price: 200,img: 'images/product/01.jpg'},
        {id: 2,typeid: 100 ,goodsName:'正品 魔法森林蜗牛面膜贴 ',introduce: '全棉布膜，透气，服帖！',price: 200,img: 'images/product/02.jpg'},
        {id: 3,typeid: 100 ,goodsName:'现货 LANEIGE兰芝新概念BB水凝霜 ',introduce: '焕发健康水润 打造全新美丽',price: 120,img: 'images/product/03.jpg'},
    ],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products:[
      {id: 1,typeid: 100 ,goodsName:'包邮 IOPE亦博气垫粉底霜 ',introduce: '看似是粉饼状，其实涂起来是液体粉底的质地',price: 200,img: 'images/product/01.jpg'},
      {id: 2,typeid: 100 ,goodsName:'正品 魔法森林蜗牛面膜贴 ',introduce: '全棉布膜，透气，服帖！',price: 200,img: 'images/product/02.jpg'},
      {id: 3,typeid: 100 ,goodsName:'现货 LANEIGE兰芝新概念BB水凝霜 ',introduce: '焕发健康水润 打造全新美丽',price: 120,img: 'images/product/03.jpg'},
      {id: 4,typeid: 100 ,goodsName:' 幻金凝彩完美抗皱bb霜 裸妆 遮瑕 ',introduce: '狙击痘印暗黄 自然提亮 拒绝假白',price: 148,img: 'images/product/04.jpg'},
      {id: 5,typeid: 100 ,goodsName:' 猫女染色液体唇彩 唇水 ',introduce: '丝绒轻雾 盈润朝露 双重质地 细腻触感',price: 48,img: 'images/product/05.jpg'},
      {id: 6,typeid: 100 ,goodsName:'完美红色全效bb霜 防晒裸妆遮瑕强 ',introduce: '提升原生水分感 使肌肤匀净透亮',price: 79,img: 'images/product/06.jpg'},
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