<template>
  <v-app>
    <navbar></navbar>

    <v-content>
     <indexmain></indexmain>
    </v-content>
  </v-app>
</template>

<script>
import navbar from './components/Navbar';
import indexmain from './components/Index';

export default {
  name: 'App',

  components: {
    navbar,indexmain
  },

  data: () => ({
    //
  }),
};
</script>
