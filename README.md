# STARDUST - A Universal Clicker Game

## QUICK START
- Clone repository
- Run `npm install` in the base directory
- Run command `npm run dev` and click the localhost link. The server is now being hosted on your computer and responds to live code updates
- Type `q` in the terminal to quit (shuts down the server)

## EDITING (basic info)
- `src\App2.vue` is the base vue file for the entire game thus far
- `src\components` contains all of the additional vue files that can be imported into App.vue
- `src\assets` has `base.css` and `main.css` for overall stylization. It also has a bunch of images and stuff that i'm continuing to add/modify/delete
- `index.html` calls `main.ts` (TypeScript file) which imports `main.css` and mounts `App2.vue` onto the server
