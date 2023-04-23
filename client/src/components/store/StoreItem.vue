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
        <h1>{{ count }}</h1>
        <button :disabled="isDisabled" @click="incrementCount" class="button-with-image">
            {{ isDisabled ? `${secondsLeft} seconds` : 'Purchase' }}
        </button>
    </div>
</template>
  
<script lang="ts">
// const props = defineProps({}) // why does the page go blank?
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
      incrementCount() {
        if (!this.isDisabled) {
          this.count++;
          this.isDisabled = true;
          this.secondsLeft = 3;
          this.intervalId = setInterval(() => {
            this.secondsLeft--;
            if (this.secondsLeft <= 0) {
              this.isDisabled = false;
              clearInterval(this.intervalId);
            }
          }, 1000);
        }
      },
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
  