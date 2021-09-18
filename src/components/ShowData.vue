<template>
    <div>
      <h3>{{ title }}</h3>  
      <pre class="value">{{ valueString }}</pre>
    </div>
</template>
<script>
import { computed } from "vue";
export default {
   props:["value", "title"],
   setup(props) {
       const valueString = computed(() => {
           return JSON.stringify(props.value, null ,2);
       })

       return {
        valueString
       }
   } 
}
</script>
<style>
.value {
    font-weight: bold;
}
</style>