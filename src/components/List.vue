<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
        <div class="deletelist" @click="removeList">X</div>
    </div>
    <!-- このcardsデータは、List.vueは持っていないので、新たにBoard.vueからpropsで受け取る必要があります。 -->
    <Card
      v-for="(item , index) in cards"
      :body="item.body"
      :key="item.id"
      :cardIndex="index"
      :listIndex="listIndex"
    />
  </div>
</template>

<script>
import Card from './Card'
export default {
  props:{
    title: {
      type:String,
      required:true
    },
    // このcardsの部分の記述を忘れていたため、cards is not defined on the instanceというエラーが発生した
    cards: {
      type:Array,
      required:true
    },
    listIndex: {
      type:Number,
      required:true
    }
  },
  methods:{
    removeList() {
      if(confirm('本当にこのリストを消しますか？')) {
        this.$store.dispatch('removeList',{listIndex:this.listIndex})
      }
    }
  },
  components: {
    Card
  }
}
</script>

<style>

</style>