<template>

  <div id="vue-container">


    <v-app-bar fixed app class="text-center" dark dense d-flex align-content-center>

      <v-flex>

        <v-toolbar-title class="title">Black Mirror Episodes</v-toolbar-title>

      </v-flex>
    </v-app-bar>


    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12>
          <div id="buttons_seasons" class="text-center ">
            <v-btn v-on:click="
                filter_title_season, choose('1'), (isActive1 = !isActive1)
              " type="button" class="btn btn-light" value="1">
              Season 1
            </v-btn>
            <v-btn rounded v-on:click="
                filter_title_season, choose('2'), (isActive2 = !isActive2)
              " type="button" class="btn btn-light" value="2">
              2
            </v-btn>
            <v-btn v-on:click="
                filter_title_season, choose('3'), (isActive3 = !isActive3)
              " type="button" class="btn btn-light" value="3">
              3
            </v-btn>
            <v-btn v-on:click="
                filter_title_season, choose('4'), (isActive4 = !isActive4)
              " type="button" class="btn btn-light" value="4">
              4
            </v-btn>
            <v-btn v-on:click="
                filter_title_season, choose('5'), (isActive5 = !isActive5)
              " type="button" class="btn btn-light" value="5">
              5
            </v-btn>
          </div>

          <div id="search-bar" class="text-center pt-2">
            <input input type="text" v-model="search" placeholder="Search for a title" class="" />
            <v-icon x-large color="white">search</v-icon>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container id="" class="mb-5">

      <v-layout row wrap justify-content-center>

        <v-flex xs12 sm6 md4 lg3 v-for="(serie,i) in filter_title_season" v-bind:key="i">

          <v-card class="mx-auto" max-width="400">
            <router-link :to="`/shows/episode/${serie.season}/${serie.number}`">
              <v-img class="white--text align-end content-center" height="200px" v-bind:src="serie.image.medium">
                <v-card-title id="title_serie">{{ serie.name }}</v-card-title>
              </v-img>
            </router-link>

            <v-card-subtitle class="pb-0 text-center mb-3"> Season {{ serie.season }} Episode {{ serie.number }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <v-dialog max-width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn small class="" v-on="on">
                    <v-icon left small> notes
                    </v-icon> Summary
                  </v-btn>
                </template>
                <v-card id="popup">

                  <v-card-title>{{ serie.name }}</v-card-title>
                  <div v-html="serie.airdate"></div>
                  <div class="text-justify" v-html="serie.summary"></div>
                </v-card>
              </v-dialog>

            </v-card-text>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import axios from 'axios'

export default {

  data() {
    return {
      series: null,
      bm_episodes: [],
      search: "",
      active_season: "",
      bm_episodes_seasons: [],
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      dialog: false

    };
  },

  methods: {
    // filterSeason: function(){
    //   return (document.getElementsByClassName("btn").value = this.bm_episodes.season);

    // }

    getData() {

      this.season
      this.episode

      var that = this
      axios.get('https://api.tvmaze.com/shows/305/episodebynumber?season=' + 1 + '&number=' + 1)
        .then(function (response) {
          // handle success
          that.series = response.data
          console.log(response.data);
        })
    },



    choose: function (choice) {
      return (this.active_season = choice);
    }
  },

  created() {
    fetch(
        "https://api.tvmaze.com/singlesearch/shows?q=black-mirror&embed=episodes"
      )
      .then(function (response) {
        return response.json();
      })
      .then(dataFromServer => {
        console.log(dataFromServer);
        this.bm_episodes = dataFromServer._embedded.episodes;
        console.log(this.bm_episodes);
      });
  },


  mounted:

    function () {
      this.getData()


    },

  computed: {
    filter_title_season: function () {
      let filterSeason = [];
      let filterTitle = [];

      if (this.active_season == "") {
        filterSeason = this.bm_episodes;
      }

      filterSeason = this.bm_episodes.filter(episode => {
        return episode.name.toLowerCase().match(this.search.toLowerCase());
      });

      filterTitle = filterSeason.filter(episode => {
        return episode.season == this.active_season;
      });

      if (filterTitle.length == 0) {
        filterTitle = filterSeason;
      }

      return filterTitle;
    }
  }
};
</script>

<style>


v-app-bar {
  display: flex;

}


#popup {

  padding: 10px;
}


* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
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

#title_serie {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  justify-items: flex-start;
  height: 30px;
  background-color: black;
  color: white;
  padding: 0;
}






::placeholder {

  color: black;
}



@media (max-device-width: 1081px) {
  ::placeholder {

    color: white;
  }

  input:focus {
    color: white;
  }
}











.top-navigation ul {
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
}

.top-navigation li {
  text-align: center;
  display: inline-block;
  width: 49.5%;
  margin: 0;
  padding: 0;
  font-size: 20px;
}

#title-page {
  position: fixed;
  align-items: center;
  text-align: center;
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #242323;
  color: white;
  height: 30px;
  font-weight: bold;
  top: 0;
}

.top-navigation li:hover {
  transform: scale(1.02);
  transition: 1s;
}

nav li:hover {
  transform: scale(1.2);
  transition: 1s;
}

#summary_episode {
  text-align: justify;
}

.flex:hover,
.btn:hover {
  transform: scale(1.05);
  transition: 0.5s;
}

.flex {
  padding: 3px;

}

.v-card__text {
  display: flex;
  height: 50px;
  justify-content: center;
  overflow: hidden;

}

.btn {
  margin-left: 02px;

}

@media (max-width: 782px) {
  .fa-2x {
    font-size: 1.8em;
  }
}


#vue-container {
  width: 100%;

}

#vue-container .card {
  height: 300px;
  background-color: #e6e3e3;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}

#search_icon {
  height: 30px;
}

#container-shows {
  overflow-y: scroll;
  width: 900px;
  height: 400px;
}

/* ---------------------- iPad in portrait & landscape------------------------ */

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  #container-shows {
    height: 1200px;
    font-size: 20px;
  }

  .top-navigation {
    font-size: 160%;
    margin-bottom: 30px;
    height: 50px;
  }

  .container {
    width: 100%;
    max-width: none;
  }



  /* .active {
      font-size: 50px;
    }

    .btn {
      font-size: 20px;
    }

    .top-navigation li {
      text-align: center;
      display: inline-block;
      margin: 0;
      padding: 0;
      font-size: 30px;
    }

    #col_div_img_episode {
      position: relative;
      left: -30px;
    }

    #div_name_summary {
      width: 550px;
    } */
}

/* ---------------------iPhone X in portrait ------------------------------ */

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
  #container-shows {
    height: 500px;
    font-size: 30px;
  }

  .container {
    width: 100%;
    max-width: none;
  }

  #img_episode {
    justify-content: center;
    display: flex;
    align-items: center;

  }

  #div_img_episode {
    display: flex;
    top: 200px;
    align-content: center;
    align-items: center;
  }

  #col_div_img_episode {
    flex-direction: column;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  #number_episode {
    display: flex;

    align-items: flex-start;
  }
}

/* ---------------------iPhone X in landscape ------------------------------ */

/* @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape) {
    #container-shows {
      height: 1800px;
      font-size: 30px;
    }

    .container {
      width: 100%;
      max-width: none;
    }

    #img_episode {
      justify-content: center;
      display: flex;
      align-items: center;
      width: 350px;
      height: 230px;
    }
  } */

/* -----------------------iPhone 6, 7, & 8 in portrait ------------------------------ */

/* @media only screen 
and (min-device-width : 375px) 
and (max-device-width : 667px) 
and (orientation : portrait) { 
  
#container-shows{
  width:2000px;
  height:1800px;
  font-size:25px;

}

#img_episode{
  justify-content: center;
  display: flex;
  align-items:center;
  margin-top:40px;



}


#div_img_episode{
  display: flex;
  align-content: center;
  align-items:center;


}

#col_div_img_episode{
  flex-direction: column;
  display: flex;
  align-items:center;


}


#number_episode{
    display: flex;
align-items: flex-start;

}


} */

/* -----------------------iPhone 6, 7, & 8 in landscape ------------------------------ */

/* @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: landscape) {
    #container-shows {
      width: 2000px;
      height: 1800px;
      font-size: 20px;
    }

    #img_episode {
      justify-content: center;
      display: flex;
      align-items: center;
      margin-top: 10px;
    }

    #div_img_episode {
      display: flex;
      align-content: center;
      align-items: center;
    }

    #col_div_img_episode {
      flex-direction: column;
      display: flex;
      align-items: center;
    }

    #number_episode {
      display: flex;
      align-items: flex-start;
    }
  } */

/* ------------------------------------------------------------------------------------- */

#img_google {
  width: 20%;
  position: relative;
  top: 200px;
  left: 500px;
}

#star_rating {
  width: 40%;
}

#profile_picture_empty {
  width: 20%;
  position: relative;
  top: 50px;
  z-index: 1;
}

#card-profile {
  align-items: center;
  height: 300px;
  width: 500px;
  bottom: 80px;
}

#add-favorite {
  width: 60%;
}

#card-profile p {
  text-align: left;
  position: absolute;
  top: 150px;
  z-index: 3;
  font-weight: bold;
}

.active {
  background-color: #242323 !important;
  color: white !important;
  font-size: 20px;
}
</style>