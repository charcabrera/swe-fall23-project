<!-- This is a new file for our actual project lmao -->
<script setup lang="ts">
import CounterBox from '../components/CounterBox.vue'
import StoreBox from './store/StoreBox.vue'
import MiddleBox from './MiddleBox.vue'
import MenuBox from './MenuBox.vue'

// attempt to connect with JSON
import PlayerData from "../PlayerData.json"
import { ref, computed } from 'vue'
const data = ref(PlayerData)

</script>

<template>
  <div class="container">
    <!-- COUNTERS -->
    <div class="boxred red">
        
    </div>
    <!-- NEGATIVE SPACE -->
    <div class="boxblue blue">
        
    </div>
    <!-- SETTINGS -->
    <div class="boxgreen green">
        
    </div>
    <!-- STORE -->
    <div class="box2 purple">
        
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