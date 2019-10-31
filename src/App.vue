<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  
  // created(){
    //API伺服器路徑 + 申請的路徑> :api_pat = lee 
    //const api ='https://vue-course-api.hexschool.io/api/lee/products';

    //使用環境變數取得
    // const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;

    // console.log(process.env.APIPATH,process.env.CUSTOMPATH);
    // this.$http.get(api).then((response) => {
    //   console.log(response.data);
    // })
  // }
}
</script>


<style lang="scss">
  //vue cli sass 中直接取用 node_modules 的路徑
  @import "./assets/all";

</style>