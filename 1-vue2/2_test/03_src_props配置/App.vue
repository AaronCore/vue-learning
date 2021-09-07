<template>
  <div>
    <Student name="张三" sex="男" :age="25"></Student>
    <hr>
    <Student name="小红" sex="女" :age="22"></Student>
  </div>
</template>

<script>
import Student from './components/Student'

export default {
  name: 'App',
  components: {
    Student
  }
}
</script>

<style>

</style>
