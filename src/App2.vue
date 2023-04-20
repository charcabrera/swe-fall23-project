
<template>
    <div class="container">
    <!-- COUNTERS -->
    <div class="boxred red">
      <notbutton>
        Protons: {{ p }}
      </notbutton>
      <notbutton>
        Neutrons: {{ n }}
      </notbutton>
      <notbutton>
        Electrons: {{ e }}
      </notbutton>
    </div>
    <!-- NEGATIVE SPACE -->
    <div class="boxblue blue" margin="auto">
        <button id="BIG" @click="
                      addRandomCurrButton()
                      ">BUTTON OF FORTUNE
      </button>
      <br>
    </div>
    <!-- SETTINGS -->
    <div class="boxgreen green">
        
    </div>
    <!-- STORE -->
    <div class="box2 purple">
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
                      ">Atoms: {{ atom }}
        </button>
        <button @click="
                      if(atom >= 2) {
                        atom-=2;
                        molecule++;
                        // modify modifier
                        modifier+=2;
                      }
                      ">Molecules: {{ molecule }}
        </button>
        <button @click="
                      if(atom >= 2) {
                        atom-=2;
                        molecule++;
                        // modify modifier
                        modifier+=2;
                      }
                      ">Molecules: {{ molecule }}
        </button>
        
    </div>
  </div>
    <div>
       <br>
      
      <br>
      
      <br>

    </div>
    <div>
        Time: {{ count }} <br>
        Rate: {{ rate }}
    </div>
    <NewCTR />
  </template>
  
<script lang="ts">
import NewCTR from './NewCTR.vue'

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
	// components: imports components
	components: {
		NewCTR
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
  margin: auto;
  background-image: url(circle.png);
  background-size: contain;
}

button {
  text-align: center;
  width: 10vh;
  height: 5vh;
}

notbutton {
  color: aliceblue;
  text-align: center;
  width: 10vh;
  height: 5vh;   
}

/* styles from Game.vue */

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
  margin: auto;
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
  
