<!-- This is a new file for our actual project lmao -->
<script setup lang="ts">
import Counter from '../components/Counter.vue'
</script>

<template>
  <div class="container">
    <Counter>
        <template #sprite>
            <img src="../assets/sprites/currency/proton.png" alt="Proton" width=50 height=50 class="sprite">
        </template>
        <template #n>
            Proton
        </template>
    </Counter>
    <Counter>
        <template #sprite>
            <img src="../assets/sprites/currency/neutron.png" alt="Neutron" width=50 height=50 class="sprite">
        </template>
        <template #n>
            Neutron
        </template>
    </Counter>
    <Counter>
        <template #sprite>
            <img src="../assets/sprites/currency/electron.png" alt="Electron" width=50 height=50 class="sprite">
        </template>
        <template #n>
            Electron
        </template>
    </Counter>
  </div>
</template>

<!-- This is additional style information that wasn't put in the actual css files. It only applies to this vue file (scoped) -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 150vh;
  height: 100vh;
}

.sprite {
    justify-content: center;
    display: block;
  margin-left: auto;
  margin-right: auto;
  }

</style>