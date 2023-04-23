<script setup lang="ts">

const props = defineProps({
  item: String,
  display: Number,
  protoncount: Number,
  neutroncount: Number,
  electroncount: Number,
  atom_count: Number,
  molecule_count: Number,
  molecloud_count: Number,
  star_count: Number,
  protodisk_count: Number,
  planet_count: Number,
  solarsystem_count: Number,
  blackhole_count: Number,
  galaxy_count: Number,
});

</script>

<template>
    <div class="counter-box">
        <image>
            <slot name="sprite"></slot>
        </image>
        <br>
        <name class="name">
            <slot name="n"></slot>
        </name>
        <cost class="cost">
            <slot name="cost"></slot>
        </cost>
        <h1>{{ display }}</h1>
        <button @click="purchase" class="button-with-image">
            Purchase
        </button>
    </div>
</template>

<script lang="ts">


export default {
    data() {
      return {
        count: 0,
        isDisabled: false,
        secondsLeft: 0,
        intervalId: null,
        itemName: "Placeholder",
      };
    },
    methods: {
      purchase(){
        if(this.item === "atom"){
          if(this.protoncount >= 1 && this.electroncount >=2){
            this.$emit('buy-atom');
          }
        }
        if(this.item === "molecule"){
          if(this.atom_count >= 2){
            this.$emit('buy-molecule');
          }
        }
        if(this.item === "molecloud"){
          if(this.molecule_count >= 5){
            this.$emit('buy-molecloud');
          }
        }
        if(this.item === "star"){
          if(this.molecloud_count >= 10){
            this.$emit('buy-star');
          }
        }
        if(this.item === "protodisk"){
          if(this.molecloud_count >= 5){
            this.$emit('buy-protodisk');
          }
        }
        if(this.item === "planet"){
          if(this.molecloud_count >= 5 && this.protodisk_count >= 1){
            this.$emit('buy-planet');
          }
        }
        if(this.item === "solarsystem"){
          if(this.star_count >= 1 && this.planet_count >= 8){
            this.$emit('buy-solarsystem');
          }
        }
        if(this.item === "blackhole"){
          if(this.solarsystem_count >= 5){
            this.$emit('buy-blackhole');
          }
        }
        if(this.item === "galaxy"){
          if(this.solarsystem_count >= 10 && this.blackhole_count >= 1){
            this.$emit('buy-galaxy');
          }
        }
      }
    },
  };

</script>


<style scoped>

h1 {
    text-align: center;
}

name {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: large;
    color: white;
}

cost {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: small;
}

img {
    justify-content: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

button {
    background-color: var(--button);
    font-family:'Courier New', Courier, monospace;
    justify-content: center;
    text-align: center;
}

.button-with-image {
    background-image: url('daniel stuff\src\assets\sprites\atom.png');
    background-size: cover;
    color: white;
    font-size: 18px;
    padding: 5px 70px;
    border: none;
    border-radius: 5px;
    justify-content: center;
}

.counter-box {
  display:table;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: var(--box-color);
  border-radius: 5px;
  height: 50px;
  transform: scale(0.9);
}

.canbuy {
  background-color: green;
}
.cannotbuy {
    background-color: rgb(73, 73, 73);
}

</style>
