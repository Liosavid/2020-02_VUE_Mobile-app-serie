<template>


<div id="profile">


    <v-app-bar fixed app class="text-center" dark dense d-flex align-content-center>

        <v-flex>

            <v-title class="title">Profile</v-title>

        </v-flex>
    </v-app-bar>

    <div class="card horizontal" style="max-width:400px;margin:0 auto;" v-if="user">
        <div class="card-image" style="margin-left:10px;"> <img :src="user.photoURL"
                style="width:100px;height:100px;border-radius:50%;border:4px solid #333" /> </div>
        <div class="card-stacked">
            <div class="card-content">
                <p><strong>{{user.displayName}}</strong><br /><strong>{{user.email}}</strong>
                    <br /><strong class="teal-text">{{user.providerData[0].providerId}}</strong> </p>
            </div>
        </div>
    </div>


    <div class="text-center" v-show="user">
        <v-btn class="logout" color="error" @click="signoutButtonPressed">Log out</v-btn>
    </div>


</div>

</template>

<script>

import firebase from "firebase";


export default {
    data() {
        return {
            user: null
        };
    },

    methods: {
        signoutButtonPressed(e) {
            e.stopPropagation();
            firebase.auth().signOut();
            this.$router.push({
                name: "Login"
            });
        }

    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;
            }
        });
    }
}

</script>

<style scoped>

#profile .card {
    text-align: center;
    color: white;
    padding-top: 150px;
    padding-right: 20px;
    background-color: transparent;
    border: none;
}


#app {

    background-image: url('../assets/screen-3.jpg') !important;
}

.logout{

    right:10px;
    top:60px;
}

@media  (max-width: 400px){
.logout{

    right:10px;
    top:120px;
}
 }

@media (min-width: 500px) and (max-width: 1200px){
.logout{

    right:10px;
    top:220px;
}

}

</style>