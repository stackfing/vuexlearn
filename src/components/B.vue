<template>
    <div class="B">
        <common title="b"></common>
    </div>
</template>

<script>
import common from './common'
export default {
  data() {
    return {};
  },
  components: {
      common
  }
};
</script>

<style scoped>
.B {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 105, 250);
  position: fixed;
}
</style>
