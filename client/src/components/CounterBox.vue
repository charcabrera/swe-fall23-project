<!-- This is a new file for our actual project lmao -->
<script setup lang="ts">
import Counter from '../components/Counter.vue'

// PROPS
const props = defineProps({
  protoncount: Number,
  neutroncount: Number,
  electroncount: Number
})

</script>

<template>
  <div class="container2">
    <Counter :cnt="protoncount">
        <template #sprite>
            <img src="../assets/sprites/currency/proton.png" alt="Proton" class="sprite" id="currency" width="75px" height="75px">
        </template>
        <template #counter>
            {{ protoncount }}
        </template>
        <template #n>
            Protons
        </template>
    </Counter>
    <Counter :cnt="neutroncount">
        <template #sprite>
            <img src="../assets/sprites/currency/neutron.png" alt="Neutron" class="sprite" id="currency">
        </template>
        <template #counter>
            {{ neutroncount }}
        </template>
        <template #n>
            Neutrons
        </template>
    </Counter>
    <Counter :cnt="electroncount">
        <template #sprite>
            <img src="../assets/sprites/currency/electron.png" alt="Electron" class="sprite" id="currency">
        </template>
        <template #counter>
            {{ electroncount }}
        </template>
        <template #n>
            Electrons
        </template>
    </Counter>
  </div>
</template>

<!-- This is additional style information that wasn't put in the actual css files. It only applies to this vue file (scoped) -->
<style scoped>
.container2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transform: scale(1.0);
}

.sprite {
    justify-content: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

:root {
  --image-size: 100px;
}

#currency {
  width: var(--image-size);
  height: var(--image-size);
}

img {
    transform: scale(1.1);
}
</style>