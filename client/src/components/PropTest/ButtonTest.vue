<template>
    <div>
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
                      p--; n--; e--; atom++
                      ">Atoms: {{ atom }}</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        p: 0,
        n: 0,
        e: 0,
        
        atom: 0
      }
    }
  }
  </script>
  