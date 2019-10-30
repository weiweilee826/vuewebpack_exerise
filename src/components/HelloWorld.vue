<template>
  <div class="hello">
    <!-- .prevent可防止瀏覽器預設行為 -->
    <a href="#" @click.prevent="signout">登出</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    signout() {
      const api = `${process.env.APIPATH}logout`;
      const vm = this;
      console.log("$$$" + api);
      //使用post把用戶資料傳進來
      this.$http.post(api).then(response => {
        console.log(response.data);
        //登入成功跳回首頁
        if (response.data.success) {
          vm.$router.push("/login");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
