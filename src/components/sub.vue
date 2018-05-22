<template>
    <div class="sub">
        <button @click="sendmessage">Click Me</button>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    sendmessage() {
        this.$emit('sends')
    }
  }
};
</script>
