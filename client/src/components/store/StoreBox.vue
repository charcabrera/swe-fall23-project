<!-- This is a new file for our actual project lmao -->
<script setup lang="ts">
import StoreItem from './StoreItem.vue'

// PROPS
const props = defineProps({
  // the store keeps track of currencies...
  protoncount: Number,
  neutroncount: Number,
  electroncount: Number,
  // as well as celestial objects
  atom_count: Number,
  molecule_count: Number,
  molecloud_count: Number,
  star_count: Number,
  protodisk_count: Number,
  planet_count: Number,
  solarsystem_count: Number,
  blackhole_count: Number,
  galaxy_count: Number,
  // these are extras to spice up the game. add them in some other time
  // BONUS_neutronstar_count: Number
  // BONUS_quasistar_count: Number
  // BONUS_life_planet_count: Number
})
</script>

<template>
    <div class="container">
    <StoreItem :protoncount="protoncount" :neutroncount="neutroncount" :electroncount="electroncount">
        <template #sprite>
            <img src="../../assets/sprites/atom.png" alt="Atom" width=50 height=50 class="sprite">
        </template>
        <template #n>
            Atom
        </template>
        <template #cost>
            1 Proton, 2 Electrons
        </template>
    </StoreItem>
    <StoreItem>
        <template #sprite>
            <img src="../../assets/sprites/molecule.png" alt="Molecule" width=50 height=50 class="sprite">
        </template>
        <template #n>
            Molecule
        </template>
        <template #cost>
            2 Atoms
        </template>
    </StoreItem>
    <StoreItem>
        <template #sprite>
            <img src="../../assets/sprites/molecloud.png" alt="Molecular Cloud" width=50 height=50 class="sprite">
        </template>
        <template #n>
            Molecular Cloud
        </template>
        <template #cost>
            5 Molecules
        </template>
    </StoreItem>
    <StoreItem>
        <template #sprite>
            <img src="../../assets/sprites/star.png" alt="Star" width=50 height=50 class="sprite">
        </template>
        <template #n>
            Star
        </template>
        <template #cost>
            10 Molecular Clouds
        </template>
    </StoreItem>
    <StoreItem>
        <template #sprite>
            <img src="../../assets/sprites/protodisk.png" alt="Protoplanetary Disk" width=50 height=50 class="sprite">
        </template>
        <template #n>
            Protoplanetary Disk
        </template>
        <template #cost>
            5 Molecular Clouds
        </template>
    </StoreItem>
    <StoreItem>
        <template #sprite>
            <img src="../../assets/sprites/planet.png" alt="Planet" width=50 height=50 class="sprite">
        </template>
        <template #n>
            Planet
        </template>
        <template #cost>
            1 PPD, 5 Molecular Clouds
        </template>
    </StoreItem>
    <StoreItem>
        <template #sprite>
            <img src="../../assets/sprites/solarsystem.png" alt="Solar System" width=50 height=50 class="sprite">
        </template>
        <template #n>
            Solar System
        </template>
        <template #cost>
            1 Star, 8 Planets
        </template>
    </StoreItem>
    <StoreItem>
        <template #sprite>
            <img src="../../assets/sprites/blackhole.png" alt="Black Hole" width=50 height=50 class="sprite">
        </template>
        <template #n>
            Black Hole
        </template>
        <template #cost>
            5 Solar Systems
        </template>
    </StoreItem>
    <StoreItem>
        <template #sprite>
            <img src="../../assets/sprites/galaxy.png" alt="Galaxy" width=50 height=50 class="sprite">
        </template>
        <template #n>
            Galaxy
        </template>
        <template #cost>
            10 Solar Systems, 1 Black Hole
        </template>
    </StoreItem>

    </div>
</template>

<style scoped>
.sprite {
    justify-content: center;
    display: block;
  margin-left: auto;
  margin-right: auto;
  }

  .container {
  display: flex;
  flex-wrap: wrap;
  width: 150vh;
  height: 100vh;
}
</style>