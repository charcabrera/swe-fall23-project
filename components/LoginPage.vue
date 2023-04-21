<!-- This is a new file for our actual project lmao -->
<script setup lang="ts">

</script>

<template>
  <img alt="Vue logo" class="logo" src="../assets/UNIVERSE_TITLE_TEXT.png" />
  <h1>
    LOGIN!
  </h1>

  <form action="/action_page.php">
    <label for="usrname"></label>
    <input type="text" id="usrname" name="usrname" placeholder="Username" required>
    <br>
    <label for="psw"></label>
    <input type="password" id="psw" name="psw" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
    <br>
    <input type="submit" value="Log In">
   </form>


  <h2>
    First time playing? Sign up <a href="https://youtu.be/sUYgwiAAN-4?t=4" target="_blank" rel="noopener">here</a>!
  </h2>
  <br><br><br><br><br><br><br>
  <footer>
    Licensed under GNU. You can literally steal all of this code and we can't stop you. :(
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