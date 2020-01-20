<template>
  <v-card
    class="mx-auto"
    max-width="400"
    v-if="profile"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">{{profile.alias}}</v-list-item-title>
        <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <!-- <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">
          23&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>
 -->
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>48%</v-list-item-subtitle>
    </v-list-item>

    

   
  </v-card>
</template>

<script>
import db from '../../firebase/init'
export default {
    name:'Profile',
    data() {
        return {
            profile:''
        }
    },

    created() {
        db.collection('users').doc(this.$route.params.id).get()
            .then((user)=>{

                this.profile=user.data()
            })

    },
}
</script>