<script setup lang="ts">
// new vue file
import LoginPage from './components/LoginPage.vue'
// other vue files can be swapped in for LoginPage to see what they look like, such as the one below
import TheWelcome from './components/TheWelcome.vue';


</script>

<template>
  <br><br>
  <img alt="Vue logo" class="logo" src="./assets/UNIVERSE_TITLE_TEXT.png" />
  <br>
  <LoginPage />
  

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
