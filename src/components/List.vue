<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
        <div class="deletelist" @click="removeList">X</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      required:true
    },
    listIndex:{
      type:Number,
      required:true
    }
  },
  removeList() {
    if(confirm('本当にこのリストを消しますか？')) {
      this.$store.dispatch('removeList',{listIndex:this.listIndex})
    }
  }
}
</script>

<style>

</style>