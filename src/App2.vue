<template>
    <div id="gameworld">
      <button id="BIG" @click="
                      addRandomCurrButton()
                      ">BUTTON OF FORTUNE
      </button> 
      <br>
      <notbutton>
        Protons: {{ p }}
      </notbutton>
      <notbutton>
        Neutrons: {{ n }}
      </notbutton>
      <notbutton>
        Electrons: {{ e }}
      </notbutton>
      <br>
      <button @click="
                      // ideal button:
                      // - contains image
                      // - calls function to compare current values with target
                      args=[p, n, e];
                      if(p > 0 && n > 0 && e > 0) {
                        p--; 
                        n--; 
                        e--; 
                        atom++;
                        // modify tick rate (advanced)
                        // rate = rate * 0.9;

                        // modify modifier
                        modifier++;
                      }
                      ">Atoms: {{ atom }}</button>
      <br>
      <button @click="
                      if(atom >= 2) {
                        atom-=2;
                        molecule++;
                        // modify modifier
                        modifier+=2;
                      }
                      ">Molecules: {{ molecule }}
      </button>
      <NewCTR />
      <CounterVue />
    </div>
    <div>
        Time: {{ count }} <br>
        Rate: {{ rate }}
    </div>
  </template>
  
<script lang="ts">
import NewCTR from './NewCTR.vue'
import Counter from './components/Counter.vue'

export default {
    data() {
      return {
        // basic currencies
        p: 0,
        n: 0,
        e: 0,
        // objects
        atom: 0,
        molecule: 0,
        molecloud: 0,
        protodisk: 0,
        planet: 0,
        solarsystem: 0,
        star: 0,
        blackhole: 0,
        // idk lol
        count: 0,
        // extra
        args: [],
        picker: 0,
        rate: 1000,
        modifier: 0,
        player_modifier: 1,
        intervalId: null
      }
    },
    // METHODS
    methods: {
        // WHEN BUTTON IS PRESSED
        addRandomCurrButton() {
        // Returns a random integer from 0 to 2:
        this.picker = Math.floor(Math.random() * 3);
        // Increase by how much?
        if(this.picker == 0) { this.p += this.player_modifier; }
        if(this.picker == 1) { this.n += this.player_modifier; }
        if(this.picker == 2) { this.e += this.player_modifier; }        
        },
        addRandomCurr() {
        // Returns a random integer from 0 to 2:
        this.picker = Math.floor(Math.random() * 3);
        // Increase by how much?
        if(this.picker == 0) { this.p += this.modifier; }
        if(this.picker == 1) { this.n += this.modifier; }
        if(this.picker == 2) { this.e += this.modifier; }
        },
        // FIXME
        // input: array containing data values, array containing target values
        // output: boolean if data values are all greater than target values
        canAfford() {
            let y = 3; // array
            for (let i = 0; i < y; i++) {
                // if data is less than target
                return false;
            }
            return true;
        },
        increaseSpeed() {
            clearInterval(this.intervalId)
            this.rate *= 0.9
            this.intervalId = setInterval(() => {
                this.count++
            }, this.rate)
        },
        // reset all data values to 0
        bigBounce() {
            // reset basic currencies
            this.p = 0;
            this.n = 0;
            this.e = 0;
            // reset all objects
            this.atom = 0;
        }
    },
    // created == starts running as soon as component is created
    created() {
        this.intervalId = setInterval(() => { 
            this.count++;
            this.addRandomCurr()
         }, 1000)
    },
  
  }
</script>

<style scoped>
#BIG {
  text-align: center;
  width: 15vh;
  height: 15vh;   
}

button {
  text-align: center;
  width: 10vh;
  height: 5vh;
}

notbutton {
    text-align: center;
  width: 10vh;
  height: 5vh;   
}
</style>
  
