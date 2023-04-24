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
async register() {
await Auth.register({
user: this.user,
pass: this.pass
})
}
}
}
</script>

<template>
  <img alt="Vue logo" class="logo" src="../assets/UNIVERSE_TITLE_TEXT.png" />
  <h1>
    <img alt="Log in" class="log in" src="../assets/SIGN_UP_TEXT.png" />
  </h1>

  <form v-on:submit.prevent="register">
    <label for="usrname"></label>
    <input type="text" id="usrname" name="usrname" v-model="user" pattern="[a-z0-9A-Z]+" title="only use alphanumeric characters" placeholder="Username" required>
    <br>
    <label for="psw"></label>
    <input type="password" id="psw" name="psw" v-model="pass"  placeholder="Password" required>
    <br>
    <input type="submit" value="Sign Up">
   </form>


  <h2>
    Already have an account? Log in <router-link to='/login'>here!</router-link>
  </h2>
  <router-link to='/'>
    <back>
      ◄ Return to game
    </back>
  </router-link>
  <br><br><br><br><br><br><br>
  <footer>
    Licensed under GNU
  </footer>

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

footer {
  font-size: 12px;
  color: #000000;
  text-align: right;
  font-size: large;
}
back {
  background-color: #000000;
  padding: 5px;
  border-radius: 5px;
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

</style>
