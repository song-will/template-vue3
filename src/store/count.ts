import { defineStore } from 'pinia'

export const useCountStore = defineStore({
    id: 'count',
    state: () => ({
        count: 1001
    }),
    actions: {
        addCount () {
            this.count++;
        },
        decrementCount () {
            this.count--;
        }
    }
})
