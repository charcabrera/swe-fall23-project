
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
            />
            <itembox>
                <button :class="{ 'canbuy': (p>0 && n>0 && e>0), 'cannotbuy': (p<=0 && n<=0 && e<=0) }" @click="
                        currencies = [p,n,e];
                        prices = [1,1,1];
                        if(canAfford( currencies, prices )) {
                            p--;
                            n--;
                            e--;
                            atom++;
                            modifier++;
                        }
                        ">Atoms: <br>{{ atom }}<br>Cost: 1 proton, 1 neutron, 1 electron
                </button>
            </itembox>
            <itembox>
                <button :class="{ 'canbuy': (atom>=3), 'cannotbuy': (atom<3) }" @click="
                        currencies = [atom];
                        prices = [3];
                        if(canAfford( currencies,prices )) {
                            atom-=prices[0];
                            molecule++;
                            modifier+=2;
                        }
                        ">Molecules: <br>{{ molecule }}<br>Cost: 3 atoms
                </button>
            </itembox>
            <itembox>
                <button :class="{ 'canbuy': (molecule>=5), 'cannotbuy': (molecule<5) }" @click="
                        price = 5;
                        if(molecule >= price) {
                            molecule-=price;
                            molecloud++;
                            modifier+=5;
                        }
                        ">Molecular clouds: <br>{{ molecloud }}<br>Cost: 5 molecules
                </button>
            </itembox>
            <itembox>
                <button :class="{ 'canbuy': (molecloud >= 10), 'cannotbuy': (molecloud < 10) }" @click="
                        if(molecloud >= 10) {
                            molecloud-=10;
                            star++;
                            modifier+=10;
                        }
                        ">Stars: <br>{{ star }}<br>Cost: 10 molecular clouds
                </button>
            </itembox>
            <itembox>
                <button :class="{ 'canbuy': (molecloud>=5 && star>0), 'cannotbuy': (molecloud>=5 && star>0)==false }" @click="
                        currencies = [molecloud, star]; // the star is not spent in this purchase; just a credit check
                        prices = [5, 1];
                        if(canAfford( currencies,prices )) {
                            molecloud-=prices[0];
                            protodisk++;
                            modifier+=15;
                        }
                        ">Protoplanetary Disks: <br>{{ protodisk }}<br>Cost: 5 molecular clouds, 1 star (star not spent)
                </button>
            </itembox>           
            
            
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
  
