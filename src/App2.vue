
<template>
    <div class="container">
        <!-- COUNTERS -->
        <div class="boxred red">
            <CounterBox :protoncount="p" :neutroncount="n" :electroncount="e"/>
        </div>
        <!-- NEGATIVE SPACE -->
        <div class="boxblue blue" margin="auto">
        <button id="BIG" @click="
                        addRandomCurrButton()
                        ">
        </button>
        <br>
        </div>
        <!-- SETTINGS -->
        <div class="boxgreen green">
            <div>
            <MenuBox />
            </div>
        </div>
        <!-- STORE -->
        <div class="box2 purple">
            <StoreBox 
                :protoncount="p" 
                :neutroncount="n" 
                :electroncount="e"
                :atom_count="atom"
                :molecule_count="molecule"
                :molecloud_count="molecloud"
                :star_count="star"
                :protodisk_count="protodisk"
                :planet_count="planet"
                :solarsystem_count="solarsystem"
                :blackhole_count="blackhole"
                :galaxy_count="galaxy"
                @buy-atom="buyAtom"
                @buy-molecule="buyMolecule"
                @buy-molecloud="buyMoleCloud"
                @buy-star="buyStar"
                @buy-protodisk="buyProtodisk"
                @buy-planet="buyPlanet"
                @buy-solarsystem="buySolarsystem"
                @buy-blackhole="buyBlackhole"
                @buy-galaxy="buyGalaxy"
            />
        </div>
    </div>

    
  </template>
  
<script lang="ts">
import NewCTR from './NewCTR.vue'
import CounterBox from './components/CounterBox.vue';
import MenuBox from './components/MenuBox.vue';
import StoreBox from './components/store/StoreBox.vue';

const myInput = document.querySelector('#myInput');
const myDiv2 = document.querySelector('#myDiv') as HTMLDivElement;
/*
myInput.addEventListener('input', () => {
  // Check conditions here
  // ...

  // Change background image
  myDiv2.style.backgroundImage = 'url(assets/sprites/universestates/phase1.png)';
});
*/
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
        galaxy: 0,
        // idk lol
        count: 0,
        price: 0,
        i: 0,
        phase: 1,
        // extra
        currencies: [],
        prices: [],
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
        canAfford(currency: number[], price: number[]) {
            for (let i = 0; i < price.length; i++) {
                if(currency[i] < price[i]) {
                    return false;
                }
            }
            return true;
        },
        purchase_mod(currency: number[], price: number[], product: number, mod: number) {
            for (let i = 0; i < price.length; i++) {
                currency[i] -= price[i];
            }
            product = product + 1;
            this.modifier += mod;
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
        },
        buyAtom() {
          this.p--;
          this.e -= 2;
          this.atom++;
        },
        buyMolecule() {
          this.atom -= 2;
          this.molecule++;
        },
        buyMoleCloud() {
          this.molecule -= 5;
          this.molecloud++;
        },
        buyStar() {
          this.molecloud -= 10;
          this.star++;
        },
        buyProtodisk() {
          this.molecloud -= 5;
          this.protodisk++;
        },
        buyPlanet() {
          this.molecloud -= 5;
          this.protodisk--;
          this.planet++;
        },
        buySolarsystem() {
          this.star--;
          this.planet -= 8;
          this.solarsystem++;
        },
        buyBlackhole() {
          this.solarsystem -= 5;
          this.blackhole++;
        },
        buyGalaxy() {
          this.solarsystem -= 10;
          this.blackhole--;
          this.galaxy++;
        }
    },
	// components: imports components
	components: {
    NewCTR,
    CounterBox,
    StoreBox,
    MenuBox
},
    // created == starts running as soon as component is created
    created() {
        this.intervalId = setInterval(() => { 
            this.count++;
            this.modifier = this.atom + this.molecule * 2 + this.molecloud * 3 + this.protodisk * 4 + this.planet * 5 + this.solarsystem * 6 + this.blackhole * 7 + this.galaxy * 8
            this.addRandomCurr()
         }, 1000)
    },
  
  }
</script>

<style scoped>
#BIG {
    color: black;
  text-align: center;
  width: 30vh;
  height: 30vh;   
  margin: auto;
  background-image: url(assets/sprites/universestates/phase4.png);
  background-size: contain;
}

button {
  text-align: center;
  width: 20vh;
  height: 10vh;
  color: antiquewhite;
  background-color: rgb(73, 73, 73);
  border-radius: 10px;
}

itembox {
    background-color: black;
    padding: 40px;
    border-radius: 10px;
    width: 100px;
    color: antiquewhite;
}

currency {
    color: antiquewhite;
    padding: 20px;
    text-align: center;
    border: 5px solid yellow;
    background-color: black;
    border-radius: 10px;
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
  text-align: center;
}

.blue {
  background-color: blue;
}

.green {
  background-color: green;
}

.purple {
  background-color: purple;
  justify-content: center;
}

.canbuy {
  background-color: green;
}
.cannotbuy {
    background-color: rgb(73, 73, 73);
}

</style>
  
