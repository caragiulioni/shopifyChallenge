
<template>
  <div class="searchBarContainer">
    <div class="search">
      <div class="searchBar">
        <form v-on:submit="searchWaste(search)">
          <input type="search" placeholder="Search Ex. Plastic or Glass or Rubber" v-model="search" @input="onSearchChange" />
          <button type="submit"><font-awesome-icon class="searchIcon" icon="search" /></button>
        </form>
      </div>

      <div class="results" id="results" v-if="response" >
        <div class="notFound" v-if="filteredList.length == 0">
          <p>Sorry buddy, try another search!</p>
        </div>
        <div class="items" v-if="response.length >= 1">
          <div class="item" v-for="(item, index) in filteredList" v-bind:id="item.title" :key="index"> 
            <div class="title itemButton">
                <button class="btn" v-on:click="addFave(item.title, item.forks), $event.target.classList.toggle('btnActive')"><font-awesome-icon icon="star" /></button>
                <p>{{item.title}}</p>
           </div>
            <ul><li v-html="item.body"></li></ul>
          </div>
        </div>
      </div>
    </div>

    <div class="favesContainer"  v-if="faves.length >= 2">
      <favorite  v-bind:response="response" v-bind:faves="faves" @removed="handleRemove"></favorite>
    </div>

  </div>
</template>

<script>

export default{
  data () {
    return {
      search:'',
      response: null,
      items: [],
      faves: [],
      activeItems: [],
      isHidden: true
    }
  },
  methods: {
    searchWaste(q) {
    if (q.length >= 1){
      fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000' + q)
        .then((j) => {
          return j.json();
        })
        .then ((r) => {
        console.log(r);
        //console.log(q);

        
        this.qInput = q;
        this.response = r;

          })
        }
    },
    addFave(title){
    console.log("click", title); 

    ///console.log(this.response)  
    let fave = this.response.filter((item) =>{
        return item.title === title
    })
    //console.log(fave);
    this.faves.push(fave[0]);
    }, 
    pushItem(index) {
      if(this.activeItems.includes(index)) {
        this.activeItems.splice(this.activeItems.indexOf(index), 1)
      } else {
        this.activeItems.push(index)
      }
    },
    handleRemove(title){
     // console.log('this is been removed', id)
        let newFaves = this.faves.filter((item) => {
        return item.title !== title
      })
      //console.log(newFaves)
      this.faves = newFaves;
      },
        onSearchChange(event) {
      if(event.target.value.trim().length === 0) {
        this.response = null;
        }
      }
    },//end method
    computed: {
    filteredList(keyword) {
        return this.response.filter((item) =>{
          //tried (among other things) to push BODY into a new array to fool the 
          //security inplace re: displaying escaped html. no luck. 
          //console.log(item.body)
          // let newBody = item.body;
          // let bodyFix = [];
          // newBody.push(bodyFix[0]);
          // console.log(bodyFix)

        return item.keywords.toLowerCase().includes(this.qInput.toLowerCase())
         })

        }
    }
  };
</script>

<style scoped>

input{
  height: 45px;
  width: 85vw;
  font-size: 1.1em;
  padding-left: 10px;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
 color: lightgrey;
}
::-moz-placeholder { /* Firefox 19+ */
  color: lightgrey;
}
:-ms-input-placeholder { /* IE 10+ */
  color: lightgrey;
}
:-moz-placeholder { /* Firefox 18- */
  color: lightgrey;
}

.searchBar button{
  background-color:#22945F;
}

input[type="search" i]{
 border: 1px solid lightgrey;
}

button{
  padding: 0;
  cursor: pointer;
  color:white;
  border: none;
  font-weight: bold;
  font-size: 1.5em;
  margin-left: 15px;
  transition: .3s;
  background:transparent;
  padding: 5px 6px 8px 6px;
  }

.btn{
  color: #AAAAAA;
  margin: 0;
}
.btnActive{
    color: #22965E;
}

.items button:hover{
  color: #1D5B91;
}

a{
  text-decoration: none;
  transition: .3s;
} 

.items{
  margin-right: 35px;
}

.results{
  background: #fff;
}

.searchIcon{
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";  
}

.searchIcon:hover{
  color:white;
}

.search{
  padding: 20px 35px;
}


.notFound{
  font-size: 12px;
  font-weight: bold;
  padding: 10px;
  color: grey;

}

.item{
  padding: 20px;
}

.item p,
.item ul{
  padding: 10px 0px 0px 10px;
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

.item a{
  color:#778ca3;
  transition: .3s ease-in-out;
  padding: 10px;
}

.itemButton{
  margin: 10px 0px;
}

.title{
  display: flex;
}

</style>