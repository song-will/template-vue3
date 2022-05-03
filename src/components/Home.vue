<template>
    <div class='home'> 
        home
        {{countStore.count}}
        <el-button type="primary" @click="countStore.$patch({count: countStore.count+1})">+</el-button>  
        <el-button @click="countStore.decrementCount">-</el-button>
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