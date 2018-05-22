<template>
  <div id="app">
    <router-link to="/A" @click.native="clickLink">A</router-link>
    <router-link to="/B" @click.native="clickLink">B</router-link>
    <router-link to="/C" @click.native="clickLink">C</router-link>
    <router-link to="/D" @click.native="clickLink">D</router-link>
    <transition :name="$store.state.states">
      <router-view/>
    </transition>
    <div>Index Page</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
  methods: {
    clickLink() {
      this.$store.commit("setTransition", "turn-on");
    }
  },
  mounted() {
    var _this = this;
    window.addEventListener(
      "popstate",
      function(e) {
        _this.$store.commit("setTransition", "turn-off");
      },
      false
    );
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.btn {
  width: 50%;
}
html,
body,
#app {
  height: 100%;
}
.turn-on-enter {
  transform: translate3d(100%, 0, 0);
}
.turn-on-leave-to {
  /* transform: translate3d(-20%, 0, 0); */
}
.turn-on-enter-active,
.turn-on-leave-active {
  transition: transform 0.4s ease;
}
.turn-off-enter {
  /* transform: translate3d(-20%, 0, 0); */
}
.turn-off-leave-to {
  transform: translate3d(100%, 0, 0);
}
.turn-off-enter-active,
.turn-off-leave-active {
  transition: transform 0.4s ease;
}
.turn-off-leave-active {
  z-index: 2;
}
</style>
