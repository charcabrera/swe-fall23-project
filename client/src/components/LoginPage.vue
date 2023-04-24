<!-- This is a new file for our actual project lmao -->
<script>
import Auth from '@/services/Auth'

export default {
  data() {
    return {
      user: '',
      pass: ''
}
},
methods: {
async login() {
await Auth.login({
user: this.user,
pass: this.pass
})
}
}
}
</script>

<template>
  <ctr>
    <img alt="Vue logo" class="logo" src="../assets/UNIVERSE_TITLE_TEXT.png"/>
  <h1>
    <img alt="Log in" class="log in" src="../assets/LOG_IN_TEXT.png" />
  </h1>

  <form v-on:submit.prevent="login">
    <label for="usrname"></label>
    <input type="text" id="usrname" name="usrname" v-model="user" pattern="[a-z0-9A-Z]+" title="only use alphanumeric characters" placeholder="Username" required>
    <br>
    <label for="psw"></label>
    <input type="password" id="pass" name="pass" v-model="pass" placeholder="Password" required>
    <br>
    <input type="submit" value="Log In">
   </form>


  <h2>
    First time playing? Sign up <router-link to='signup'>here!</router-link>
  </h2>
  <br>
  <router-link to='/'>
    <back>
      ◄ Return to game
    </back>
  </router-link>
  <br><br><br><br><br><br><br>
  <footer>
    Licensed under GNU
  </footer>
  </ctr>
  

</template>

<!-- This is additional style information that wasn't put in the actual css files. It only applies to this vue file (scoped) -->
<style scoped>
h1 {
  font-family:Arial, Helvetica, sans-serif;
  font-size: 50px;
  color: #ffffff;
  text-align: center;
}
h2 {
  font-size: 20px;
  color: #ffffff;
  text-align: center;   
  background-color: #000000;
  padding: 2px;
  border-radius: 10px;
  width: 500px;
  margin: auto;
}
back {
  background-color: #000000;
  padding: 5px;
  border-radius: 5px;
}
ctr {
  justify-content: center;
  text-align: center;
  width: 350vh;
  height: 100vh;
}
footer {
  font-size: 12px;
  color: #000000;
  text-align: right;
  font-size: large;
}

form {
  text-align: center;
}
form2 {
  text-align: center;
  font-weight: bold;
}
label {
  text-align: right;
}

/* Style the container for inputs */
.container {
  background-color: #f1f1f1;
  padding: 20px;

}

input {
    font-size: 20px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    width: 75%; 
    padding: 12px 12px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #ffffff;
}
input:focus {
    background-color: lightblue;
}

template {
  justify-content: center;
  text-align: center;
  width: 1000vh;
  height: 100vh;
}
</style>
