<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
    data () {
    return {
      title: 'Toronto Waste Lookup'
    }
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header{
  background-image: linear-gradient(to right, #1D5A92 , #22965E);
  padding: 40px 0px 40px 0px;
}

h1{
  color: white;
  text-align: center;
  font-size: 2.5em;
}
</style>