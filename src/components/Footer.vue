<template>
  <div class="bottom-navigation">
    <nav>

      <ul>
        <li>
          <router-link to="/login">
            <v-icon x-large color="white">directions_walk</v-icon>
            <p>Log in</p>
          </router-link>
        </li>
        <li>
          <router-link to="/shows">
            <v-icon x-large color="white">tv</v-icon>
            <p>Shows</p>
          </router-link>
        </li>

        <li>
          <router-link to="/chat">
            <v-icon x-large color="white">chat</v-icon>
            <p>Chat</p>
          </router-link>
        </li>
        <li>
          <router-link to="/profile">
            <v-icon x-large color="white">person_pin_circle</v-icon>
            <p>Profile</p>
          </router-link>
        </li>


      </ul>
    </nav>



  </div>

</template>



<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;

}

.bottom-navigation {
  width: 100%;
  background-color: #242323;
  text-align: center;
  position: fixed;
  bottom: 0;
  margin: 0;
  height: 80px;

}



ul li p {
  text-decoration: none;
  color: white;

}

nav ul {
  padding: 0 !important;
  display: flex;
  justify-content: space-around;
}

nav li {

  display: inline-block;
  padding: 10px;
  font-weight: bold;
  justify-content: space-between;
}

</style>
