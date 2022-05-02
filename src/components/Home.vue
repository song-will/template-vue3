<template>
    <div class='home'> 
        home
        {{countStore.count}}
        <button @click="countStore.$patch({count: countStore.count+1})">+</button>  
        <button @click="countStore.decrementCount">-</button>
        <router-link to="/about">link</router-link>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import { useCountStore } from '@/store/count'
export default defineComponent({
    setup() {
        const countStore = useCountStore()
        return {
            countStore
        }
    }
})
</script>
<style lang='less' scoped>
</style>