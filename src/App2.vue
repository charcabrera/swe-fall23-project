
<template>
    <div class="container">
        <!-- COUNTERS -->
        <div class="boxred red">
            <CounterBox :protoncount="game.p" :neutroncount="game.n" :electroncount="game.e"/>
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
                @buy-atom="buyAtom"
                @buy-molecule="buyMolecule"
                @buy-molecloud="buyMoleCloud"
                @buy-star="buyStar"
                @buy-protodisk="buyProtodisk"
                @buy-planet="buyPlanet"
                @buy-solarsystem="buySolarsystem"
                @buy-blackhole="buyBlackhole"
                @buy-galaxy="buyGalaxy"
                :protoncount="game.p"
                :neutroncount="game.n"
                :electroncount="game.e"
                :atom_count="game.atom"
                :molecule_count="game.molecule"
                :molecloud_count="game.molecloud"
                :star_count="game.star"
                :protodisk_count="game.protodisk"
                :planet_count="game.planet"
                :solarsystem_count="game.solarsystem"
                :blackhole_count="game.blackhole"
                :galaxy_count="game.galaxy"
            />
        </div>
    </div>

    
  </template>
  
<script lang="ts">
import NewCTR from './NewCTR.vue'
import CounterBox from './components/CounterBox.vue';
import MenuBox from './components/MenuBox.vue';
import StoreBox from './components/store/StoreBox.vue';
import { saveStorage, loadStorage } from './services/Save';

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
          game: {
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
        price: 0,
        i: 0,
        phase: 1,
        // extra
        currencies: [],
        prices: [],
        picker: 0,
        modifier: 0,
        player_modifier: 1,
              },
        rate: 1000,
        intervalId: null,
        saveInterval: null,
        count: 0
      }
    },
    // METHODS
    methods: {
        // WHEN BUTTON IS PRESSED
        addRandomCurrButton() {
        // Returns a random integer from 0 to 2:
        this.game.picker = Math.floor(Math.random() * 3);
        // Increase by how much?
        if(this.game.picker == 0) { this.game.p += this.game.player_modifier; }
        if(this.game.picker == 1) { this.game.n += this.game.player_modifier; }
        if(this.game.picker == 2) { this.game.e += this.game.player_modifier; }
        },
        addRandomCurr() {
        // Returns a random integer from 0 to 2:
        this.game.picker = Math.floor(Math.random() * 3);
        // Increase by how much?
        if(this.game.picker == 0) { this.game.p += this.game.modifier; }
        if(this.game.picker == 1) { this.game.n += this.game.modifier; }
        if(this.game.picker == 2) { this.game.e += this.game.modifier; }
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
            this.game.modifier += mod;
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
            this.game.p = 0;
            this.game.n = 0;
            this.game.e = 0;
            // reset all objects
            this.game.atom = 0;
        },
        buyAtom() {
          this.game.p--;
          this.game.e -= 2;
          this.game.atom++;
        },
        buyMolecule() {
          this.game.atom -= 2;
          this.game.molecule++;
        },
        buyMoleCloud() {
          this.game.molecule -= 5;
          this.game.molecloud++;
        },
        buyStar() {
          this.game.molecloud -= 10;
          this.game.star++;
        },
        buyProtodisk() {
          this.game.molecloud -= 5;
          this.game.protodisk++;
        },
        buyPlanet() {
          this.game.molecloud -= 5;
          this.game.protodisk--;
          this.game.planet++;
        },
        buySolarsystem() {
          this.game.star--;
          this.game.planet -= 8;
          this.game.solarsystem++;
        },
        buyBlackhole() {
          this.game.solarsystem -= 5;
          this.game.blackhole++;
        },
        buyGalaxy() {
          this.game.solarsystem -= 10;
          this.game.blackhole--;
          this.game.galaxy++;
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
        let storage = loadStorage('game')
        if(storage) {
            this.game = JSON.parse(storage)
        }
        this.saveInterval = setInterval(() => {
            saveStorage('game', this.game)
        }, 5000 )
            saveStorage('game', this.game)
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
  
