<template>
  <div>
    <h1>my-trello-6th-challenge-myself</h1>
    <p>total task:0</p>
    <div class="list-index">
      <List
        v-for="(item , index) in lists"
        :key="item.id"
        :title="item.title"
        :listIndex="index"
        :cards="item.cards"
      />
      <ListAdd/>
    </div>
  </div>
</template>

<script>
import ListAdd from '../components/ListAdd'
import List from '../components/List'
import { mapState } from 'vuex'
export default {
  components:{
    ListAdd,
    List
  },
  // computedにストアのstateからのデータと、ローカルでの算出データを両方定義する場合には、このように書く必要があると知っておいてください。
  // これで、stateのlistsの状態が変わるたびにコンポーネントでcomputedがlistsを返す仕組みが完成しました。
  computed:{
    ...mapState(['lists'])
  }
}
</script>

<style>

</style>