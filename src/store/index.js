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
    },
    removeList(state,payload) {
      state.lists.splice(payload.listIndex,1,)
    },
    addCardToList(state,payload) {
      state.lists[payload.listIndex].cards.push({body:payload.body})
    },
    // ここの設定をstate.lists.cards.push({body:payload})としてしまった
    // [payload.listIndex]ここがよくわからない
    removeCardFromList(state,payload) {
      state.lists[payload.listIndex].cards.splice(payload.listIndex,1)
    }
  },
  actions: {
    addList(context,payload) {
      context.commit('addList' , payload)
    },
    removeList(context,payload) {
      context.commit('removeList' , payload)
    },
    addCardToList(context,payload) {
      context.commit('addCardToList' , payload)
    },
    removeCardFromList(context,payload) {
      context.commit('removeCardFromList' , payload)
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
