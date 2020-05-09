<template>
  <form 
    @submit.prevent="addCardToList" 
    class="addcard"
  >
    <input 
      type="text"
      class="text-input"
      placeholder="Add new card"
      v-model="body"
      >
      <button 
        type="submit"
        class="add-button"
        >Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      body:''
    }
  }
}
</script>

<style>

</style>