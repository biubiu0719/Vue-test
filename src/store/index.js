import Vue from 'vue'
import Vuex from 'vuex'

// 挂载Vuex
Vue.use(Vuex)

// 创建Vuex对象
const store = new Vuex.Store({
    state: {
        temp: 1
    },
    mutations: {
        setTemp(state, data) {
            state.temp = data;
        }
    }
})

export default store