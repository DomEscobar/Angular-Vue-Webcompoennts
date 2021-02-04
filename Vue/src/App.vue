<template>
  <div>
    <Form />
  </div>

  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ext">Vue with 3rd Party libs</router-link> |
      <router-link to="/normal">Vue just without any</router-link> |
      <router-link to="/form">Form</router-link>
    </div> -->
  <!-- <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComponent from "./views/Form.vue";

export default defineComponent({
  components: {
    Form: FormComponent,
  },
  props: {
    height: Number,
  },
});
</script>

<style lang="scss">
// @import "../../scss/_variables.scss"; // import cake here
</style>
