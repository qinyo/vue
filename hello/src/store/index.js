import { createStore } from "vuex";

export default createStore({
    state:{
        sum:0
    },
    mutations:{
        JIA(state,value){
            console.log('mutations中的JIA被调用了')
            state.sum += value
        },
    }
})