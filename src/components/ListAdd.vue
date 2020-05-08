<template>
  <form
  @submit.prevent="addlist"
  class="addlist"
  >
    <input
      type="text"
      class="text-input"
      placeholder="Add new List"
      >
    <button
      type="submit"
      class="add-button"
      >
      Add
      </button>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>