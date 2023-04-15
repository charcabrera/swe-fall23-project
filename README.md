# DANIEL STUFF

This is the first working version of our website. Right now it's just the login page and some buttons for the game.\
Basically I took the default Vue project template and added my own stuff to it/made a bunch of modifications. I left some of the files and stuff in if anyone wants to play around with them and see what they do.\
Ideally, we will want a modular setup where entering the proper credentials allows someone to access the game environment, settings, account info, etc. This will all be hosted on a server somehow, but that's not my current task so I don't care lol

## QUICK START
- Clone repository
- Navigate to "daniel stuff" directory
- [If you haven't done `npm install` on your computer before, do that now. This installs Node.js]
- Run command `npm run dev` and click the localhost link. The server is now being hosted on your computer and responds to live code updates
- Type `q` in the terminal to quit (shuts down the server)

## EDITING (basic info)
- `src\App.vue` is the base vue file containing links to other vue files which provide further on-screen elements (such as LoginPage).
- `src\components` contains all of the additional vue files that can be imported into App.vue
  - The `icons` folder can probably be deleted but I'm too scared to actually do that yet in case it helps for future tasks
- `src\assets` has `base.css` (for the color scheme and primary website fonts) and `main.css` (some other stuff idk lol but it calls `import base.css`). It also has a bunch of images and stuff that i'm continuing to add/modify/delete
- `index.html` calls `main.ts` (TypeScript file) which imports `main.css` and mounts `App.vue` which I'm just gonna assume is the procedure for how the app runs in the first place
- Everything else in the `daniel stuff` folder is black magic and I have no idea what they do / what will happen if you edit them. good luck tho
