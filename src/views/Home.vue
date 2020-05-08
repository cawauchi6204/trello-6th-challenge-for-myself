<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Board></Board>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '../components/Board'

export default {
  name: 'Home',
  components: {
    Board
  }
}
</script>
