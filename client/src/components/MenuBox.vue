<!-- This is a new file for our actual project lmao -->
<script setup lang="ts">

</script>

<template>
    <div class="container">
      <router-link to='/login'>
        <button id="loginbutton">"LOGIN/SIGNUP"</button>
      </router-link>
      <!-- 
        
                <br>
        <button>Achievements</button>
        <br>
        <button>Leaderboard</button>
        <br>
        <button>Settings</button>

       -->

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

#loginbutton {
  background-size: contain;
  background-image: url(../assets/sprites/p3.png);
  color: white;
  height: 100px;
}
</style>
