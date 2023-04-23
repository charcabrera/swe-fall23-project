<!-- This is a new file for our actual project lmao -->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <!-- COUNTERS -->
    <h1>LEADERBOARD</h1>
    <br>
    <div class="top3">
        1. daniel
    </div>
    <br>
    <div class="top3">
        2. daniel
    </div>
    <br>
    <div class="top3">
        3. daniel
    </div>
  </div>
</template>

<!-- This is additional style information that wasn't put in the actual css files. It only applies to this vue file (scoped) -->
<style scoped>

/* container for ALL game elements, including frame */
.container {
  /* display: flex;
  flex-wrap: wrap; */
  width: 193vh;
  height: 100vh;
}

.boxred {
  width: 30%;
  /* Determines height of box */
  height: 60%;
}

.boxblue {
  width: 50%;
  /* Determines height of box */
  height: 60%;
}

.boxgreen {
  width: 20%;
  /* Determines height of box */
  height: 60%;
}

.box2 {
  width: 100%;
  /* Determines height of box */
  height: 40%;
}

.red {
  background-color: red;
  overflow-y:auto;

  /* background-image: url("../assets/cars 2.jpg");
  background-size:contain; */
}

.blue {
  background-color: yellow;
}

.green {
    background-color: yellow;
}

.purple {
    background-color: yellow;
}

</style>