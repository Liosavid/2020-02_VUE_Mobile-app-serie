import Shows from './components/Shows.vue';
import Chat from './components/Chat.vue';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';
import Shows_single from './components/Shows_single.vue';




export default [{
    path: '/',
    component: Shows
  },
  {
    path: '/shows/',
    component: Shows,
    props:true
  },

  {
path: '/shows/episode/:season/:episode',
    component: Shows_single,
    props:true
  },
  

  {
    path: '/login',
    component: Login
  },

  {
    path: '/profile',
    component: Profile
  },

  {
    path: '/chat',
    component: Chat
  }

]
