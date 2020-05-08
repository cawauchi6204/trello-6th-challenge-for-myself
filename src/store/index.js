import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var savedLists = localStorage.getItem('my-trello-challenge')



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
      state.lists.push({title:payload.title},{cards:payload.cards})
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

export default store
