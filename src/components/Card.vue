<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
  <div>
   
    <div class="container">
<div class="row">
    <div  v-for="(item, index) of products_limit" :key="index" class="col">
        <div class="card" style="width: 18rem;">
  <img :src=item.image class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text">{{item.body}}</p>
    <div class="d-flex justify-content-between">
      <RouterLink :to="`/Details/${item.id}`" class="btn btn-primary">Details</RouterLink>
    <button type="button" class="btn btn-info" @click="sebet(item.title)">sebet</button>
    </div>
  </div>
</div>
    </div>
</div>
       </div> 
   

        
  </div>
</template>

<script>
export default {
  props: ["products_limit"],
   data() {
    return {
       Sebet:[]
    };
  },
  
methods:{
sebet(id){
  this.Sebet+=this.Sebet.push(localStorage.setItem("sebet",JSON.stringify(id)))
      
}
}
 

  
}
</script>