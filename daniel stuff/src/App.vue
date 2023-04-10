<script setup lang="ts">

// new vue file
import LoginPage from './components/LoginPage.vue'

import Game from './components/Game.vue'
import NotFound from './components/NotFound.vue'
import Counter from './components/Counter.vue';
// other vue files can be swapped in for LoginPage to see what they look like, such as the one below
import TheWelcome from './components/TheWelcome.vue';

import { ref, computed } from 'vue'
//import Home from './Home.vue'
//import About from './About.vue'
//import NotFound from './NotFound.vue'

const routes = {
  '/': LoginPage,
  '/game': Game
}

const currentPath = ref(window.location.hash)

const imgSize = "50";

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})



</script>

<template>
  <!-- Switch between LoginPage, SignUpPage, and Game -->
  <Game />
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
