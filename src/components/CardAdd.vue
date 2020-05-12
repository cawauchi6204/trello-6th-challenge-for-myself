<template>
  <form
    @submit.prevent="addCardToList"
    :class="classList"
  >
    <input
      type="text"
      class="text-input"
      placeholder="Add new card"
      v-model="body"
      @focusin="startEditing"
      @focusout="finishEditing"
      >
      <button
        type="submit"
        class="add-button"
        v-if="isEditing || titleExists"
        >Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      body:'',
      isEditing:false
    }
  },
  methods: {
    addCardToList() {
      this.$store.dispatch('addCardToList' , {body:this.body,listIndex:this.listIndex})
      this.body = ''
    },
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    }
  },
  computed: {
    classList() {
      const classList = ['addlist']
      if(this.isEditing) {
        classList.push('active')
      }
      if(this.titleExists) {
        classList.push('addable')
      }
      return classList
    },
    titleExists() {
      return this.title.length > 0
    }
    // titleExistsの返り値をカンニング
  }
}
</script>

<style>

</style>