<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
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
        return {
            name,
            form
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
