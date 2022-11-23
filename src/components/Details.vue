<template>
    <div>
     
<h1>{{$route.params.id}}</h1>
    </div>
</template>

<script>
export default{
  data(){
    return{

    }
  },
created(){
    let id=this.$route.params.id
    console.log(id);
    axios.get(`https://fakestoreapi.com/${id}`).then(({data})=>{
   console.log(data);
     

      })
}

}
</script>