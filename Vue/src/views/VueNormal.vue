<template>
  <div>
    <h2>{{ text }}</h2>
    {{ counter }}
    <b v-if="is1000"> JUHU 1000 </b>
    <button @click="increment()">Increment</button>

    <hr />
    <img
      v-if="isImageVisible"
      src="https://media.istockphoto.com/photos/cute-little-exotic-female-winter-white-dwarf-hamster-receives-massage-picture-id1198861209?k=6&m=1198861209&s=170667a&w=0&h=T8OUZIJ-i1VbuxJ335PMEXaFZ6nKWLB39A-8a-lDECw="
    />
    <button v-if="!isImageVisible" @click="showImage()">Display iamge</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      text: "Normal Vue without libs",
      counter: 999,
      isImageVisible: false,
    };
  },

  /** Methodes to template */
  methods: {
    increment() {
      this.counter++;
    },

    showImage() {
      this.isImageVisible = true;
    },
  },

  /**Sepc reactive | cached properties or functions*/
  computed: {
    is1000() {
      return this.counter === 1000; // Reactive nur wenn counter refreshed wird
    },
  },

  //  define listners to props
  watch: {
    counter(newValue, oldValue) {
      if (newValue == 1001) {
        this.text = "Oh Watcher said newValue is 1001 - oldvalue is " + oldValue;
      }
    },
  },

  setup() {
    return {};
  },
});
</script>