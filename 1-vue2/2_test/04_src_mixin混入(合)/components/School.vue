<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// import {s1, s2} from "@/mixin";
export default {
  name: "School",
  data() {
    return {
      name: "深圳大学",
      address: "深圳市"
    }
  },
  // mixins: [s1, s2]
}
</script>

<style scoped>

</style>