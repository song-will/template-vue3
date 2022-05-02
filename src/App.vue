<template>
    <div>
        {{countStore.count}}-{{countStore.count}}
        <button @click="countStore.$patch({count: countStore.count+1})">+</button> -->
        <img :src="webpackPng" alt="">
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import webpackPng from '@/assets/imgs/webpack.png';
import { defineComponent, ref, reactive } from 'vue';
// import { useUserStore } from '@/store/user'
import { useCountStore } from '@/store/counter'
 
interface Form {
    name: string
    age: number | null
}
export default defineComponent({
    setup() {
        const name = ref<String>('')
        name.value = 'song111212'
        const form = reactive<Form>({
            name: '',
            age: null
        })
        // const userStore = useUserStore()
        const countStore = useCountStore()
        return {
            name,
            form,
            webpackPng,
            countStore
        }
    }
})
</script>

<style lang="less" scoped>
.app {
    color: red;

    .vue3 {
        color: orange;
    }
}
</style>
