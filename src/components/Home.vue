
<script setup>
import { RouterLink } from 'vue-router';
import CardVue from './Card.vue';
</script>
<template>
    <div>
        <div class="container">
      <div class="row">
       <CardVue :products_limit="products_limit"/>
      </div>
          
    

       <RouterLink class="all-products" to="/AllProducts">All products</RouterLink> 
   
    </div>
   
    </div>
  </template>
  
  
  <script>
  export default{
   data(){
    return{
   products_limit:{},
  
    }
   },
   
    created(){
      this.axios.get("https://fakestoreapi.com/products?limit=5").then(({data})=>{
      this.products_limit=data

      })

    },
    
  }
  </script>

 
 
 <style>
  .all-products{
    margin-left: 500px;
    margin-top: 60px;
    margin-bottom:40px ;
padding-left: 20px;
padding-right: 20px;
padding-top: 5px;
padding-bottom: 5px;
  background-color: #0d6efd;
  color: #fff;
  text-decoration: none;
  border-radius: 15px;
  }
</style>