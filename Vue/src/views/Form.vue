<template>
<h1> VUE FORM </h1>
  <form v-if="!submited" class="review-form" @submit.prevent="checkForm">
    <div class="form-row">
      <div class="col-md-4 mb-3">
        <label for="validationDefault01">{{ $t("form.firstname") }}</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault01"
          placeholder="First name"
          v-model="name"
        />
      </div>
      <div class="col-md-4 mb-3">
        <label for="validationDefault02">{{ $t("form.lastname") }}</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault02"
          placeholder="Last name"
          v-model="lastname"
        />
      </div>
    </div>

    <p v-if="errors.length">
      <b>{{ $t("form.error") }}</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </p>

        <input class="button" type="submit" value="Submit">  
  </form>

  <div v-if="submited"> Erfolgreich gesendet </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      errors: [],
      name: undefined,
      lastname: undefined,
      submited: undefined,
    };
  },

  methods: {
    checkForm() {
      if (this.name && this.lastname) {
        this.submited = true;
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.age) {
        this.errors.push("Age required.");
      }
    },
  },
});
</script>