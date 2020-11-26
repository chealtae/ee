<template>
    <div>
        <div>count: {{ count }}</div>
        <button @click="increment(10)">++10</button>
        <button @click="increment(-10)">--10</button>
        <div>x+y: {{ xy }}</div>
        <div>doneTodosCount: {{ doneTodosCount }}</div>
        <div>getTodoById: {{ getTodoById(2) }}</div> 
        <div>counta: {{ counta }}</div> 
        <div>countb: {{ countb}}</div> 
        <div>count2a: {{ count2a }}</div> 
        <div>count2b: {{ count2b}}</div> 
        <button @click="incrementa">++a</button>
        <button @click="incrementb">++b</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'

	export default {
        name: 'counter',
        data(){
            return {
                x: 1,
                y: 2
            }
        },
		// computed: {
        //     count () {
        //         return this.$store.state.count
        //     }
        // }

        // computed:mapState({
        //     count: state => state.count
        // })
        methods:{ //定义方法
            getTodoById(id){
                const todo = this.$store.getters['p/getTodoById'](id)
                console.log(todo)
                return todo
            },
            increment(a){
                //this.$store.commit('increment',{amount:a})
                //this.$store.dispatch('increment', {amount:a})
                this.$store.dispatch('increment', {amount:a}).then(()=>{
                    console.log('action is successful!')
                })
            },
            incrementa(){//???
                console.log('-------call a-----------')
                return this.$store.commit('a/increment')
            },
            incrementb(){///???
                console.log('-------call b-----------')
                return this.$store.commit('b/increment')
            },
            //methods: mapActions('a',{incrementa: 'increment'})

        },
        computed:{ //定义属性
            xy: function(){ return  this.x+this.y}, //局部状态
            doneTodosCount () {
                return this.$store.getters.doneTodosCount
            },
            counta(){
                return this.$store.state.a.counta
            },
            countb(){
                return this.$store.state.b.countb
            },
            count2a(){
                //getters['account/isAdmin']
                return this.$store.getters['a/doublecounta']
            },
            count2b(){
                return this.$store.getters['b/doublecountb']
            },
            ...mapState({
                 // 映射 this.count 为 store.state.count
                count: 'count',  //仓库中的状态
            }),
            
        }
	}
</script>

<style>
</style>