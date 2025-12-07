import { defineStore } from "pinia";


export const useCounterOptStore = defineStore('counterop', {
    state: () => ({
        count : 0
    }),
    getters: {
        double(state){
            return state.count*2
        }
    },
    action:{
        increment(){
            this.count++
        }
    }
})