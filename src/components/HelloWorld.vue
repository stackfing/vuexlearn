<template>
  <div class="hello">
    
  </div>
</template>

<script>
import subs from "./sub";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      myinfo: {
        name: "ur",
        age: 2,
        email: "333@qq.com"
      }
    };
  },
  components: {
    subs
  },
  methods: {
    change() {
      this.$store.commit("getUserInfo", this.myinfo);
    },
    ch() {
      this.$store.commit("changecount");
    },
    rec() {
      console.log("asdsad");
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
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
