import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ローカルストレージの設定でカンニング
var savedLists = localStorage.getItem('my-trello-lists')

const store = new Vuex.Store({
  state: {
    lists:savedLists ? JSON.parse(savedLists) :[
      {
        title:'Backlog',
        cards:[
          { body:'English'},
          { body:'Mathmatics'}
        ]
      },
      {
        title:'Game',
        cards:[
          { body:'English'},
        ]
      },
      {
        title:'hogehoge',
        cards:[]
      },
    ]
  },
  mutations: {
    addList(state,payload) {
      state.lists.push({title:payload.title,cards:[]})
    }
  },
  actions: {
    addList(context,payload) {
      context.commit('addList' , payload)
    }
  },
  modules: {
  }
})

store.subscribe((mutation,state) => {
  localStorage.setItem('my-trello-challenge' , JSON.stringify(state.lists))
})
// このsubscribeの部分の理解が浅いため丸写しにしてしまった
// subscribeはストアのインスタンスメソッドで、全てのmutationの後に呼ばれます。
// 第一引数にmutationインスタンス、第二引数にmutation後のデータの状態を受け取ります。

export default store
