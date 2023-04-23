<!-- This is a new file for our actual project lmao -->
<script setup lang="ts">

</script>

<template>
    <div class="container">
      <router-link to='/login'>
        <button>"John Doe"</button>
      </router-link>
        <br>
        <button>Achievements</button>
        <br>
        <button>Leaderboard</button>
        <br>
        <button>Settings</button>
    </div>
</template>

<style scoped>
.container {
  display: grid;
  flex-wrap: wrap;
  width: 150vh;
  height: 100vh;
}

button {
  height: 50px;

}
</style>
