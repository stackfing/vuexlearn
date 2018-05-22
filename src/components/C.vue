<template>
    <div class="C">
        <common title="c"></common>
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
.C {
  width: 100%;
  height: 100%;
  background-color: aqua;
  position: fixed;
}
</style>
