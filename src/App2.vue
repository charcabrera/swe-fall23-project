<template>
    <div>
      <button @click="
                      addRandomCurr()
                      ">BUTTON OF FORTUNE</button> <br>
      <button @click="
                      p++
                      ">Protons: {{ p }}</button>
      <button @click="
                      n++
                      ">Neutrons: {{ n }}</button>
      <button @click="
                      e++
                      ">Electrons: {{ e }}</button>
      <br>
      <button @click="
                      if(p > 0 && n > 0 && e > 0) {
                        p--; 
                        n--; 
                        e--; 
                        atom++;
                        rate+=1000;
                      }
                      ">Atoms: {{ atom }}</button>
    </div>
    <div>
        Time: {{ count }} <br>
        Rate: {{ rate }}
    </div>
  </template>
  
<script lang="ts">

export default {
    data() {
      return {
        p: 0,
        n: 0,
        e: 0,
        
        atom: 0,
        count: 0,
        // extra
        picker: 0,
        rate: 1000,
      }
    },
    // METHODS
    methods: {
        addRandomCurr() {
        // Returns a random integer from 0 to 2:
        this.picker = Math.floor(Math.random() * 3);
        if(this.picker == 0) { this.p++; }
        if(this.picker == 1) { this.n++; }
        if(this.picker == 2) { this.e++; }
        },
    },
    // created == starts running as soon as component is created
    created() {
        setInterval(() => { this.count++ }, 1000)
    },
    // new methods

    protonIncreaseRate() {
    
    }   
  }
  </script>
  