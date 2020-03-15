<template>

  <div>

    <v-app-bar fixed app class="text-center" dark dense d-flex align-content-center>
      <v-flex>
        <v-title class="title">Messenger</v-title>

      </v-flex>
    </v-app-bar>
    <div class="container">
      <div class="messaging">
        <div class="inbox_msg">

          <div class="mesgs">
            <div class="msg_history text-center">
              <div v-for="(message,i) in messages" v-bind:key="i" class="">

                <div :class="[message.email==authUser.email ?'received_withd_msg':'received_withd_msg_2']">
                  <div>
                    <p>{{message.author}}: {{message.message}}
                    </p><span class="name_author"></span>
                  </div>
                </div>
              </div>

            </div>
            <div class="type_msg">
              <div class="input_msg_write">
                <input @keyup.enter="saveMessage" v-model="message" type="text" class="write_msg"
                  placeholder="Type a message" />
                <button @click="saveMessage" class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o"
                    aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>


<script>

import firebase from "firebase";



export default {
  name: 'PrivateChat',
  data() {
    return {
      message: null,
      messages: [],
      authUser: {}
    }
  },

  methods: {

    scrollToBottom() {
      let box = document.querySelector('.msg_history');
      box.scrollTop = box.scrollHeight;

    },




    saveMessage() {
      // Save to Firestore

      window.db.collection("chat").add({
        message: this.message,
        author: this.authUser.displayName,
        email: this.authUser.email,
        createdAt: new Date()

      }).then(() => {
        this.scrollToBottom();

      })

      this.message = null;

    },

    fetchMessages() {
      console.log("Get msg");

      window.db.collection('chat').orderBy('createdAt').onSnapshot((querySnapshot) => {
        let allMessages = [];
        querySnapshot.forEach(doc => {
          allMessages.push(doc.data())
        })

        this.messages = allMessages;

        setTimeout(() => {

          this.scrollToBottom();


        }, 1000);


      })

    }

  },

  watch: {


  },

  created() {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {

        this.authUser = user;
      } else {

        this.authUser = {}
      }
    })

    this.fetchMessages();

  },

  beforeRouteEnter(to, from, next) {
    next(vm => {

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next();
        } else {
          vm.$router.push('/login')

        }

      })
    })
  }


}


</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-image: url("../assets/1304830.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}


::placeholder {
  color: white;
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

v-card-title {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
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
}




.card:hover,
.buttons_seasons:hover {
  transform: scale(1.04);
  transition: 0.5s;
}

@media (max-width: 782px) {
  .fa-2x {
    font-size: 1.8em;
  }
}


.messaging {
  padding: 0 !important;
  margin: 0 !important;

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

/*--------------------------------------- chat --------------------------- */

.container {
  max-width: 1170px;
  margin: auto;
  margin-top: 30px;

}

img {
  max-width: 100%;
}

.inbox_msg {
  border-radius: 15px !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
  clear: both;
  overflow: hidden;
}

.top_spac {
  margin: 20px 0 0;
}


.recent_heading {
  float: left;
  width: 40%;
}

.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%;
  padding:
}

.headind_srch {
  padding: 10px 29px 10px 20px;
  overflow: hidden;
  border-bottom: 1px solid #c4c4c4;
}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}


.chat_ib h5 {
  font-size: 15px;
  color: #464646;
  margin: 0 0 8px 0;
}

.chat_ib h5 span {
  font-size: 13px;
  float: right;
}

.chat_ib p {
  font-size: 14px;
  color: #989898;
  margin: auto
}

.chat_img {
  float: left;
  width: 11%;
}

.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people {
  overflow: hidden;
  clear: both;
}

.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}

.inbox_chat {
  height: 550px;
  overflow-y: scroll;
}

.active_chat {
  background: #ebebeb;
}


.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
}

.received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #1b1515;
  font-size: 14px;
  margin: 0;
  width: 70%;
  border-radius: 25px;
  padding: 10px;

}

.received_withd_msg_2 p {
  padding: 10px;
  position: relative;
  left: 110%;
  background: #576db8 none repeat scroll 0 0;
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  margin: 0;
  width: 70%;
  border-radius: 25px;

}

.name_author {
  background-color: none;
  color: #b96017;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}

.received_withd_msg,
.received_withd_msg_2 {
  width: 55%;
}

.mesgs {
  padding: 30px 15px 0 25px;
  width: 100%;
}


@media (max-width: 700px) {

  .received_withd_msg_2 p,
  .received_withd_msg p {
    left: 80%;

    width: 100%;

  }


}


.sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0;
  color: #fff;
  padding: 5px 10px 5px 12px;
  width: 100%;
}

.outgoing_msg {
  overflow: hidden;
  margin: 26px 0 26px;
}

.sent_msg {
  float: right;
  width: 46%;
}

.input_msg_write input {
  background: rgba(218, 2, 2, 0) none repeat scroll 0 0;
  border: medium none;
  color: white;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
}

.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}

v-application--wrap {
  margin: 0;


}

.msg_history {
  height: 300px;
  overflow-y: auto;
}

@media (min-width: 700px) and (max-width: 1030px) {
  .msg_history {
    height: 650px;
    overflow-y: auto;

  }

}

@media (max-width: 700px) {
  .msg_history {
    height: 530px;
    overflow-y: auto;


  }


}


</style>
