# Stardust
I like the name Stardust, let me know how y'all feel about it. Here's a little V0.1 of the game with just the core features that we talked about. 
Also don't talk about my shitty html. I'm not the UI dude.

## Getting Started
Literally just download the folder and open the html file in your browser.

## Production
Click the 'Grab some Stardust' button to start getting RNG'd.

## Upgrades
* Each of the particle upgrades increases the max amount of particles per click (PPC) by 1
* The grab power upgrade is essentially a multiplier that doubles your PPC
* The gravity upgrades utilize a timer and are the passive generators
  * Weak gravity is 1 particle per second (PPS)
  * Strong gravity is 7 PPS

## Notes
Vue was making me feel like an idiot so I just made it in pure JS and HTML, I just figured we needed something down in JS that sort of resembles a game.

* I think I made the code pretty legible, but let me know if there are any questions as always
* Additional upgrades will be pretty easy to add in the future
* Right now the Interval is set to tick every 1000ms (1 second), but I think we can change the tick rate and make the PPS proportional to the tick rate so we get the same overall PPS but see updates at shorter intervals
* Upgrade effectiveness and price scaling here were just kinda random values I came up with, so we can look into the best way to go about that sometime soon
* Names of literally everything subject to change as well
* Adding more particles also will not be that hard
