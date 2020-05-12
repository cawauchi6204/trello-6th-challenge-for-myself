<template>
  <div>
    <button 
      class="cloase-button"
      @click="removeCardFromList"
      >X</button>
      <div class="body">{{ body }}</div>
  </div>
</template>

<script>
// このpropsはどこから持ってきているのかわからない
// required=>もしこの値が渡されなかった場合、Missing required prop: "hoge"というエラーが出るようになる
export default {
  props:{
    body: {
      type:String,
      required:true
    },
    listIndex: {
      type:Number,
      required:true
    },
    cardIndex: {
      type:Number,
      required:true
    }
  },
  methods: {
    removeCardFromList() {
      if(confirm('本当にこのカードを削除しますか？')) {
        this.$store.dispatch('removeCardFromList' , {cardIndex:this.cardIndex,listIndex:this.listIndex})
      }
    }
  }
}
</script>

<style>

</style>