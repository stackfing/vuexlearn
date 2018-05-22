<template>
    <div class="header">
        <div class="left" @click="back">
            back
        </div>
        <div class="center">
            {{title}}
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["title"],
  methods: {
    back() {
      this.$store.commit("setTransition", "turn-off");
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: rgb(100, 231, 60);
}
.clearfix {
  overflow: auto;
}
.left {
  position: fixed;
  left: 0px;
  width: 60px;
}
.center {
  left: 50%;
  position: fixed;
}
</style>
