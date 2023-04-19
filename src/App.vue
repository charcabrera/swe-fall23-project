<script setup lang="ts">

// new vue file
import LoginPage from './components/LoginPage.vue'
import Game from './components/Game.vue'
import Leaderboard from './components/Leaderboard.vue'
// other vue files can be swapped in for LoginPage to see what they look like, such as the one below

import { ref, computed } from 'vue'

// attempt to route between URLs

// PropTest
import ButtonTest from './components/PropTest/ButtonTest.vue'


const routes = {
  '/': LoginPage,
  '/game': Game,
  '/leaderboard': Leaderboard
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

//const fs = require('fs');
methods: {

}

</script>

<template>
  <!-- Switch between LoginPage, SignUpPage, Game, and Leaderboard -->
  <ButtonTest />
</template>

<!-- I think everything below this comment can be deleted? idk lol let's just leave it for now -->
<style scoped>
h1 {
  text-align: center;
}
form {
  text-align: center;
}



</style>
