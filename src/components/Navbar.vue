<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link :to="{name:'Gmap'}">
        <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      </router-link>

      <v-spacer></v-spacer>
      <router-link :to="{name:'Signup'}" v-if="!user">
        <v-btn
        
       
      >
        <span class="mr-2">Signup</span>
        
      </v-btn>
      </router-link>
      <router-link :to="{name:'Login'}" v-if="!user">
        <v-btn
       
      >
        <span class="mr-2">Login</span>

      </v-btn>
      
      </router-link>
      <p v-if="user">{{user.email}}</p>
      
       <v-btn
       v-if="user"
       @click="logout"
      >
        <span class="mr-2">Logout</span>
        
      </v-btn>
      

      <router-link :to="{name:'AddSmoothie'}">
        <v-btn
       
      >
        <span class="mr-2">Add smoothie</span>
        <v-icon>add</v-icon>
      </v-btn>
      </router-link>
    </v-app-bar>
</template>

<script>
export default {

  data() {
    return {
      user:''
    }
  },
  methods: {
    logout(){

      firebase.auth().signOut()
        .then(()=>{

          this.$router.push({name:'Login'})
        })
    }
  },

  created() {
    firebase.auth().onAuthStateChanged((user)=>{

      if (user) {
        this.user=user
      }

      else{

        this.user=''
      }
    })
  },
}
</script>