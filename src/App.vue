<template>
  <v-app>
<v-content class="mb-10">
<router-view></router-view>
</v-content >
<Footer></Footer>

  </v-app>
</template>

<script>

import Footer from "./components/Footer"





export default {

  components: {
    "Footer": Footer

  },

  data () {
    return {


    }
  }
}
</script>

<style>

@media (min-width: 1081px) {


#app{

  background-image: url("../src/assets/mirror_sea_photoshop_121434_1920x1080.jpg"); 
  background-repeat:round;
    background-attachment: fixed;
}
 }

 @media (min-width: 623px) and (max-width: 1081px) {


#app{

  background-image: url("../src/assets/screen-3.jpg"); 
  background-repeat:round;
    background-attachment: fixed;
}
 }

  @media (max-width: 623px) {


#app{

  background-image: url("../src/assets/screen-0.jpg"); 
  background-repeat:round;
    background-size: cover;
      background-attachment: fixed;
}
 }




 /* for ipad landscape, to keep!!*/

 @media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) 
and (orientation : landscape){

#app{

  background-image: url("../src/assets/screen-3.jpg"); 
  background-repeat:round;
    background-size: cover;
      background-attachment: fixed;


}
 }

  /* for ipad portrait, to keep!!*/

 @media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) 
and (orientation : portrait){

#app{

  background-image: url("../src/assets/screen-3copy.jpg"); 
  background-repeat:round;
    background-size: cover;
      background-attachment: fixed;


}
 }


 /* for iphone X portrait */


@media only screen 
and (min-device-width : 375px) 
and (max-device-width : 812px) 
and (orientation : portrait) { 
  
  #app{

  background-image: url("../src/assets/screen-0.jpg"); 
  background-repeat:round;
    background-size: cover;
      background-attachment: fixed;


}
  }

</style>

