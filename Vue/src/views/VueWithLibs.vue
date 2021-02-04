<template>
  <h2>{{ text }}</h2>

  {{ count }}
  <b v-if="is10000"> JUHU 10000 </b>
  <button @click="addCounter()">Up</button>

  <hr />
  <img
    v-if="isImageVisible"
    src="https://media.istockphoto.com/photos/cute-little-exotic-female-winter-white-dwarf-hamster-receives-massage-picture-id1198861209?k=6&m=1198861209&s=170667a&w=0&h=T8OUZIJ-i1VbuxJ335PMEXaFZ6nKWLB39A-8a-lDECw="
  />
  <button v-if="!isImageVisible" @click="showImage()">Display iamge</button>

  <hr />
  <h4>Statemanagement</h4>
  <i>Post will load after 5 seconds</i>
  <br />
  <br />
  {{ post$ }}

  <hr />

  <div>
    <label> Name </label>
    <input type="text" v-model="name" />
  </div>

  <div>
    <label> Straße </label>
    <input type="text" v-model="street" />
  </div>
</template>

<script lang="ts">
import { PostStore } from "@/store";
import { Vue } from "vue-class-component";
import { Watch } from "vue-property-decorator";

export default class App extends Vue {
  public text = "Hi Vue with libs";
  public count = 9999;
  public isImageVisible = false;
  public post$ = {};

  // Forms
  public name = "";
  public street = "";

  created() {
   const test = new PostStore();
    this.post$ = test.getPost$;
    test.loadPost(1);
  }

  public addCounter(): void {
    this.count++;
  }

  public showImage(): void {
    this.isImageVisible = true;
  }

  // Computed
  get is10000() {
    return this.count === 10000;
  }

  @Watch("count")
  onCountChange(newValue: number, oldValue: number) {
    // with or without param
    if (newValue === 10001) {
      this.text = "Oh Watcher said newValue is 1001 - oldvalue is " + oldValue;
    } else {
      this.text = "Oh Watcher said newValue is " + newValue;
    }
  }
}
</script>

<style>
#app {
}
</style>
