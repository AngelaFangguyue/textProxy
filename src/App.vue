<template>
  <div id="app">
    <div>测试请求</div>
    <button @click="getMess">点击后，会请求》http://api.douban.com/v2/movie/top250</button>
    <br>
    <button @click="getMess1">点击后，会请求》https://movie.douban.com/j/search_subjects</button>
    <br>
    <button @click="getMess2">点击后，会请求》https://movie.douban.com/j/search_subjects</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  methods:{
    // 为给定 ID 的 user 创建请求
    getMess(){
      this.$axios.get('/movie/top250')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });},
    // https://movie.douban.com/j/search_subjects

    getMess1(){
      this.$axios.get('/search_subjects')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });},

    //
    getMess2(){
      this.$axios.get('/j/search_subjects')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });},

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
