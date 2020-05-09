<template>
  <form
    @submit.prevent="addList"
    :class="classList"
  >
    <input
      type="text"
      class="text-input"
      placeholder="Add new List"
      v-model="title"
      @focusin="startEditing"
      @focusout="finishEditing"
      >
    <button
      type="submit"
      class="add-button"
      v-if="isEditing || titleExists"
      >
      Add
      </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title:'',
      isEditing:false,
    }
  },
  methods:{
    addList() {
      this.$store.dispatch('addList',{title:this.title})
      this.title=""
    },
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    },
  },
  // オブジェクトを返す算出プロパティにバインドもすることもできます。
  computed:{
    classList() {
      const classList =['addlist']
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
  }
}
</script>

<style>

</style>