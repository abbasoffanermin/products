<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div>

        <div class="container">
<div class="row">
    <div  v-for="(item, index) of all_products" :key="index" class="col">
        <div class="card" style="width: 18rem;">
  <img :src=item.image class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text">{{item.body}}</p>
    <RouterLink :to="`/AllProducts/Details/${item.id}`" class="btn btn-primary">Details</RouterLink>
  </div>
</div>
    </div>
</div>
       </div> 

    </div>
</template>

<script>
export default{
data(){
    return{
        all_products:{}
    }
},


    created(){
      
            
      this.axios.get("https://fakestoreapi.com/products").then(({data})=>{
      this.all_products=data
     

      })

    
        }
    
}

</script>