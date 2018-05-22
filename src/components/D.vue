<template>
    <div class="D">
        <common title="d"></common>
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
.D {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 170, 72);
  position: fixed;
}
</style>
