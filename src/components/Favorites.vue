<template>
  <div class="favorites">
    <div class="favoritesContent">
      <div class="results" id="results" v-if="response">
        <div class="favesHeading" v-if="response.length >= 1"><h3>Favourites</h3></div>
        <div class="items" v-if="response.length >= 2">
          <div class="item" v-for="(item, index) in faves" v-bind:id="item.title"> 
            <div class="title itemButton">
                <button v-on:click="removeFave(item.title)"><font-awesome-icon icon="star"/></button>
                <p>{{item.title}}</p>
            </div>
            <ul><li v-html="item.body"></li></ul>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
      props:["response", "faves"],
      data () {
      return {
      localFaves: this.faves
    }
  },
  methods: {
    removeFave(title){
      this.$emit('removed', title);
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.favorites{
  background-color: #F7FEFA;
}

 h3{
  font-size: 1.5em;
  font-weight: bold;  
  color: #22965E;
}


.favorites{
  padding: 35px;
}

.item{
  padding:15px 10px;
}

.item, .resultsHeadings{
  display: grid;
  grid-template-columns:150px 150px 200px;
}

 button{
  padding: 0;
  cursor: pointer;
  border: none;
  font-weight: bold;
  font-size: 1.5em;
  margin-left: 15px;
  transition: .3s;
  background:transparent;
  padding: 5px 6px 8px 6px;
}

.btnActive{
    color: #22965E;
}

.items button:hover{
  color: #1D5B91;
}

.item button{
  margin: 0;
    color: #AAAAAA;
}

a{
  text-decoration: none;
  transition: .3s;
} 


.items{
  margin-right: 35px;
}


.item{
  padding: 20px;
}

.item p,
.item ul{
  padding: 20px 0px 0px 10px;
}

.item, .resultsHeadings{
  display: grid;
  grid-template-columns:2fr 2fr 1fr;
  align-items: start;
}



ul{
  margin-top: 5px;
}

a{
  cursor: pointer;
}

.itemButton button{
  margin: 10px 0px;
  color: #22955E;
}

.title{
  display: flex;
}


</style>