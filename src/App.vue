<template>

  <div id="app">
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'App',
};
</script>

<style>



#app {
  font-family: 'Arial', sans-serif;
  margin: 0;
  color:#333333;
  font-size: 1.1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, h1, h2, h3, a, p, table, ul{
  margin: 0;
}


</style>
