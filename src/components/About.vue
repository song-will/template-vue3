<template>
    <div class='about'> 
        about
        <button @click="link">link</button>
    </div>
</template>
<script lang='ts'>
import { defineComponent} from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    setup() {
        const router = useRouter()

        const link = () => {
            router.push('/')
        }

        return {
            link
        }
    }
})
</script>
<style lang='less' scoped>
</style>