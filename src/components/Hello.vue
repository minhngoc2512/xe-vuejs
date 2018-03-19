<template>
  <div>
      <button v-on:click="getData()">{{demo}}</button>
  </div>
</template>
<script>
export default{
    data(){
        return{
            demo: 'demo'
        }
    },
    methods:{
        getData(){
            window.axios.get('https://xe.vatgia.com/api/rewrites/xe-hoi-mazda').then(response =>{
                console.log(response.data);
            });
            console.log(this.$route);
       
        }
    }
}
</script>
