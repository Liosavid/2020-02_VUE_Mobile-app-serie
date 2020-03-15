<template>

    <section>

      <v-app-bar fixed app class="text-center" dark dense d-flex align-content-center>

        <v-flex>

          <v-title class="title">Login</v-title>

        </v-flex>
      </v-app-bar>
      <navigation></navigation>

      <div class="d-flex flex-column justify-center align-center mt-12 mr-8 pt-12">

        <section id="firebaseui-auth-container"></section>

        <v-chip large color=orange id="please_log" class="mt-10">Please log in to use the chat. <v-icon right>
            mdi-account-outline</v-icon>
        </v-chip>

        <div v-show="user">
          <a @click="signoutButtonPressed">Logout</a>
        </div>

      </div>
    </section>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
export default {
  name: "Login",
  data() {
    return {};
  },
  components: {},


  methods: {
    signoutButtonPressed(e) {
      e.stopPropagation();
      firebase.auth().signOut();
      this.$router.push({
        name: "Login"
      });
    }

  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    var uiConfig = {
      signInSuccessUrl: "/profile", // This redirect can be achived by route using callback.
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>

<style scoped>


#app {

  background-image: url("../assets/screen-3.jpg") !important;
}

#firebaseui-auth-container {
  /* margin-top:110px;
margin-right:30px; */
  height: 100px;


}


#please_log {

  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0 24px;
  left: 7px;


}


@media (max-width: 623px) {

  #please_log {

    top: 225px;



  }
}

@media (min-width: 623px) and (max-width:1000px) {



  #please_log {

    top: 350px;



  }
}



body {
  margin: 0;
  padding: 0;
  background-image: url("../assets/1304830.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}

a {
  text-decoration: none !important;
  color: inherit;
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  text-align: center;
}

nav p {
  padding: 0;
  margin: 0;
}

nav li {
  display: inline-block;
  width: calc(100vw / 4.6);
  padding: 10px;
  font-weight: bold;
}

.bottom-navigation {
  width: 100%;
  background-color: #242323;
  text-align: center;
  position: fixed;
  bottom: 0;
  color: white;
  margin: 0;
}


</style>