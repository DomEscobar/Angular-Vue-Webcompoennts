import { computed, ref } from "vue"
import { createStore } from 'vuex'

// Vuex state management ?

export default createStore({
  state: {
    post: ""
  },
  mutations: {
    setPost(state, payload) {
      state.post = payload
    }
  },
  actions: {
  },
  modules: {
  }
})

///------------ OR with composition API

export class PostStore {
  state = ref({ post: "" }) // or reactive({  })   == Vue.observable() 

  setPost(post: any) {
    this.state.value.post = post
  }

  async loadPost(id: any) {
    await new Promise((resolve) => setTimeout(() => { resolve(null) }, 5000));
    this.setPost("This is a secret post for my friends and family loaded from the fake server")
  }

  getPost$ = computed(() => this.state.value.post)
}




// Composition as state https://vueschool.io/articles/vuejs-tutorials/state-management-with-composition-api/ 