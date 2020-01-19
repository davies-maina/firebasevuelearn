<template>
<v-container>
    <v-form
    
    
    @submit.prevent="logIn"
  >
    

    <p v-if="feedback" class="red--text">{{feedback}}</p>

    <v-text-field
      v-model="email"
      
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      type="password"
      
      label="Password"
      required
    ></v-text-field>

    <v-btn
      
      color="success"
      class="mr-4"
      type="submit"
      
    >
     Log in
    </v-btn>

    
  </v-form>
</v-container>
</template>

<script>

export default {
    name:'Login',
    data() {
        return {
            feedback:'',
            email:'',
            password:''
        }
    },
    methods: {
        logIn(){

            if (this.email && this.password) {
                this.feedback='';
                firebase.auth().signInWithEmailAndPassword(
                    this.email,this.password
                )
                    .then((user)=>{

                        /* console.log(user) */
                        this.$router.push({name:'Gmap'})
                    })
                    .catch((error)=>{

                        this.feedback=error.message
                    })
            }
            else{

                this.feedback='You must enter credentials'
            }
        }
    },
}
</script>