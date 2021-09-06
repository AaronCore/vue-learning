<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '深圳大学',
      address: '南山区'
    }
  },
}
</script>

<style>
.school {
  background-color: gray;
}
</style>