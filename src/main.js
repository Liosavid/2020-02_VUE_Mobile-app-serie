import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Routes from './routes.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import firebase from 'firebase'
import vuetify from './plugins/vuetify';

// Required for side-effects
require("firebase/firestore");

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


const firebaseConfig = {
  apiKey: "AIzaSyAz7aFESMBmkTANUulqHeErUROtt5KLwE0",
  authDomain: "blackm-vue.firebaseapp.com",
  databaseURL: "https://blackm-vue.firebaseio.com",
  projectId: "blackm-vue",
  storageBucket: "blackm-vue.appspot.com",
  messagingSenderId: "784480966260",
  appId: "1:784480966260:web:800aba2a6a7c36781fe321",
  measurementId: "G-Z1FW31BC53"
};

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();


// db.settings({timestampsInSnapshots:true});

// Get a reference to the database service
var database = firebase.database();
window.database = database;
window.db = db;

const router = new VueRouter({
routes:Routes,
mode:'history'
});


new Vue({
  el: '#app',
  render: h => h(App),
  vuetify,
  router:router
})
