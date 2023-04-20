<template>
    <div class="counter-box">
        <image>
            <slot name="sprite"></slot>
        </image>
        <br>
        <name class="name">
            <slot name="n"></slot>
        </name>
        <h1>
          <slot name="counter"></slot>
        </h1>
        
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
  color: white;
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
  background-image: url('daniel stuff\src\assets\sprites\atom.png');
}

.button-with-image {
  background-image: url('daniel stuff\src\assets\sprites\atom.png');
  background-size: cover;
  color: white;
  font-size: 18px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
} 

.counter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
</style>
  