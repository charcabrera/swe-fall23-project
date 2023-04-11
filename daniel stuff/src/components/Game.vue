<!-- This is a new file for our actual project lmao -->
<script setup lang="ts">
import CounterBox from '../components/CounterBox.vue'
import StoreBox from './store/StoreBox.vue'
import MiddleBox from './MiddleBox.vue'
import MenuBox from './MenuBox.vue'
</script>

<template>
  <div class="container">
    <!-- COUNTERS -->
    <div class="boxred red">
        <CounterBox />
    </div>
    <!-- NEGATIVE SPACE -->
    <div class="boxblue blue">
        <MiddleBox />
    </div>
    <!-- SETTINGS -->
    <div class="boxgreen green">
        <MenuBox />
    </div>
    <!-- STORE -->
    <div class="box2 purple">
        <StoreBox />
    </div>
  </div>
</template>

<!-- This is additional style information that wasn't put in the actual css files. It only applies to this vue file (scoped) -->
<style scoped>

/* container for ALL game elements, including frame */
.container {
  display: flex;
  flex-wrap: wrap;
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
  background-color: blue;
}

.green {
  background-color: green;
}

.purple {
  background-color: purple;
}

</style>