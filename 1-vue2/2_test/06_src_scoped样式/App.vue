<template>
  <div id="app">
    <h1 class="title">你好啊</h1>
    <hr>
    <School></School>
    <hr>
    <Student></Student>
  </div>
</template>

<script>
import Student from './components/Student'
import School from "./components/School"

export default {
  name: 'App',
  components: {
    Student,
    School
  }
}
</script>

<style scoped>
.title {
  color: red;
}
</style>