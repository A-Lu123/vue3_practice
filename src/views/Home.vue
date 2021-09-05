<template>
    <div>
        <Header/>
        <Aside/>
        <div class="content-box">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";

export default {
    components: {
        Header,
        Aside,
    }
}
</script>
<style lang="">
    
</style>